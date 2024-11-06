import Vue from 'vue'

const state = Vue.observable({
	rolls: [],
})

export default () => {
	return {
		rolls() {
			return state.rolls
		},

		addRoll(roll) {
			state.rolls.push({ ...roll, time: new Date() })
		},
	}
}
