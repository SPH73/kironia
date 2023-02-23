<template>
  <div class="w-full min-h-full h-screen flex flex-col">
    <header>
      <TheNavbar />
    </header>
    <main class="mb-auto flex flex-col bg-white">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
