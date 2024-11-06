<template>
	<div class="h-full flex flex-col-reverse items-end">
		<own-result v-for="roll in $state.rolls()" :roll="roll" :key="roll.time.valueOf()" />
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceResults', {})

</script>