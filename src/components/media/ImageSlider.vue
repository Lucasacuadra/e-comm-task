<template>
	<div
		class="slider"
		:class="{ 'h-[76vh]': isInModal, 'h-[60vh]': !isInModal }"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
	>
		<div
			class="slides"
			:style="{ transform: `translateX(${currentSlide * -100}%)` }"
		>
			<div v-for="slide in images" :key="slide.id" class="slide my-auto">
				<ImageZoom
					v-if="slide.type == 'image'"
					:imageUrl="slide.main"
					:isInModal="isInModal"
				/>
				<VideoPlayer
					v-if="slide.type == 'video' && windowWidth > 450"
					:video="slide.main"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import ImageZoom from './ImageZoom.vue';
	import VideoPlayer from './VideoPlayer.vue';
	import useWindowWidth from '@/functions/UseWindowWidth';

	defineProps(['images', 'currentSlide', 'isInModal']);

	const { windowWidth } = useWindowWidth();

	const emit = defineEmits(['handleSwipe']);

	const isClick = ref(false);
	const touchStartX = ref(0);
	const touchEndX = ref(0);

	const handleTouchStart = (event) => {
		touchStartX.value = event.touches[0].clientX;
		isClick.value = true;
	};

	const handleTouchMove = (event) => {
		touchEndX.value = event.touches[0].clientX;
		isClick.value = false;
	};

	const handleTouchEnd = () => {
		const deltaX = touchEndX.value - touchStartX.value;

		if (deltaX > 200 && !isClick.value) {
			emit('handleSwipe', 'minus');
		} else if (deltaX < -200 && !isClick.value) {
			emit('handleSwipe', 'plus');
		}

		touchStartX.value = 0;
		touchEndX.value = 0;
	};
</script>

<style scoped>
	.slider {
		position: relative;
		overflow: hidden;
		width: 100%;
		max-height: 76vh;
		margin: auto;
	}

	.slides {
		display: flex;
		transition: transform 0.5s ease;
	}

	.slide {
		flex: 0 0 100%;
	}
</style>
