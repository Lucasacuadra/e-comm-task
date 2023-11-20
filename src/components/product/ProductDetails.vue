<template>
	<div>
		<div class="text-gray-500 flex justify-between mb-1">
			<div class="align-start uppercase">
				{{ productInformation.brand }}
			</div>
			<div
				v-if="productInformation.isLimited"
				class="justify-end capitalize text-green-700"
			>
				{{ limited }}
			</div>
		</div>
		<div class="text-2xl capitalize font-bold">
			{{ productInformation.model }}
		</div>
		<div
			class="text-2xl capitalize font-bold my-4 pb-4 border-b-4 border-gray-200"
		>
			{{ productInformation.cost }}
		</div>

		<div class="border-b-2 border-gray-200 pb-5">
			<ul>
				<li class="flex mb-4">
					<div class="font-bold mr-1 capitalize">sim:</div>
					<div class="uppercase">
						{{ productInformation.sim }}
					</div>
				</li>
				<li class="flex mb-4">
					<div class="font-bold mr-1 capitalize">Condition:</div>
					<div class="uppercase">
						{{ productInformation.condition }}
					</div>
				</li>
				<li class="flex mb-4">
					<div class="font-bold mr-1 capitalize">Colour:</div>
					<div class="uppercase">
						{{ productInformation.colour }}
					</div>
				</li>
				<li class="flex mb-4">
					<div class="font-bold mr-1 capitalize">Network:</div>
					<div class="uppercase">
						{{ productInformation.network }}
					</div>
				</li>
				<li class="flex">
					<div class="font-bold mr-1 capitalize">Storage:</div>
					<div class="uppercase">
						{{ productInformation.storage }}
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	defineProps(['productInformation']);

	const limited = 'hurry limited stock';
</script>
