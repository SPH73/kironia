<script setup>
const { data: content } = await useFetch("/api/seedRange");

const products = ref([]);
let product = {};
content.value.forEach((record, index) => {
  product = {
    index: index + 1,
    id: record.id,
    name: record.fields.name,
    altNames: record.fields.altNames,
    image: record.fields.image,
    description: record.fields.description,
    price: record.fields.price,
    size: record.fields.size,
    availableAs: record.fields.availableAs,
    availableFrom: record.fields.availableFrom,
    status: record.fields.status,
  };
  products.value.push(product);
});
</script>

<template>
  <div class="container overflow-scroll my-4">
    <p class="text-2xl text-green-500">
      This is how the data looks from the Airtable base "Kironia" and table
      "seedRange"
    </p>
    <pre>{{ products }}</pre>
    <p class="text-2xl text-green-500">
      This is how we pull it out just the data (unstyled)
    </p>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.index }}</li>
      <li>{{ product.id }}</li>
      <li>{{ product.name }}</li>
      <li>{{ product.altNames }}</li>

      <li>{{ product.description }}</li>
      <li>{{ product.price }}</li>
      <li>{{ product.status }}</li>
      <li>{{ product.size }}</li>
      <li>{{ product.availableAs }}</li>
      <li>{{ product.availableFrom }}</li>
      <li>{{ product.availableFrom }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
