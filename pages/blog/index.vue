<script setup>
const { data: content } = await useFetch("/api/blog");

const bArticles = ref([]);
let article = {};
content.value.forEach((record, index) => {
  article = {
    index: index + 1,
    id: record.id,

    created: record.fields.created,
    author: record.fields.author,
    title: record.fields.title,
    lead: record.fields.lead,
  };
  bArticles.value.push(article);
});
</script>

<template>
  <div class="container">
    <h2 class="my-8 text-3xl capitalize">Latest Articles</h2>
    <div
      v-if="bArticles.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
    >
      <div v-for="item in bArticles" :key="item.id" class="w-52">
        <h3 class="text-xl my-4 capitalize text-green-500">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: item.title } }">
            {{ item.title }} &nbsp;
          </NuxtLink>
        </h3>
        <h4 class="text-sm pb-4">{{ item.created }}</h4>
        <p class="w-full">{{ item.lead }}</p>
        <h4 class="text-sm my-4">Written by {{ item.author.name }}</h4>
      </div>
    </div>
  </div>
</template>
