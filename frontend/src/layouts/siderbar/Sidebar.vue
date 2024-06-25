<template>
  <a-layout-sider
    class="px-4 fixed"
    :trigger="null"
    collapsible
    v-model:collapsed="collapsed"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";

const props = defineProps({
  collapseSidebar: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:collapseSidebar"]);

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
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
