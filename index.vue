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
        @handleGoCreate="goCreate"
      />
      <TemplateDialog
        ref="TemplateDialog"
        :category="clickType"
      />
      <Carousel
        class="home-top--carousel"
      />
    </div>
    <div class="home-content">
      <div
        v-show="theme === 'Blue'"
        class="home-content-blue"
      />
      <div
        v-show="theme === 'Yellow'"
        class="home-content-yellow"
      />
      <div
        v-show="theme === 'Green'"
        class="home-content-green"
      />
      <HandpickCabinet
        @hanedleClickSwiper="handleGoDetail"
      >
        <h1 class="home-content--title" slot="title">
          <i class="cupIcon"/>
          <span class="title">精选作品</span>
        </h1>
      </HandpickCabinet>

      <ThemeCabinet
        @hanedleClickSwiper="handleGoDetail"
      >
        <h1 class="home-content--title" slot="title">
          <i class="ballIcon"/>
          <span class="title">主题作品</span>
        </h1>
      </ThemeCabinet>
    </div>
    <div class="home-bottom">
        京ICP备09032638号-42
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Carousel from '@/components/Carousel/index.vue';
import FreeCreate from '@/components/FreeCreate/index.vue';
import TemplateDialog from '@/components/TemplateDialog/index.vue';
import HandpickCabinet from '@/components/HandpickCabinet/index.vue';
import ThemeCabinet from '@/components/ThemeCabinet/index.vue';
import CommonHead from '@/components/CommonHead/index.vue';
import YellowBg from '@/assets/home/yellowBg.png';
import BlueBg from '@/assets/home/blueBg.png';
import GreenBg from '@/assets/home/greenBg.png';
import {
  setViewBuryingPoint,
} from '@/utils/buryingPoint';

export default {
  name: 'home',
  components: {
    Carousel,
    FreeCreate,
    HandpickCabinet,
    ThemeCabinet,
    CommonHead,
    TemplateDialog,
  },
  data() {
    return {
      isShowTemplateDialog: false,
      clickType: 1,
    };
  },
  created() {
    setViewBuryingPoint(
      this,
      '156-3031',
    );
  },
  computed: {
    ...mapState('global', [
      'theme',
    ]),
    backgroundUrl() {
      const urlmapping = {
        Yellow: YellowBg,
        Blue: BlueBg,
        Green: GreenBg,
      };
      return {
        'background-image': `url(${urlmapping[this.theme]})`,
      };
    },
  },
  methods: {
    handleGoDetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.id,
        },
      });
    },
    goCreate({ name }) {
      const typeMap = {
        图形化编程: 1,
        Python: 2,
        'Python-turtle': 3,
      };
      this.clickType = typeMap[name];
      this.$refs.TemplateDialog.dialogVisible = true;
    },
  },
};
</script>

<style lang='less' scoped>

.home {
  display: flex;
  flex-direction: column;
  position: relative;
  &-logo {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
  }
  &-avatar {
    position: absolute;
    z-index: 10;
    top: 8px;
    right: 12px;
  }
  &-top {
    width: 100%;
    height: 316px;
    background-color: #FFFDF6;
    background-repeat: round;
    background-size: contain;
    position: relative;
    padding-top: 99px;
    display: flex;
    justify-content: center;
    z-index: 2;
    transition: all 1s;
    &--carousel {
      margin-left: 10px;
    }
  }
  &-content{
    min-height: 700px;
    background: #FFFDF6;
    padding-top: 200px;
    position: relative;
    z-index: 1;
    &-blue {
      width: 76px;
      height: 53px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('~@/assets/home/blueContentIcon.png');
      position: absolute;
      right: 0;
      top: 600px;
      animation: fade 1s linear;
      @keyframes fade {
        0% {
          opacity: 0;
          }
        100% {
          opacity: 1;
        }
      }
    }
    &-yellow {
      width: 128px;
      height: 67px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('~@/assets/home/yellowContentIcon.png');
      position: absolute;
      right: 0;
      top: 600px;
      animation: fade 1s linear;
      @keyframes fade {
        0% {
          opacity: 0;
          }
        100% {
          opacity: 1;
        }
      }
    }
    &-green {
      width: 59px;
      height: 35px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('~@/assets/home/greenContentIcon.png');
      position: absolute;
      right: 32px;
      top: 600px;
      animation: fade 1s linear;
      @keyframes fade {
        0% {
          opacity: 0;
          }
        100% {
          opacity: 1;
        }
      }
    }
    &--title {
      height: 41px;
      text-align: center;
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      display: flex;
      align-items: center;
      justify-content: center;
      >span {
        height: 41px;
        line-height: 48px;
        margin-left: 10px;
      }
    }
    &::after {
      content: '';
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      z-index: -1;
      border-radius: 100% 100% 0 0;
      background: #FFF7E7;
    }
  }

  &-bottom {
    background: #FFFDF6;
    width:100%;
    height: 240px;
    background: #FFF7E7;
    text-align: center;
    line-height: 380px;
  }
}
.cupIcon {
  background-image: url('../../assets/home/cupIcon.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 48px;
  height: 41px;
}

.ballIcon {
  background-image: url('../../assets/home/ballIcon.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 48px;
  height: 41px;
}

</style>
