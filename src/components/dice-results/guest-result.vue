<template>
	<div class="flex gap-2 self-start">
		<avatar-view>G</avatar-view>
		<div class="chat-bubble pt-1.5">
			<span class="text-wt-primary">Guest</span>
			<time :datetime="roll.timestamp.toISOString()" class="inline-block ml-1 mb-0.5 text-sm">{{ dateString }}</time>
			<dice-result class="pl-0 pt-0" :roll="roll" />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'
import WithDiceresult from '~/mixins/with-dice-result'

export default Vue.component('GuestResult', {
	mixins: [ WithDiceresult ],
})

</script>