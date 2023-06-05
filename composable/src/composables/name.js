// creating composable function
import { faker } from "@faker-js/faker";
import { ref, onMounted, onUnmounted } from "vue";
export function useName() {
  // state encapsulated andmanaged by composable
  const firstName = ref();
  const lastName = ref();
  // composable can update its managed state over time
  function updateName() {
    firstName.value = faker.name.firstName();
    lastName.value = faker.name.lastName();
  }
  // a composable can also hook into its owner components
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener("mousemove", updateName));
  onUnmounted(() => window.removeEventListener("mousemove", updateName));
  return {
    firstName,
    lastName,
  };
}
