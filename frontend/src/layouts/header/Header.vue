<template>
  <a-layout-header
    class="px-4 fixed bg-layout shadow-boxHeader flex items-center justify-between w-full"
    :class="classProps"
  >
    <menu-fold-outlined
      class="trigger text-black"
      v-if="!collapseSidebar"
      @click="toggleSidebar"
    />
    <menu-unfold-outlined
      class="trigger text-black"
      v-else
      @click="toggleSidebar"
    />
    <div class="text-black">test</div>
  </a-layout-header>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { defineProps, defineEmits } from "vue";

defineProps({
  collapseSidebar: {
    type: Boolean,
    required: true,
  },
  drawerActive: {
    type: Boolean,
  },
  classProps: {
    type: String,
  },
});

const emit = defineEmits(["toggleSidebar"]);

const toggleSidebar = () => {
  emit("toggleSidebar");
};
</script>

<style scoped>
.trigger {
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
  color: white;
}

.trigger:hover {
  color: #1890ff;
}
</style>
