<template>
  <a-date-picker
    v-model="formattedValue"
    :locale="locale"
    @change="handleChange"
    :disabledDate="disabledDate"
    format="DD/MM/BBBB"
  />
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { DatePicker } from "ant-design-vue";
import { dayjs, locale } from "./dayjsLocale";

const props = defineProps({
  inputValue: {
    type: Date,
  },
});

const value = ref(null);

// Function to set default value to current B.E. year
const setDefaultToCurrentBEYear = () => {
  const currentYear = dayjs().year(); // Get current year in Gregorian
  const gregorianDate = dayjs().year(currentYear).subtract(543, "year");
  value.value = gregorianDate;
};

setDefaultToCurrentBEYear();

const handleChange = (date, dateString) => {
  if (date) {
    const buddhistDate = dayjs(date).add(543, "year"); // Convert to Buddhist Era
    value.value = buddhistDate;
  } else {
    setDefaultToCurrentBEYear(); // Reset to default if value becomes null
  }
};

const formattedValue = computed({
  get: () =>
    value.value ? dayjs(value.value).subtract(543, "year").toDate() : null,
  set: (newValue) => {
    value.value = newValue ? dayjs(newValue).add(543, "year").toDate() : null;
  },
});

const disabledDate = (current) => {
  return false;
};
</script>

<style>
/* Add any custom styles here */
</style>
