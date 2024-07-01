<template>
  <a-layout-sider
    class="lg:px-2 p-0 fixed h-screen bg-layout shadow-boxSidebar"
    :trigger="null"
    collapsible
    v-model:collapsed="collapsed"
    :collapsedWidth="!lowerThanSm ? '80' : '0'"
    :width="!lowerThanSm ? '250' : '0'"
  >
    <div class="logo" />
    <Menu />
  </a-layout-sider>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, reactive } from "vue";
import { useRouter } from "vue-router";

import Menu from "../Menu/Menu.vue";
import mainMenu from "../../menuItems/index.js";

const router = useRouter();
const emit = defineEmits(["update:collapseSidebar"]);

const props = defineProps({
  collapseSidebar: {
    type: Boolean,
  },
  moreThanLg: {
    type: Boolean,
  },
  lowerThanSm: {
    type: Boolean,
  },
});

const collapsed = ref(props.collapseSidebar);

watch(
  () => props.collapseSidebar,
  (newVal) => {
    collapsed.value = newVal;
  }
);

watch(
  () => props.collapseDrawer,
  (newVal) => {
    collapsedDrawer.value = newVal;
  }
);

watch(collapsed, (newVal) => {
  emit("update:collapseSidebar", newVal);
});

const state = reactive({
  collapsed: false,
  openKeys: ["1"],
  preOpenKeys: ["1"],
  selectedKeys: ["1"],
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

const menuClicked = (item) => {
  if (item?.item?.link) {
    router.push(item?.item?.link);
  }
};
</script>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
