<template>
  <a-config-provider
    :theme="{
      components: {
        Button: {
          colorPrimary: '#F0659A',
          colorPrimaryHover: 'wheat',
          algoritm: true,
        },
      },
    }"
  >
    <a-button
      :type="buttonType"
      class="flex items-center"
      @click="onClick"
      :disabled="disabled"
      :icon="buttonIcon"
      >{{ label }}</a-button
    >
  </a-config-provider>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
  },
  buttonIcon: {
    type: String,
  },
  buttonType: {
    type: String,
    default: "primary",
  },
});
</script>
