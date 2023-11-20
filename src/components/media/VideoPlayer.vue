<template>
	<div class="my-auto">
		<video ref="videoPlayer" width="640" height="460" controls>
			<source :src="video" type="video/mp4" />
		</video>
	</div>
</template>

<script setup>
	defineProps(['video']);
</script>
