import { ref, onMounted, onUnmounted } from 'vue';

export default function useIsMobile() {
  const isMobile = ref(false);

  const checkIsMobile = () => {
    const isMobileMediaQuery = window.matchMedia('(max-width: 768px)');
    isMobile.value = isMobileMediaQuery.matches;
  };

  onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkIsMobile);
  });

  return { isMobile };
}