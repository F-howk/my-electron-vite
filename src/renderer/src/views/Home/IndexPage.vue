<template>
  <div class="container">
    <div class="slider">
      <div
        v-for="item in sliderList"
        :key="item.type"
        :class="activeType == item.type ? 'active' : ''"
        class="slider-item"
        @click="changeHandle(item.type)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="main">
      <div v-if="activeType == 'filter'">filter</div>
      <div v-else-if="activeType == 'transition'">transition</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const activeType = ref('filter')

const sliderList = reactive([
  {
    label: '滤镜',
    type: 'filter'
  },
  {
    label: '转场',
    type: 'transition'
  }
])

const changeHandle = (type: string) => {
  activeType.value = type
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  .slider {
    width: 150px;
    border-right: 1px solid #eee;
    padding: 10px;
    .slider-item {
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      border-radius: 5px;
      margin-bottom: 5px;
      &:hover {
        background-color: #eee;
      }
      &.active {
        background-color: #eee;
      }
    }
  }
  .main {
    flex: 1;
    padding: 10px;
  }
}
</style>
