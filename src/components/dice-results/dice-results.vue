<template>
	<div>
		<own-result v-for="roll in $state.rolls()" :roll="roll" />
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceResults', {
	
})

</script>