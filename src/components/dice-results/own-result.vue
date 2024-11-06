<template>
	<div class="chat-row mb-4 overflow-hidden">
		<div class="chat-bubble float-right">
			<time datetime="" class="block w-full mb-0.5 text-sm text-right">Today at 7:14pm</time>
			<dice-result class="bg-wt-panel rounded-3xl p-4" :roll="roll" />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('OwnResult', {
	props: {
		roll: {
			type: Object,
			required: true,
		},
	},
})

</script>