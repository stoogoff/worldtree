import Vue from 'vue'
import { OWNER_SELF, OWNER_GUEST } from '~/utils/config'
import { diceNotationToJson } from '~/utils/dice'
import { sortByProperty } from '~/utils/list'

const state = Vue.observable({
	rolls: [],
	dice: [],
})

export default () => {
	return {
		rolls() {
			return [ ...state.rolls ].sort(sortByProperty('timesamp')).reverse()
		},

		addOwnRoll(roll) {
			// there may be a race condition here with own rolls coming in from
			// the socket server before the response is received from the API
			const existing = this.findLooseMatch(roll)

			// if that has happened update the existing roll
			if(existing) {
				existing.owner = OWNER_SELF
			}
			else {
				state.rolls.push({ ...roll, timestamp: new Date(), owner: OWNER_SELF })
			}
		},

		addGuestRoll(roll) {
			// check to see if there's an existing roll with the same notation and result
			// if there is, don't add it as it's the roll we've just sent
			const existing = this.findLooseMatch(roll)

			if(existing) return

			state.rolls.push({ ...roll, timestamp: new Date(Date.parse(roll.timestamp)), owner: OWNER_GUEST })
		},

		findLooseMatch(roll) {
			return state.rolls
				.find(({ notation, sum }) => notation === roll.notation && sum === roll.sum)
		},

		dice() {
			return state.dice
		},

		addDice(type, count, negative = false, kh = null, kl = null) {
			const existing = state.dice.find(dice => dice.type === type)

			if(existing) {
				existing.count = count

				if(kh !== null) existing.keepHighest = kh
				if(kl !== null) existing.keepLowest = kl
			}
			else {
				const dice = { type, count, negative }

				if(kh !== null) dice.keepHighest = kh
				if(kl !== null) dice.keepLowest = kl

				state.dice.push(dice)
			}
		},

		notation() {
			return state.dice.map(dice => {
				let output = `${ dice.count }${ dice.type === 'constant' ? '' : dice.type }`

				if(dice.keepHighest) output += 'kh'
				if(dice.keepLowest) output += 'kl'

				return output
			}).join('+') // TODO handle negative
		},

		// very basic parseing if dice notation
		updateNotation(notation) {
			this.clearDice()

			const dice = diceNotationToJson(notation)

			dice.forEach(d => {
				if(d.constant) {
					this.addDice('constant', d.constant)
				}
				else {
					this.addDice('d' + d.sides, d.count, d.negative, d.keepHighest ?? null, d.keepLowest ?? null)
				}
			})
		},

		clearDice() {
			state.dice = []
		},
	}
}
