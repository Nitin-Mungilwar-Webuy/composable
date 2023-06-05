<script setup>
// without composable we cant reuse same logic
// import { ref, onMounted, onUnmounted } from "vue";
// import { faker } from "@faker-js/faker";
// const firstname = ref();
// const lastname = ref();

// function updateName() {
//   firstname.value = faker.name.firstName();
//   lastname.value = faker.name.lastName();
// }

// onMounted(() => window.addEventListener("mousemove", updateName));
// onUnmounted(() => window.removeEventListener("mousemove", updateName));
// using composable function
import { useName } from "@/composables/name.js";
const { firstName, lastName } = useName();
</script>
<template>
  <h2>hello component</h2>
  <h3>FirstName:{{ firstName }}</h3>
  <h3>lastName:{{ lastName }}</h3>
</template>
<style></style>
