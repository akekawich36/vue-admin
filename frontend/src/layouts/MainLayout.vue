<template>
  <div class="h-screen">
    <a-layout class="h-full">
      <SidebarVue v-model:collapseSidebar="collapseSidebar" />
      <a-layout
        :class="[
          'transition-all duration-200',
          collapseSidebar ? 'ms-[0]' : 'ms-[252px]',
        ]"
      >
        <HeaderVue
          :collapseSidebar="collapseSidebar"
          @toggleSidebar="toggleSidebar"
        />
        <a-layout-content class="mt-16 p-4 bg-layout">
          <Breadcrumb />
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import SidebarVue from "./siderbar/Sidebar.vue";
import HeaderVue from "./header/Header.vue";
import Breadcrumb from "./breadcrumb/Breadcrumb.vue";

import { ref, watch, onMounted } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

// const mdScreen = breakpoints.smallerOrEqual("md");
// const smScreen = breakpoints.smallerOrEqual("sm");

// onMounted(() => {
//   if (mdScreen.value && !smScreen.value) {
//     collapseSidebar.value = !collapseSidebar.value;
//   }
// });

const collapseSidebar = ref(false);

const toggleSidebar = () => {
  collapseSidebar.value = !collapseSidebar.value;
};
</script>
