<template>
	<div class="grid md:grid-cols-2 pt-6 mx-6">
		<div class="md:w-5/6 w-full md:h-4/6 mx-auto mb-6">
			<ImagePreview :productInformation="productInformation" />
		</div>

		<div class="md:w-4/5">
			<ProductDetails :productInformation="productInformation" />

			<CountIndicator
				:count="count"
				@changeCount="changeCount($event)"
				class="mt-6"
			/>

			<BlockButton
				:buttonText="buttonText"
				color="bg-[#ffd811]"
				@click="addToCart"
				class="my-4"
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import BlockButton from '../components/buttons/BlockButton.vue';
	import CountIndicator from '../components/product/CountIndicator.vue';
	import ImagePreview from '../components/media/ImagePreview.vue';
	import ProductDetails from '../components/product/ProductDetails.vue';

	const buttonText = ref('Add to Basket');

	const count = ref(1);

	const productInformation = ref({
		brand: 'Samsung',
		model: 'Samsung Galaxy S23 Plus 5G',
		cost: '£880.00',
		sim: 'Duel Sim',
		condition: 'Like New',
		colour: 'Lavender',
		network: 'Unlocked',
		storage: '512GB',
		isLimited: 'true',
		media: [
			{
				id: 1,
				type: 'image',
				main: 'assets/productImages/product-image.jpeg',
				thumbnail: 'assets/productThumbnails/product-image-thumbnail.jpeg',
				large: 'assets/productImages/product-image-large.jpeg'
			},
			{
				id: 2,
				type: 'image',
				main: 'assets/productImages/product-image-front.jpeg',
				thumbnail:
					'assets/productThumbnails/product-image-front-thumbnail.jpeg',
				large: 'assets/productImages/product-image-front-large.jpeg'
			},
			{
				id: 3,
				type: 'image',
				main: 'assets/productImages/product-image-back.jpeg',
				thumbnail: 'assets/productThumbnails/product-image-back-thumbnail.jpeg',
				large: 'assets/productImages/product-image-back-large.jpeg'
			},
			{
				id: 4,
				type: 'video',
				main: 'assets/productVideos/single-click-zoom-desktop.mp4',
				thumbnail: 'assets/productVideos/single-click-zoom-desktop.mp4',
				large: 'assets/productVideos/single-click-zoom-desktop.mp4'
			}
		]
	});

	const addToCart = () => alert('Added to Cart');

	const changeCount = (countType) => {
		if (countType === 'minus' && count.value != 1) {
			count.value = count.value - 1;
		} else if (countType === 'plus') {
			count.value = count.value + 1;
		}
	};
</script>
