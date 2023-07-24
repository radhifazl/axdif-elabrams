import { ref, onMounted, onUnmounted } from 'vue';

export default function useIsDesktop() {
    const isDesktop = ref(false);
    
    const checkIsDesktop = () => {
        const isDesktopMediaQuery = window.matchMedia('(min-width: 968px)');
        isDesktop.value = isDesktopMediaQuery.matches;
    };
    
    onMounted(() => {
        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
    });
    
    onUnmounted(() => {
        window.removeEventListener('resize', checkIsDesktop);
    });
    
    return { isDesktop };
}