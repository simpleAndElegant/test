<template>
<div class="container">
  <div class="container-left">
    <div
      class="container-left-logo"
      :style="url"
       @click="handleGoHome"
    />
    <div
      :style="backgroundColor"
      class="container-left-line"
    />
    <div
      :style="textColor"
       @click="handleGoCommunity"
      class="container-left-text"
    >
      编程社区
    </div>
  </div>
</div>
</template>

<script lang="ts">
import DetailLogo from '@/assets/detail/detailLogo.png';
import HomeLogo from '@/assets/home/homeLogo.png';
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'common-head',
  props: {
    type: String,
  },
  setup(props) {
    const isWhite = props.type === 'white';
    const router = useRouter();

    const handleGoHome = () => {
      window.location.href = process.env.VUE_APP_WEBSITE;
    };
    const handleGoCommunity = () => {
      router.push({
        path: '/',
      });
    };

    const url: {} = computed(() => ({ 'background-image': `url(${isWhite ? HomeLogo : DetailLogo})` }));
    const backgroundColor: {} = computed(() => ({ background: isWhite ? '#FFFFFF' : '#553C1E' }));
    const textColor: {} = computed(() => ({ color: isWhite ? '#FFFFFF' : '#553C1E' }));

    return {
      backgroundColor,
      textColor,
      url,
      handleGoHome,
      handleGoCommunity,
    };
  },
});

</script>

<style lang="less" scoped>
.container {
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  &-left{
    display: flex;
    height: inherit;
    align-items: center;
    width: 230px;
    justify-content: space-around;
    cursor: pointer;
    &-logo {
      width: 111px;
      height: 23px;
      background-size: contain;
      background-repeat: no-repeat;
    }
    &-line {
      width: 2px;
      height: 16px;
      border-radius: 2px;
    }
    &-text {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #553C1E;
    }
  }
}
</style>
