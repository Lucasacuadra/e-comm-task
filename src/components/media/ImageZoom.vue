<template>
	<div class="zoom-container relative overflow-hidden" @click="handleClick">
		<img
			ref="zoomImageRef"
			alt="Zoomable Image"
			:src="imageUrl"
			class="pl-4 mx-auto cursor-pointer"
			:class="{
				'max-h-[76vh]': isInModal,
				'max-h-[60vh]': !isZoomed && !isInModal
			}"
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import useWindowWidth from '@/functions/UseWindowWidth';

	const { windowWidth } = useWindowWidth();

	const props = defineProps(['imageUrl', 'isInModal']);

	const isZoomed = ref(false);
	const zoomImageRef = ref(null);
	const lastClickTime = ref(null);

	const handleClick = (event) => {
		if (windowWidth.value > 450 && props.isInModal) {
			toggleZoom(event);
		} else {
			const currentTime = new Date().getTime();
			const timeSinceLastClick = currentTime - lastClickTime.value;

			if (timeSinceLastClick <= 300) {
				toggleZoom(event);
			}

			lastClickTime.value = currentTime;
		}
	};

	const toggleZoom = (event) => {
		const image = zoomImageRef.value;
		const { offsetX, offsetY } = event;
		const imageWidth = image.offsetWidth;
		const imageHeight = image.offsetHeight;

		const clickXPercentage = offsetX / imageWidth;
		const clickYPercentage = offsetY / imageHeight;

		isZoomed.value = !isZoomed.value;

		if (isZoomed.value) {
			image.style.transition = 'transform 1s ease';
			image.style.transformOrigin = `${clickXPercentage * 100}% ${
				clickYPercentage * 100
			}%`;
			image.style.transform = 'scale(2)';
		} else {
			image.style.transition = 'transform 1s ease';
			image.style.transformOrigin = `${clickXPercentage * 100}% ${
				clickYPercentage * 100
			}%`;
			image.style.transform = 'scale(1)';
		}
	};
</script>

<style>
	.zoom-container {
		overflow-x: auto;
		overflow-y: auto;
	}
</style>
