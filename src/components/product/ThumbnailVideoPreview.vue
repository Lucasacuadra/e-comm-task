<template>
	<div
		class="relative flex rounded justify-center p-2 w-16 h-16 cursor-pointer"
	>
		<button
			class="flex items-center justify-center w-10 h-10 bg-gray-500 text-white rounded-full"
			:class="activeClass"
		>
			<svg
				class="w-6 h-6"
				fill="white"
				stroke="currentColor"
				viewBox="1 0 18 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 3l14 9-14 9V3z"
				></path>
			</svg>
		</button>
	</div>
</template>

<script setup>
	defineProps(['activeClass']);
</script>
