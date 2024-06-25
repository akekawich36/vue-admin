<template>
  <div class="h-screen">
    <a-layout class="h-full">
      <SidebarVue v-model:collapseSidebar="collapseSidebar" />
      <a-layout>
        <HeaderVue
          :collapseSidebar="collapseSidebar"
          @toggleSidebar="toggleSidebar"
        />
        <a-layout-content class="p-4">
          <div class="text-white p-4 h-full">
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarVue from "./siderbar/Sidebar.vue";
import HeaderVue from "./header/Header.vue";

const collapseSidebar = ref(false);

const toggleSidebar = () => {
  collapseSidebar.value = !collapseSidebar.value;
};
</script>
