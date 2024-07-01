<template>
  <a-drawer
    :placement="placement"
    :closable="true"
    :open="drawerActive"
    @close="onClose"
  >
    <Menu />
  </a-drawer>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Menu from "../Menu/Menu.vue";

const props = defineProps({
  drawerActive: {
    type: Boolean,
  },
});
const placement = ref("left");
// const open = ref(false);
// const showDrawer = () => {
//   open.value = true;
// };
const onClose = () => {
  open.value = false;
};
</script>

<style>
.ant-drawer-content-wrapper {
  width: 250px !important;
}

.ant-drawer-body {
    padding: 1.5rem 0.5rem !important;
}
</style>
