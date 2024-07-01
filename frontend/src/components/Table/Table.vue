<template>
  <a-table :data-source="data" :columns="columnsWithHandlers">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span style="color: #1890ff">Name</span>
      </template>
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        column,
        clearFilters,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; display: block"
          @input="
            (e) =>
              handleInputChange(
                e,
                setSelectedKeys,
                confirm,
                column.dataIndex,
                clearFilters
              )
          "
        />
      </div>
    </template>
    <template #customFilterIcon="{ filtered }">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #bodyCell="{ text, column }">
      <span
        v-if="state.searchText && state.searchedColumn === column.dataIndex"
      >
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(
              new RegExp(
                `(?<=${state.searchText})|(?=${state.searchText})`,
                'i'
              )
            )"
        >
          <mark
            v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
            :key="i"
            class="highlight"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
    </template>
  </a-table>
</template>
<script setup>
import { reactive, ref, defineProps, watch } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});

const state = reactive({
  searchText: "",
  searchedColumn: "",
});

const searchInput = ref();
const clearFilter = ref(null);

// Column Setting
const columnsWithHandlers = props.columns.map((column) => {
  if (column.customFilterDropdown) {
    return {
      ...column,
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            searchInput.value?.focus();
          }, 100);
        } 
        // else {
        //   handleReset(clearFilter.value);
        // }
      },
    };
  }
  return column;
});

const handleInputChange = (e, setSelectedKeys, confirm, dataIndex, clearFilters) => {
  setSelectedKeys(e.target.value ? [e.target.value] : []);
  handleSearch([e.target.value], confirm, dataIndex, clearFilters);
};

const handleSearch = (selectedKeys, confirm, dataIndex, clearFilters) => {
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
  confirm({
    closeDropdown: false,
  });

  clearFilter.value = clearFilters;
};

const handleReset = (clearFilters) => {
  clearFilters({
    confirm: true,
  });
  state.searchText = "";
};
</script>

<style>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.ant-pagination-item-active {
  background-color: #f06599 !important;
  border: 0 !important;
}

.ant-pagination-item-active a {
  color: #fff !important;
}
</style>
