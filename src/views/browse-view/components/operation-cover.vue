<template>
  <div class="operation-cover" @contextmenu.prevent="context_menu">
    <div class="top" @click="switch_menu"></div>
    <div class="middle">
      <div class="left" @click="before"></div>
      <div class="right" @click="next"></div>
    </div>
    <div class="bottom" @click="switch_footer"></div>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import {config} from "@/store";

export default defineComponent({
  name: 'operation-cover',
  // 数据
  data() {
    return {}
  },

  // 传值
  props: [],

  // 引用
  computed: {},

  // 组件
  components: {},

  // 方法
  methods: {
    before() {
      this.$emit('before');
    },
    next() {
      this.$emit('next');
    },
    switch_menu() {
      this.$emit('switchMenu');
    },
    switch_footer() {
      this.$emit('switchFooter');
    },
    context_menu() {
      config.rightSidebar = true;
    }
  },

  // 生命周期
  created() {
  },
})
</script>

<style scoped lang='less'>
.operation-cover {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  .top {
    height: 30%;
  }

  .middle {
    display: flex;
    flex: 1;

    .left {
      width: 50%;
      height: 100%;
    }

    .right {
      width: 50%;
      height: 100%;
    }
  }

  .bottom {
    height: 30%;
  }
}
</style>
