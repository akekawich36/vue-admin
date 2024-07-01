<template>
  <div>
    <a-breadcrumb :routes="routers">
      <!-- <template #itemRender="{ route, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template> -->
    </a-breadcrumb>
  </div>
</template>

<script setup>
import routers from "../../routes/index.js";
</script>

<style lang="scss" scoped></style>
