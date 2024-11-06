<template>
	<div>
		<app-nav />
		<div class="container mx-auto">
			<Nuxt />
		</div>
	</div>
</template>
<script>

export default {
	name: 'DefaultLayout',
}

</script>
<style scoped>

.container {
	max-width: 752px;
}

</style>