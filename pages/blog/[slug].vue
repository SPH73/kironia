<script setup>
const { data: content, error, pending } = await useFetch("/api/blog");

const bArticles = ref([]);
let article = {};
content.value.forEach((record, index) => {
  article = {
    index: index + 1,
    id: record.id,
    slug: record.fields.slug,
    heroImage: record.fields.heroImage,
    created: record.fields.created,
    author: record.fields.author,
    title: record.fields.title,
    lead: record.fields.lead,
    subheading: record.fields.subheading,
    p1: record.fields.p1,
    p2: record.fields.p2,
    p3: record.fields.p3,
    status: record.fields.status,
  };
  bArticles.value.push(article);
});
const route = useRoute();
const articleSlug = ref(route.params.slug);

const selectedArticle = computed(articleSlug => {
  return bArticles.value.find(article => article.title === route.params.slug);
});
console.log("articleSlug", articleSlug.value);
console.log("selectedArticle", selectedArticle.value);
</script>

<template>
  <div class="max-w-6xl">
    <div v-if="error">{{ error }}</div>
    <div v-if="pending">
      <p>Loading... {{ route.params.slug }}</p>
    </div>

    <article v-if="selectedArticle" class="container">
      <pre class="break-all"><code>{{ selectedArticle }}</code></pre>
    </article>
  </div>
</template>
