<template>
  <ContentRenderer v-if="page" :value="page" style="width: 100%;" />
  <div v-else>Literally how </div>
</template>

<script lang="ts" setup>
const { data: page } = await useAsyncData('home', () => {
    return queryCollection('home').first();
});
</script>

<style lang="less" scoped>
:deep(.section) {
  &.landing .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100svh;
    padding: 0 0 0 5em;
    overflow: hidden;

    .left-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;
      z-index: 1;

      h1 {
        color: var(--lavender);
        white-space: nowrap;
      }

      .socials-bar {
        margin: 0.75rem 0;
        height: 1.5em;
      }
    }

    .right-image {
      height: 100%;
      img {
        position: relative;
        object-fit: cover;
        object-position: right;
        aspect-ratio: 1 / 2;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 0;
        image-rendering: pixelated;
      }

      @media (max-width: 768px) {
        img {
          position: absolute;
          object-fit: cover;
          object-position: right;
          aspect-ratio: 1 / 2;
          left: 0;
          top: 0;
          height: 100vh;
          min-width: 100vw;
        }
      }
    }
  }
}
</style>