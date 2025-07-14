<template>
  <ContentRenderer v-if="page" :value="page" style="width: 100%;" />
  <div v-else>Literally how </div>
</template>

<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
});

const { data: page } = await useAsyncData('home', () => {
    return queryCollection('home').first();
});

onMounted(() => {
  window.addEventListener('resize', () => {
    landingPageOverflow.value = calcLandingPageOverflow();
    const leftText = document.querySelector('.section.landing .left-text');
    if (leftText) {
      textHeight.value = leftText.clientHeight * 1.2;
    }
  });
  setTimeout(() => {
    const container = document.querySelector('.section.landing .content');
    if (container) {
      Array.from(container.children).forEach(child => {
        child.classList.add('visible');
      });
    }
    landingPageOverflow.value = calcLandingPageOverflow();
    const leftText = document.querySelector('.section.landing .left-text');
    if (leftText) {
      textHeight.value = leftText.clientHeight * 1.2;
    }
  }, 100);
});

function calcLandingPageOverflow() {
  if (window.innerWidth <= 768) return 0;
  const container = document.querySelector('.section.landing .content');
  if (!container) return -1;
  const leftText = container.querySelector('.left-text');
  if (!leftText) return -1;
  const rightImage = container.querySelector('.right-image');
  if (!rightImage) return -1;
  const aspectRatio = 435/876;
  const height = rightImage.clientHeight;
  const imageWidth = height * aspectRatio;
  const padding = parseFloat(getComputedStyle(container).paddingLeft);
  const textWidth = leftText.clientWidth;
  return container.clientWidth - (imageWidth + padding + textWidth);
}

const textHeight = ref(0);

const landingPageOverflow = ref(0);

const landingImageAdjustment = computed(() => {
  return landingPageOverflow.value / 2;
});

const landingTextAdjustment = computed(() => {
  return landingPageOverflow.value / 3;
})

</script>

<style lang="less" scoped>
:deep(.section) {
  @media (max-width: 768px) {
    &.background-lambda::before {
      content: '';
    }
  }
  &.landing .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100svh;
    padding: 0 0 0 5em;
    overflow: hidden;
    
    @media (max-width: 768px) {
      padding: 0 0 0 0;
    }

    .left-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;
      z-index: 1;
      transform: translateX(v-bind('landingTextAdjustment + "px"'));

      &:not(.visible) {
        h1 {
          opacity: 0;
          transform: translateX(-50px);
        }
      }

      @media (max-width: 768px) {
        position: absolute;
        right: 0.5rem;
        top: 5rem;
        padding: 1.5rem 1.5rem;
        gap: 0.5rem;
        width: max-content;
        background-color: color-mix(in srgb, var(--surface0) 75%, transparent);
        border-radius: 3rem;

        * {
          z-index: 1;
        }

        &::before {
          content: 'λ';
          position: absolute;
          top: 0;
          right: 7.5%;
          font-size: v-bind('textHeight + "px"');
          color: var(--surface0);;
          transform: translateY(-22%);
          z-index: 0;
        }
      }

      h1 {
        transition: opacity 0.4s, transform 0.4s;
        color: var(--lavender);
        white-space: nowrap;
      }

      .socials-bar {
        margin: 0.75rem 0;
        height: 1.5em;
      }
    }


    .right-image {
      transition: opacity 0.2s ease-out, transform 0.4s ease-out, filter 0.4s cubic-bezier(.4,.01,0,1);
      height: 100%;

      &:not(.visible) {
        filter: blur(10px);
        opacity: 0;
        transform: translateX(100px);
      }
      &.visible {
        filter: blur(0px);
        opacity: 1;
        transform: translateX(0px);
      }

      img {
        position: relative;
        object-fit: cover;
        object-position: right;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 0;
        image-rendering: pixelated;
        transition: transform 0.4s ease-in-out;
        transform: translateX(v-bind('landingImageAdjustment + "px"'));
      
        @media (max-width: 768px) {
          position: absolute;
          object-fit: cover;
          object-position: right;
          left: 0.5rem;
          top: 0;
          height: 100vh;
          min-width: 100vw;
          transform: translateX(0px);
        }
      }
    }
  }

  &.about .content {
    background-color: var(--mantle);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    padding: 0 2.5%;

    .left-image {
      width: 50%;
      height: 100%;
    }

    .right-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 75%;
      text-align: center;
    } 
  }
}
</style>