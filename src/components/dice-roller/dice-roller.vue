<template>
	<div class="relative" @focusout="hide" tabindex="0">
		<dice-roller-input v-model="value" @open="show" />
		<transition
			enter-active-class="transition duration-300 ease-out transform"
			enter-class="translate-y-3 scale-95 opacity-0"
			enter-to-class="translate-y-0 scale-100 opacity-100"
			leave-active-class="transition duration-150 ease-in transform"
			leave-class="translate-y-0 opacity-100"
			leave-to-class="translate-y-3 opacity-0"
		>
			<div v-show="isVisible" class="absolute pt-2 z-10 left-0 bottom-14">
				<dice-roller-menu />
			</div>
		</transition>
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceRoller', {
	data() {
		return {
			isVisible: false,
			value: '',
		}
	},

	methods: {
		hide() {
			this.isVisible = false
		},

		show() {
			this.isVisible = true
		},
	},
})

</script>
