<template>
	<div class="h-full">
		<app-nav />
		<div class="container mx-auto h-full">
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