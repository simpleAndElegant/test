<template>
  <div class="home">
    <CommonHead
      class="home-logo"
      type="white"
    />
    <div
      class="home-top"
      :style="backgroundUrl"
    >
      <FreeCreate
      />
      <!-- <TemplateDialog
        ref="TemplateDialog"
        :category="clickType"
      />
      <Carousel
        class="home-top--carousel"
      /> -->
    </div>
    <div class="home-bottom">
        京ICP备09032638号-42
    </div>
  </div>
</template>
<script lang="ts">
import FreeCreate from '@/components/FreeCreate/index';
import CommonHead from '@/components/CommonHead/index';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  components: { CommonHead, FreeCreate },
});
</script>
<style
  rel="stylesheet/less"
  src="@/assets/style/home.less"
  lang="less" scoped
>

</style>
