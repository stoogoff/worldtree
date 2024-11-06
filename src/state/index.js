import Vue from 'vue'
import { diceNotationToJson } from '~/utils/dice'
import { sortByProperty } from '~/utils/list'

const state = Vue.observable({
	rolls: [],
	dice: [],
})

export default () => {
	return {
		rolls() {
			return [ ...state.rolls ].sort(sortByProperty('time')).reverse()
		},

		addRoll(roll) {
			state.rolls.push({ ...roll, time: new Date() })
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
