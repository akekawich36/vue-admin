<template>
  <div>
    <DataTable :data="data" :columns="columns" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "../components/Table/Table.vue";

const searchInput = ref();

const data = [
  {
    key: 1,
    name: "Name 1",
    age: 24,
    address: "City 1 No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Name 2",
    age: 35,
    address: "City 2 No. 2 Lake Park",
  },
  {
    key: 3,
    name: "Name 3",
    age: 29,
    address: "City 3 No. 3 Lake Park",
  },
  {
    key: 4,
    name: "Name 4",
    age: 40,
    address: "City 4 No. 4 Lake Park",
  },
  {
    key: 5,
    name: "Name 5",
    age: 52,
    address: "City 5 No. 5 Lake Park",
  },
  {
    key: 6,
    name: "Name 6",
    age: 27,
    address: "City 6 No. 6 Lake Park",
  },
  {
    key: 7,
    name: "Name 7",
    age: 33,
    address: "City 7 No. 7 Lake Park",
  },
  {
    key: 8,
    name: "Name 8",
    age: 46,
    address: "City 8 No. 8 Lake Park",
  },
  {
    key: 9,
    name: "Name 9",
    age: 21,
    address: "City 9 No. 9 Lake Park",
  },
  {
    key: 10,
    name: "Name 10",
    age: 50,
    address: "City 10 No. 10 Lake Park",
  },
  {
    key: 11,
    name: "Name 11",
    age: 44,
    address: "City 11 No. 11 Lake Park",
  },
  {
    key: 12,
    name: "Name 12",
    age: 30,
    address: "City 12 No. 12 Lake Park",
  },
  {
    key: 13,
    name: "Name 13",
    age: 38,
    address: "City 13 No. 13 Lake Park",
  },
  {
    key: 14,
    name: "Name 14",
    age: 56,
    address: "City 14 No. 14 Lake Park",
  },
  {
    key: 15,
    name: "Name 15",
    age: 26,
    address: "City 15 No. 15 Lake Park",
  },
  {
    key: 16,
    name: "Name 16",
    age: 31,
    address: "City 16 No. 16 Lake Park",
  },
  {
    key: 17,
    name: "Name 17",
    age: 47,
    address: "City 17 No. 17 Lake Park",
  },
  {
    key: 18,
    name: "Name 18",
    age: 55,
    address: "City 18 No. 18 Lake Park",
  },
  {
    key: 19,
    name: "Name 19",
    age: 22,
    address: "City 19 No. 19 Lake Park",
  },
  {
    key: 20,
    name: "Name 20",
    age: 41,
    address: "City 20 No. 20 Lake Park",
  },
  {
    key: 21,
    name: "Name 21",
    age: 32,
    address: "City 21 No. 21 Lake Park",
  },
  {
    key: 22,
    name: "Name 22",
    age: 28,
    address: "City 22 No. 22 Lake Park",
  },
  {
    key: 23,
    name: "Name 23",
    age: 49,
    address: "City 23 No. 23 Lake Park",
  },
  {
    key: 24,
    name: "Name 24",
    age: 37,
    address: "City 24 No. 24 Lake Park",
  },
  {
    key: 25,
    name: "Name 25",
    age: 60,
    address: "City 25 No. 25 Lake Park",
  },
  {
    key: 26,
    name: "Name 26",
    age: 45,
    address: "City 26 No. 26 Lake Park",
  },
  {
    key: 27,
    name: "Name 27",
    age: 34,
    address: "City 27 No. 27 Lake Park",
  },
  {
    key: 28,
    name: "Name 28",
    age: 39,
    address: "City 28 No. 28 Lake Park",
  },
  {
    key: 29,
    name: "Name 29",
    age: 58,
    address: "City 29 No. 29 Lake Park",
  },
  {
    key: 30,
    name: "Name 30",
    age: 53,
    address: "City 30 No. 30 Lake Park",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.address.toString().toLowerCase().includes(value.toLowerCase()),
  },
];
</script>

<style lang="scss" scoped></style>
