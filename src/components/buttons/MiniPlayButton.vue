<template>
	<button
		class="flex items-center justify-center w-5 h-3 text-gray-500 hover:text-red-500"
	>
		<svg
			class="w-4 h-4"
			:fill="activeClass"
			stroke="#94a3b8"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 3l14 9-14 9V3z"
			></path>
		</svg>
	</button>
</template>

<script setup>
	defineProps(['activeClass']);
</script>
