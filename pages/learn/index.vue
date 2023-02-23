<script setup>
const { data: content } = await useFetch("/api/classes/herb");

const hClasses = ref([]);
let hClass = {};
content.value.forEach((record, index) => {
  hClass = {
    index: index + 1,
    id: record.id,
    className: record.fields.className,
    classDates: record.fields.classDates,
    intro: record.fields.classDates,
    campaign: record.fields.campaign,
    intro: record.fields.intro,
    status: record.fields.status,
  };
  hClasses.value.push(hClass);
});
</script>

<template>
  <div class="container">
    <h2 class="my-8 text-3xl">Upcoming master classes</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div v-for="item in hClasses" :key="item.id" class="w-52">
        <h3 class="text-xl my-4">
          <NuxtLink to="/" class="cursor-pointer">{{
            item.className
          }}</NuxtLink>
        </h3>
        <p class="w-full">{{ item.intro }}</p>
        <h4 class="text-xl my-4">{{ item.classDates }}</h4>
      </div>
    </div>
  </div>
</template>
