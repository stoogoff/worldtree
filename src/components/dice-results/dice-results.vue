<template>
	<div class="flex flex-col-reverse items-end overflow-x-scroll">
		<template v-for="roll in $state.rolls()">
			<guest-result v-if="isGuest(roll)" :roll="roll" :key="getKey(roll)" />
			<own-result v-else :roll="roll" :key="getKey(roll)" />
		</template>
	</div>
</template>
<script>

import Vue from 'vue'
import { OWNER_GUEST } from '~/utils/config'

export default Vue.component('DiceResults', {
	methods: {
		isGuest(roll) {
			return roll.owner === OWNER_GUEST
		},

		getKey(roll) {
			return `${ roll.owner }-${ roll.timestamp.valueOf() }`
		},
	},
})

</script>