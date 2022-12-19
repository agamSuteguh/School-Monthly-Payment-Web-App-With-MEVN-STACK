<script setup>
import { useStore } from "vuex";
import TheLoading from "./components/TheLoading.vue";
import TheToast from "./components/TheToast.vue";
import TheKwitansi from "./components/TheKwitansi.vue";
import { computed } from "vue";

const store = useStore();

const loading = computed(() => {
  return store.state.loading;
});

const toastShow = computed(() => {
  return store.state.toast.show;
});
</script>

<template>
  <div class="parents">

    <TheLoading v-show="loading" />
    <TheToast v-show="toastShow" />
    <router-view />
  </div>
</template>

<style></style>
