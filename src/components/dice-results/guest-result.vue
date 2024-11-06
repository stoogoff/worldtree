<template>
	<div class="flex gap-2">
		<avatar-view>G</avatar-view>
		<div class="chat-bubble pt-1.5">
			<span class="text-wt-primary">Guest</span>
			<time datetime="" class="inline-block ml-1 mb-0.5 text-sm">Today at 7:14pm</time>
			<dice-result class="pl-0 pt-0" />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('GuestResult', {
	
})

</script>