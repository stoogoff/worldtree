
import state from '~/state'

export default (context, inject) => {
	inject('state', state())
}
