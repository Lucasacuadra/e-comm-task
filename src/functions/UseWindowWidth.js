import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function useWindowWidth() {
	const windowWidth = ref(window.innerWidth);

	const updateWindowWidth = () => {
		windowWidth.value = window.innerWidth;
	};

	onMounted(() => {
		updateWindowWidth();
		window.addEventListener('resize', updateWindowWidth);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', updateWindowWidth);
	});

	return { windowWidth };
}
