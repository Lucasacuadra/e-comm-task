<template>
	<div class="bg-slate-100 md:h-screen h-full">
		<MainHeader />

		<ProductPage />
	</div>
</template>

<script setup>
	import MainHeader from './components/navigation/MainHeader.vue';
	import ProductPage from './views/ProductPage.vue';
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
