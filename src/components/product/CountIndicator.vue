<template>
	<div class="flex items-center justify-center sm:justify-start">
		<MinusButton @click="$emit('changeCount', 'minus')" />
		<div class="px-4 py-2 font-bold bg-gray-200 lg:px-6 lg:py-3 no-select">
			{{ count }}
		</div>
		<PlusButton @click="$emit('changeCount', 'plus')" />
	</div>
</template>

<script setup>
	import MinusButton from '../buttons/MinusButton.vue';
	import PlusButton from '../buttons/PlusButton.vue';

	defineProps(['count']);
	defineEmits(['changeCount']);
</script>
