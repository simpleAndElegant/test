<template>
<div class="container">
  <div class="container-top">
    <div
      class="container-top-avatar"
    />
    <div class="container-top-text">
    </div>
  </div>
  <div class="container-title">
    自由创作
  </div>
  <ul class="container-content">
    <li
      v-for="(item, index) in creationInfo"
      :key="index"
      @click="handleCreation(item)"
    >
      {{item.name}}
    </li>
  </ul>
  <!-- <div
    v-show="theme === 'Green'"
    class="container-decoration-green"
  />
  <div
    v-show="theme === 'Yellow'"
    class="container-decoration-yellow"
  />
  <div
    v-show="theme === 'Blue'"
    class="container-decoration-blue"
  />
  <div
    v-show="theme === 'Blue'"
    class="container-cloud"
  /> -->
</div>
</template>

<script lang="ts">
// import { mapState, mapMutations } from 'vuex';
// import unLogined from '@/assets/home/unLogined.png';

import {
  defineComponent, ref, onMounted,
} from 'vue';
import { startCreate } from '@/services/api/home';
import { FreeCreateList } from '@/services/types/home';

export default defineComponent({
  name: 'free-create',
  setup(props) {
    const creationInfo = ref([]);
    async function handleStartCreate() {
      try {
        const { data: { data } } = await startCreate<FreeCreateList>();
        creationInfo.value = data;
      } catch (error) {
        // TODO
        // useMessage
      }
    }

    onMounted(() => {
      handleStartCreate();
    });
    return {
      creationInfo,
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  width: 237px;
  height: 320px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  position: relative;
  &-top {
    &-avatar {
      width: 80px;
      height: 80px;
      position: absolute;
      right: calc( (100% - 80px)/2);
      top: -40px;
      background-size: contain;
      cursor: pointer;
    }
    &-text {
      position: absolute;
      text-align: center;
      top: 50px;
      width: 100%;
    }
  }

  &-title{
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 30px;
    padding-top: 88px;
    text-align: center;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    > li {
      width: 160px;
      height: 37px;
      background: #FCCE22;
      border-radius: 19px;
      border: 2px solid #F2C10C;
      text-align: center;
      line-height: 37px;
      margin-bottom: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &-decoration {
    &-yellow {
      left:  -100px;
      bottom: -26px;
      width: 223px;
      height: 89px;
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 2;
      transition: all .5s;
      background-position: center;
      background-image: url('~@/assets/home/yellowDecoration-free.png');
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
    &-blue {
      left: -70px;
      bottom: -30px;
      width: 110px;
      height: 89px;
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 2;
      transition: all .5s;
      background-position: center;
      background-image: url('~@/assets/home/blueDecoration-free.png');
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
      left: -123px;
      bottom: -30px;
      width: 173px;
      height: 94px;
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 2;
      transition: all .5s;
      background-position: center;
      background-image: url('~@/assets/home/greenDecoration-free.png');
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
  }
  &-cloud {
    width: 148px;
    height: 53px;
    left: -110px;
    top: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    transition: all 1s;
    z-index: 2;
    background-position: center;
    background-image: url("~@/assets/home/cloudDecoration.png");
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

}

</style>
