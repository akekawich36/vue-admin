<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-1" v-if="state.label">
      <label :for="state.id">{{ state.label }}</label>
      <span v-if="isRequired && state.label" class="text-danger">*</span>
    </div>
    <a-input
      :id="state.id"
      :name="state.name"
      v-model:value="state.value"
      :status="state.status"
      :placeholder="state.placeholder"
      :prefix="
        typeof state.prefix === 'string' ? state.prefix : h(state.prefix)
      "
      :suffix="
        typeof state.suffix === 'string' ? state.suffix : h(state.suffix)
      "
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, reactive, h } from "vue";

const emit = defineEmits(["update:inputValue"]);

const props = defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  inputValue: {
    type: String,
  },
  status: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  prefix: {
    type: [String, Object],
  },
  suffix: {
    type: [String, Object],
  },
  onValueChange: {
    type: Function,
  },
});

const state = reactive({
  id: props.id ? props.id : props.name,
  name: props.name ?? "",
  value: props.inputValue ?? "",
  status: props.status ?? "",
  placeholder: props.status ?? "",
  label: props.label ?? "",
  prefix: props.prefix ?? "",
  suffix: props.suffix ?? "",
  rule: props.rule ?? "",
});

watch(
  () => state.value,
  (newValue, oldValue) => {
    emit("update:inputValue", newValue);
    // onValueChange(newValue);
  }
);
</script>

<style scoped></style>
