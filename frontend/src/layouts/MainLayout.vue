<template>
  <div class="h-screen">
    <a-layout :hasSider="true">
      <SidebarVue
        v-model:collapseSidebar="collapseSidebar"
        :moreThanLg="moreThanLg"
        :lowerThanSm="lowerThanSm"
      />
      <!-- <Drawer :drawerActive="drawerActive" /> -->
      <a-layout
        :class="[
          'transition-all duration-200',
          !collapseSidebar && !lowerThanSm
            ? 'ms-[252px]'
            : lowerThanSm
            ? 'ms-0 w-full'
            : 'ms-[82px]',
        ]"
      >
        <HeaderVue
          :collapseSidebar="collapseSidebar"
          :drawerActive="drawerActive"
          :lowerThanSm="lowerThanSm"
          @toggleSidebar="toggleSidebar"
          :classProps="
            !collapseSidebar && !lowerThanSm
              ? 'w-[calc(100%-252px)]'
              : lowerThanSm
              ? 'w-full'
              : 'w-[calc(100%-82px)]'
          "
        />
        <a-layout-content
          class="mt-16 p-4 bg-layout fixed h-full"
          :class="
            !collapseSidebar && !lowerThanSm
              ? 'w-[calc(100%-252px)]'
              : lowerThanSm
              ? 'w-full'
              : 'w-[calc(100%-82px)]'
          "
        >
          <div class="h-full overflow-y-auto">
            <Breadcrumb />
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import SidebarVue from "./Siderbar/Sidebar.vue";
import HeaderVue from "./Header/Header.vue";
import Breadcrumb from "./Breadcrumb/Breadcrumb.vue";
import Drawer from "./Drawer/Drawer.vue";

import { ref, watch, onMounted, onBeforeMount } from "vue";
import {
  breakpointsTailwind,
  useBreakpoints,
  useWindowSize,
} from "@vueuse/core";
const { width, height } = useWindowSize();

const moreThanLg = ref(width.value > breakpointsTailwind.lg);
const lowerThanSm = ref(width.value <= breakpointsTailwind.sm);

onMounted(() => {
  if (!moreThanLg.value) {
    collapseSidebar.value = true;
  }
});

watch(
  () => width.value,
  (newValue) => {
    if (newValue <= breakpointsTailwind.lg) {
      collapseSidebar.value = true;
      if (newValue <= breakpointsTailwind.sm) {
        lowerThanSm.value = true;
      } else {
        lowerThanSm.value = false;
      }
    } else {
      collapseSidebar.value = false;
      lowerThanSm.value = false;
    }
  }
);

const collapseSidebar = ref(false);
const drawerActive = ref(false);

const toggleSidebar = () => {
  collapseSidebar.value = !collapseSidebar.value;
};
</script>
