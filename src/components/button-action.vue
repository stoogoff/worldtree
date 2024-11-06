<template>
	<button
		class="btn w-full bg-transparent uppercase rounded border border-wt-outline pt-2.5 pb-2 px-6 font-medium text-sm text-center tracking-wide leading-4"
		:class="classList"
		@click="$emit('click')"
		:disabled="disabled">
		<slot />
	</button>	
</template>
<script>

import Vue from 'vue'

export default Vue.component('ButtonAction', {
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		classList() {
			const classList = []

			if(this.disabled) {
				classList.push('cursor-default shadow-none hover:shadow-none')
			}
			else {
				classList.push('hover:shadow-lg cursor-pointer text-wt-primary')
			}

			return classList.join(' ')
		},
	},
})

</script>