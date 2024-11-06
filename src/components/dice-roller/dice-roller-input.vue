<template>
	<div class="bg-wt-panel rounded-3xl h-12 p-1.5 flex gap-1">
		<span @click="$emit('open')">
			<icon-view lg icon="activator" class="cursor-pointer" />
		</span>
		<div class="w-full flex gap-1 pr-4">
			<span class="min-w-3 pt-2">/r</span>
			<input type="text" placeholder="2d20kh1+1d4+5" class="w-full bg-transparent mt-1 px-1 py-0 focus:outline-none" :value="value" @input="$emit('input', $event.target.value)" />
		</div>
	</div>	
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceRollerInput', {
	props: {
		value: {
			type: String,
			required: true,
		},
	},
})

</script>
