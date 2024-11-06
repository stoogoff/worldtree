<template>
	<div class="chat-row mb-4 overflow-hidden">
		<div class="chat-bubble float-right">
			<time :datetime="roll.time.toISOString()" class="block w-full mb-0.5 text-sm text-right">{{ dateString }}</time>
			<dice-result class="bg-wt-panel rounded-3xl p-4" :roll="roll" />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'
import { formatDate } from 'date-fns/format'
import { isToday } from 'date-fns/isToday'

export default Vue.component('OwnResult', {
	props: {
		roll: {
			type: Object,
			required: true,
		},
	},

	computed: {
		dateString() {
			if(isToday(this.roll.time)) {
				return 'Today at ' + formatDate(this.roll.time, 'h:m aa')
			}

			return formatDate(this.roll.time, 'do MMM yyyy h:m aa')
		},
	},
})

</script>