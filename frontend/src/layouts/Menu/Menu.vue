<template>
  <a-menu
    class="border-0 py-4"
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    :inline-collapsed="state.collapsed"
    :items="mainMenu"
    @click="(item) => menuClicked(item)"
  ></a-menu>
</template>

<script setup>
import {
  defineEmits,
  defineProps,
  ref,
  watch,
  reactive,
  onBeforeMount,
} from "vue";
import { useRouter } from "vue-router";
import mainMenu from "../../menuItems/index.js";

const router = useRouter();

const state = reactive({
  collapsed: false,
  openKeys: ["1"],
  preOpenKeys: ["1"],
  selectedKeys: ["1"],
});

onBeforeMount(() => {
  const routeNow = mainMenu.find(
    (item) => item.link == window.location.pathname
  );

  if (routeNow) {
    state.selectedKeys = [routeNow?.key];
  }
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
.ant-menu-item,
.ant-menu-submenu-title {
  border-radius: 1.5rem !important;
  height: 2.5rem !important;
}

.ant-menu-submenu-selected .ant-menu-submenu-title {
  color: #f0659a !important;
}

.ant-menu-item-selected {
  background-color: #f0659a !important;
  border-radius: 1.5rem !important;
  color: #fff !important;
}

.ant-menu-inline .ant-menu-sub.ant-menu-inline {
  background-color: #fff !important;
}
</style>
