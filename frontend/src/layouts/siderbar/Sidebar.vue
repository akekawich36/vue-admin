<template>
  <a-layout-sider
    class="fixed h-screen transition-all duration-200 bg-layout shadow-boxSidebar"
    :class="
      collapsed
        ? 'w-[0] min-w-[0] px-0'
        : 'max-w-[250px] flex-[0_0_250px] w-[250px] px-2'
    "
    :trigger="null"
    collapsible
    v-model:collapsed="collapsed"
  >
    <div class="logo" />
    <!-- <a-config-provider
      :theme="{
        components: {
          Menu: {
            colorItemBgSelected: 'red',
            colorItemTextSelected: '#FFF',
            radiusItem: '24px',
            algorithm: true
          },
        },
      }"
    > -->
    <a-menu
      class="border-0"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :inline-collapsed="state.collapsed"
      :items="mainMenu"
      @click="(item) => menuClicked(item)"
    ></a-menu>
    <!-- </a-config-provider> -->
  </a-layout-sider>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, reactive } from "vue";
import { useRouter } from "vue-router";
import mainMenu from "../../menuItems/index.js";

const router = useRouter();
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
