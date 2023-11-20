<template>
	<div
		class="relative flex rounded justify-center p-2 w-16 h-16 cursor-pointer"
		:class="activeClass"
	>
		<img :src="image" />
	</div>
</template>

<script setup>
	defineProps(['activeClass', 'image']);
</script>
