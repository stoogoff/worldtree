import Vue from 'vue'
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

		addDice(type, count) {
			const existing = state.dice.find(dice => dice.type === type)

			if(existing) {
				existing.count = count
			}
			else {
				state.dice.push({ type, count })
			}
		},

		notation() {
			return state.dice.map(dice => `${ dice.count }${ dice.type === 'constant' ? '' : dice.type }`).join('+')
		},

		// very basic parseing if dice notation
		updateNotation(value) {
			this.clearDice()

			const inputs = value.split('+')

			inputs.forEach(item => {
				// it's a dice
				if(item.indexOf('d') !== -1) {
					const [ number, type ] = item.split('d')

					this.addDice('d' + type, parseInt(number))
				}
				// it's a constant
				else if(item !== '') {
					this.addDice('constant', parseInt(item))
				}
			})
		},

		clearDice() {
			state.dice = []
		},
	}
}
