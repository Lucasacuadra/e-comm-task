<template>
	<div class="my-auto">
		<video ref="videoPlayer" class="w-auto h-auto mx-auto" controls>
			<source :src="video" type="video/mp4" />
		</video>
	</div>
</template>

<script setup>
	defineProps(['video']);
</script>
