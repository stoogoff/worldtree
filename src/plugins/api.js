
import diceRoller from '~/api/dice-roller'

export default (context, inject) => {
	inject('diceRoll', diceRoller(context))
}
