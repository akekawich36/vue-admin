<template>
  <a-layout-sider
    class="px-4 fixed h-screen transition-all duration-200"
    :class="collapsed ? '' : 'max-w-[250px] flex-[0_0_250px] w-[250px]'"
    :trigger="null"
    collapsible
    v-model:collapsed="collapsed"
  >
    <div class="logo" />
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="mainMenu"
    ></a-menu>
  </a-layout-sider>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, reactive } from "vue";
import mainMenu from "../../menuItems/index.js";

const emit = defineEmits(["update:collapseSidebar"]);

const props = defineProps({
  collapseSidebar: {
    type: Boolean,
    required: true,
  },
});

const collapsed = ref(props.collapseSidebar);

watch(
  () => props.collapseSidebar,
  (newVal) => {
    collapsed.value = newVal;
  }
);

watch(collapsed, (newVal) => {
  emit("update:collapseSidebar", newVal);
});

const state = reactive({
  collapsed: false,
  openKeys: [""],
  preOpenKeys: [""],
});

watch(
  () => state.openKeys,
  (newVal, oldVal) => {
    if (newVal.length > 1) {
      const latestOpenKey = newVal.find((key) => !oldVal.includes(key));
      if (latestOpenKey) {
        state.openKeys = [latestOpenKey];
      }
    }
  }
);
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
