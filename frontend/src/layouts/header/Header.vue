<template>
  <a-layout-header class="ps-2">
    <menu-unfold-outlined
      class="trigger"
      @click="toggleSidebar"
      v-if="!collapseSidebar"
    />
    <menu-fold-outlined
      class="trigger"
      @click="toggleSidebar"
      v-if="collapseSidebar"
    />
  </a-layout-header>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
  collapseSidebar: {
    type: Boolean,
    required: true,
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

.ant-layout-header{
    padding-inline: 16px;
}
</style>
