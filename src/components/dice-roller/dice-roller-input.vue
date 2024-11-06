<template>
	<div class="bg-wt-panel rounded-3xl h-12 p-1.5 flex gap-1">
		<span @click="$emit('open')">
			<icon-view lg icon="activator" class="cursor-pointer hover:text-wt-on-surface" />
		</span>
		<div class="w-full flex gap-1 pr-4">
			<span class="min-w-3 pt-2">/r</span>
			<input
				type="text"
				placeholder="2d20kh1+1d4+5"
				class="w-full bg-transparent mt-1 px-1 py-0 text-wt-on-surface focus:outline-none"
				:value="notation"
				@focus="$emit('focus')"
				@input="updateNotation($event.target.value)"
				@keyup.enter="roll" />
		</div>
	</div>	
</template>
<script>

import Vue from 'vue'
import { throttle } from '~/utils/timer'

export default Vue.component('DiceRollerInput', {
	computed: {
		notation() {
			return this.$state.notation()
		},
	},

	methods: {
		updateNotation: throttle(function(value)  {
			this.$state.updateNotation(value)
		}, 500),

		async roll() {
			const notation = this.$state.notation()
			const result = await this.$diceRoll.roll(notation)

			this.$state.addRoll(result)
		},
	},
})

</script>
