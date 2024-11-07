
import { formatDate } from 'date-fns/format'
import { isToday } from 'date-fns/isToday'

export default {
	props: {
		roll: {
			type: Object,
			required: true,
		},
	},

	computed: {
		dateString() {
			if(isToday(this.roll.timestamp)) {
				return 'Today at ' + formatDate(this.roll.timestamp, 'hh:mm aa')
			}

			return formatDate(this.roll.timestamp, 'do MMM yyyy hh:mm aa')
		},
	},
}