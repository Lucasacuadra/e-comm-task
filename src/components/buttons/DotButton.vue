<template>
	<button
		:class="activeClass"
		class="hover:bg-red-500 ring-gray-400 ring-1 rounded-full h-3 w-3 flex items-center justify-center"
	></button>
</template>

<script setup>
	defineProps(['activeClass']);
</script>
