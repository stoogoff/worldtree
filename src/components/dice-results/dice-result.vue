<template>
	<div class="p-4">
		<div>/r {{ roll.notation }}</div>
		<div>
			<span v-for="(output, index) in roll.results">
				<span v-if="output.type === 'constant'" class="text-wt-on-surface">{{ output.result }}</span>
				<span v-else>
					(
						<span v-for="(dice, index) in output.allRolls">
							<span :class="isKept(output, dice)">{{ dice }}</span>
							<span v-if="index < output.allRolls.length - 1">{{ allKept ? '+' : '|' }} </span>
						</span>
					)
				</span>
				<span v-if="index < roll.results.length - 1">+ </span>
			</span>
		</div>
		<div>= <span class="text-wt-on-surface">{{ roll.sum }}</span></div>
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceResult', {
	props: {
		roll: {
			type: Object,
			required: true,
		},
	},

	methods: {
		isKept(diceRoll, current) {
			return diceRoll.keptRolls.includes(current) ? 'text-wt-on-surface': ''
		},

		allKept(diceRoll) {
			return diceRoll.keptRolls.length === diceRoll.allRolls.length
		}
	},
})

</script>