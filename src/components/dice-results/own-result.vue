<template>
	<div class="chat-row mb-4">
		<div class="chat-bubble">
			<time :datetime="roll.timestamp.toISOString()" class="block w-full mb-0.5 text-sm text-right">{{ dateString }}</time>
			<dice-result class="bg-wt-panel rounded-3xl p-4" :roll="roll" />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'
import WithDiceresult from '~/mixins/with-dice-result'

export default Vue.component('OwnResult', {
	mixins: [ WithDiceresult ],
})

</script>