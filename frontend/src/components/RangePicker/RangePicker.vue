<template>
  <a-range-picker
    v-model="formattedRange"
    :locale="locale"
    @change="handleRangeChange"
    :disabledDate="disabledDate"
    :format="testfunc"
    show-time
  />
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { RangePicker } from "ant-design-vue";
import dayjs from "dayjs";
import { locale } from "../DatePicker/dayjsLocale"; // Make sure you export locale if used

const testfunc = (value) => {
  return dayjs(value).format("DD/MM/BBBB HH:mm");
  return (
    dayjs(value).format("DD/MM/BBBB") + " at " + dayjs(value).format("HH:mm")
  );
};

const props = defineProps({
  inputRange: {
    type: Array,
    default: () => [null, null],
  },
});

const range = ref([null, null]);

// Function to set default value to the current B.E. year range with time
const setDefaultToCurrentBERange = () => {
  const currentYear = dayjs().year(); // Get current year in Gregorian
  const gregorianStart = dayjs()
    .year(currentYear)
    .subtract(543, "year")
    .startOf("month")
    .startOf("day");
  const gregorianEnd = gregorianStart.add(1, "month").endOf("day");
  range.value = [gregorianStart, gregorianEnd];
};

setDefaultToCurrentBERange();

const handleRangeChange = (dates, dateStrings) => {
  if (dates && dates.length === 2) {
    const buddhistStart = dayjs(dates[0]).add(543, "year");
    const buddhistEnd = dayjs(dates[1]).add(543, "year");
    range.value = [buddhistStart, buddhistEnd];
  } else {
    setDefaultToCurrentBERange(); // Reset to default if value becomes null
  }
};

const formattedRange = computed({
  get: () =>
    range.value.map((date) =>
      date ? dayjs(date).subtract(543, "year").toDate() : null
    ),
  set: (newValue) => {
    range.value = newValue.map((date) =>
      date ? dayjs(date).add(543, "year").toDate() : null
    );
  },
});

const disabledDate = (current) => {
  return false;
};
</script>

<style>
/* Add any custom styles here */
</style>

<style>
/* Add any custom styles here */
</style>
