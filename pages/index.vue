<script setup>
const { data: content } = await useFetch("/api/classes/master");

const mClasses = ref([]);
let mClass = {};
content.value.forEach((record, index) => {
  mClass = {
    index: index + 1,
    id: record.id,
    campaignName: record.fields.campaignName,
    campaignDates: record.fields.campaignDates,
    campaignIntro: record.fields.campaignIntro,
    status: record.fields.status,
  };
  mClasses.value.push(mClass);
});
</script>

<template>
  <div class="container">
    <h2 class="my-8 text-3xl capitalize">2023 master classes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <div v-for="item in mClasses" :key="item.id" class="w-52">
        <h3 class="text-xl my-4 capitalize">
          <NuxtLink to="/" class="cursor-pointer">{{
            item.campaignName
          }}</NuxtLink>
        </h3>
        <p class="w-full">{{ item.campaignIntro }}</p>
        <h4 class="text-xl my-4 capitalize">{{ item.campaignDates }}</h4>
      </div>
    </div>
  </div>
</template>
