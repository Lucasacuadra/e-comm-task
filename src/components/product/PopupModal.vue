<template>
	<div class="z-modal modal z-50 fixed inset-0 flex items-center">
		<div class="mx-auto bg-white items-center w-[100vw] h-[100vh]">
			<button
				v-if="windowWidth > 450"
				class="text-gray-500 font-semibold absolute right-2 top-0 mr-3 mt-4 h-3 w-4 self-end"
				@click="$emit('close')"
			>
				X
			</button>
			<div class="md:my-4 w-20 pt-3 pl-3 rounded drop-shadow-md">
				<BlockButton
					v-if="windowWidth < 450"
					buttonText="Back"
					class="border border-gray-500"
					@click="$emit('close')"
				/>
			</div>

			<div
				v-if="windowWidth > 450"
				class="flex border-b border-gray-400 w-11/12 mx-auto pt-2"
			>
				<div
					class="ml-2 cursor-pointer"
					:class="selectedTab === 'image' ? 'text-black' : 'text-gray-400'"
					@click="handleTabChange('image')"
				>
					Images
				</div>
				<div
					class="ml-4 cursor-pointer"
					:class="selectedTab === 'video' ? 'text-black' : 'text-gray-400'"
					@click="handleTabChange('video')"
				>
					Videos
				</div>
			</div>

			<div class="flex pt-3 mx-6 grid md:grid-cols-3">
				<ImageSlider
					class="col-span-2"
					:images="productInformation.media"
					:currentSlide="selectedMedia.id - 1"
					:isInModal="true"
					@handleSwipe="handleSwipe"
				/>

				<div class="mt-4 mx-auto">
					<div v-if="windowWidth > 450" class="mt-4 mb-3 flex">
						<div class="mx-1">
							{{ productInformation.model }}
						</div>
						<div class="mx-1">
							{{ productInformation.colour }}
						</div>
					</div>

					<div v-if="selectedTab === 'image'" class="flex">
						<ThumbnailPreview
							v-for="thumbnail in images"
							:key="thumbnail.id"
							:activeClass="
								thumbnail.id === selectedMedia + 1
									? 'border border-blue-600'
									: 'none'
							"
							:image="thumbnail.thumbnail"
							@click="$emit('setSelectedMedia', thumbnail)"
						/>
					</div>

					<div v-if="selectedTab === 'video'" class="flex">
						<ThumbnailVideoPreview
							v-for="thumbnail in videos"
							:key="thumbnail.id"
							:activeClass="
								thumbnail.id === selectedMedia + 1 ? 'bg-blue-600' : 'none'
							"
							@click="$emit('setSelectedMedia', thumbnail)"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import BlockButton from '../buttons/BlockButton.vue';
	import ImageSlider from '../media/ImageSlider.vue';
	import ThumbnailVideoPreview from './ThumbnailVideoPreview.vue';
	import ThumbnailPreview from './ThumbnailPreview.vue';
	import useWindowWidth from '@/functions/UseWindowWidth';

	const props = defineProps([
		'selectedMedia',
		'images',
		'videos',
		'productInformation'
	]);
	const emit = defineEmits(['close', 'setSelectedMedia', 'handleSwipe']);

	const { windowWidth } = useWindowWidth();

	const selectedTab = ref(props.selectedMedia.type);

	const handleSwipe = (event) => emit('handleSwipe', event);

	const handleTabChange = (tab) => {
		selectedTab.value = tab;
		if (tab === 'video') {
			emit('setSelectedMedia', props.videos[0]);
		} else if (tab === 'image') {
			emit('setSelectedMedia', props.images[0]);
		}
	};
</script>
