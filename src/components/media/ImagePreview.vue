<template>
	<div class="bg-white shadow-sm shadow-gray-200 w-full">
		<div class="flex">
			<div class="my-auto justify-start">
				<ChevronLeftButton @click="arrowClick('minus')" />
			</div>

			<div
				class="flex rounded justify-center mx-auto mb-4 p-2 cursor-pointer"
				:class="activeClass"
			>
				<div class="mx-auto">
					<ImageSlider
						:images="imagesForMobile()"
						:currentSlide="selectedMedia.id - 1"
						@click="showPopup = !showPopup"
						@handleSwipe="arrowClick"
					/>
				</div>
			</div>

			<div class="my-auto justify-end">
				<ChevronRightButton @click="arrowClick('plus')" />
			</div>
		</div>

		<PopupModal
			v-if="showPopup"
			:selectedMedia="selectedMedia"
			:productInformation="productInformation"
			:images="images"
			:videos="videos"
			@close="showPopup = false"
			@setSelectedMedia="setSelectedMedia"
			@handleSwipe="arrowClick"
		/>

		<div v-if="!isMobileScreen" class="flex justify-center pb-2">
			<ThumbnailPreview
				v-for="item in images"
				:key="item.id"
				:activeClass="
					item.id === selectedMedia.id ? 'border border-blue-600' : 'none'
				"
				:image="item.thumbnail"
				@click="setSelectedMedia(item)"
			/>
			<ThumbnailVideoPreview
				v-for="item in videos"
				:key="item.id"
				:activeClass="item.id === selectedMedia.id ? 'bg-blue-600' : 'none'"
				@click="setSelectedMedia(item)"
			/>
		</div>
	</div>

	<div class="flex justify-center mb-5 align-center">
		<DotButton
			v-for="item in images"
			:key="item.id"
			class="mt-2 mx-2"
			:activeClass="item.id === selectedMedia.id ? 'bg-red-500' : 'none'"
			@click="setSelectedMedia(item)"
		/>
		<div v-if="!isMobileScreen">
			<MiniPlayButton
				v-for="item in videos"
				:key="item.id"
				class="mt-2 mx-2"
				:activeClass="item.id === selectedMedia.id ? '#ef4444' : 'none'"
				@click="setSelectedMedia(item)"
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import ChevronLeftButton from '../buttons/ChevronLeftButton.vue';
	import ChevronRightButton from '../buttons/ChevronRightButton.vue';
	import DotButton from '../buttons/DotButton.vue';
	import ImageSlider from './ImageSlider.vue';
	import MiniPlayButton from '../buttons/MiniPlayButton.vue';
	import PopupModal from '../product/PopupModal.vue';
	import ThumbnailPreview from '../product/ThumbnailPreview.vue';
	import ThumbnailVideoPreview from '../product/ThumbnailVideoPreview.vue';

	const props = defineProps(['productInformation']);

	const isMobileScreen = ref(window.innerWidth < 450);

	const images = ref(
		props.productInformation.media.filter((item) => item.type === 'image')
	);

	const videos = ref(
		props.productInformation.media.filter((item) => item.type === 'video')
	);

	const selectedMedia = ref(images.value[0]);
	const showPopup = ref(false);

	const imagesForMobile = () => {
		if (isMobileScreen.value) {
			return images.value;
		} else return props.productInformation.media;
	};

	const setSelectedMedia = (item) => (selectedMedia.value = item);

	const arrowClick = (countType) => {
		const currentSelectedMedia = selectedMedia.value.id;

		if (countType === 'minus' && selectedMedia.value.id != 1) {
			const findnewId = props.productInformation.media.find(
				(item) => item.id === currentSelectedMedia - 1
			);
			selectedMedia.value = findnewId;
		} else if (
			countType === 'plus' &&
			isMobileScreen.value &&
			selectedMedia.value.id != images.value.length
		) {
			const findnewId = props.productInformation.media.find(
				(item) => item.id === currentSelectedMedia + 1
			);
			selectedMedia.value = findnewId;
		} else if (
			countType === 'plus' &&
			!isMobileScreen.value &&
			selectedMedia.value.id != props.productInformation.media.length
		) {
			const findnewId = props.productInformation.media.find(
				(item) => item.id === currentSelectedMedia + 1
			);
			selectedMedia.value = findnewId;
		}
	};
</script>
