<template>
	<button
		class="w-full rounded py-2 text-lg font-semibold text-black focus:outline-none lg:px-10 xl:px-16"
		:class="color"
	>
		{{ buttonText }}
	</button>
</template>

<script setup>
	defineProps(['buttonText', 'color']);
</script>
