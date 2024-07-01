<template>
  <div>
    <a-breadcrumb class="mb-4">
      <a-breadcrumb-item v-for="route in breadcrumb" :key="route.name">{{
        route.name
      }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h1 class="text-4xl">{{ breadcrumb[breadcrumb.length - 1].name }}</h1>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import routers from "../../routes/index.js";

const router = useRouter();

const breadcrumb = ref(router.currentRoute.value.matched);

watch(
  () => router.currentRoute.value.matched,
  (newValue) => {
    breadcrumb.value = newValue;
  }
);
</script>

<style lang="scss" scoped></style>
