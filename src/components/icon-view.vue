<template>
	<span class="inline-block" :class="size" v-html="iconActual" />
</template>
<script>

import Vue from 'vue'
import{ getIcon } from '~/utils/icons'

export default Vue.component('IconView', {
	props: {
		icon: {
			type: String,
			required: true,
		},
		sm: { 
			type: Boolean,
			default: false,
		},
		lg: {
			type: Boolean,
			default: false,
		},
		xLg: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		size() {
			if(this.sm) return 'size-4' // 16px
			if(this.lg) return 'size-9' // 36px
			if(this.xLg) return 'size-12' // 48px

			return 'size-6' // 24px
		},

		iconActual() {
			return getIcon(this.icon)
		},
	},
})

</script>