<script lang="ts" setup>
const isOpen = ref(false);
function drawer() {
  isOpen.value = !isOpen.value;
}
watch(isOpen, function handler(isOpen) {
  if (process.client) {
    if (isOpen) document.body.style.setProperty("overflow", "hidden");
    else document.body.style.removeProperty("overflow");
  }
});
onMounted(() => {
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && isOpen.value) isOpen.value = !isOpen.value;
  });
});
</script>

<template>
  <nav class="w-full bg-green-500 p-3 print:hidden">
    <div class="flex items-center justify-between">
      <!-- Header Logo -->
      <h1 class="text-4xl text-white">Kironia</h1>
      <!-- <img src="/img/logo.webp" alt="Logo" class="w-64" /> -->
      <!-- Mobile Menu Button -->
      <!-- <div class="lg:hidden">
        <button @click="drawer">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="text-secondary w-12 h-12"
          />
        </button>
      </div> -->

      <!-- Navbar -->
      <ul class="flex items-center space-x-8 text-xl font-sans text-white">
        <div class="flex justify-items-center">
          <NuxtLink to="/" class="pb-2 hover:font-bold"> Home </NuxtLink>
        </div>
        <div class="flex justify-items-center">
          <NuxtLink to="/blog" class="hover:font-bold pb-2"> Blog </NuxtLink>
        </div>
        <div class="flex justify-items-center">
          <NuxtLink to="/learn" class="hover:font-bold pb-2"> Learn </NuxtLink>
        </div>

        <div class="flex items-center">
          <NuxtLink to="/contact" class="hover:font-bold pb-2">
            Contact
          </NuxtLink>
        </div>
      </ul>
      <!-- Mobile Menu Transition background -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 right-0 left-0 w-80 bg-accent fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            X
          </button>
        </div>
        <span @click="isOpen = false" class="flex w-full items-center p-4">
          <h1 class="text-2xl text-white">Kironia</h1>
        </span>
        <ul
          class="divide-y divide-secondary font-mulish text-secondary uppercase text-2xl"
        >
          <div class="flex items-center">
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block">
              Home</NuxtLink
            >
          </div>
          <div class="flex items-center">
            <NuxtLink
              to="/blog"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              blog</NuxtLink
            >
          </div>
          <div class="flex items-center">
            <NuxtLink
              to="/learn"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              learn</NuxtLink
            >
          </div>
          <div class="flex items-center">
            <NuxtLink
              to="/contact"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              Contact</NuxtLink
            >
          </div>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<style scoped></style>
