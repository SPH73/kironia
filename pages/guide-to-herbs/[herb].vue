<script setup>
const { data: herbsData, error, pending } = await useFetch("/api/herbs");

const herbsList = ref([]);
let plant = {};
herbsData.value.forEach((record, index) => {
  plant = {
    index: index + 1,
    id: record.id,
    herbId: record.fields.herbId,
    genus: record.fields.genus,
    species: record.fields.species,
    cultivar: record.fields.cultivar,
    commonName: record.fields.commonName,
    plantFmily: record.fields.plantFamily,
    plantPart: record.fields.plantPart,
    photo: record.fields.photo,
    keyHerbalCharacteristics: record.fields.keyHerbalCharacteristics,
    tastes: record.fields.tastes,
    energetics: record.fields.energetics,
    actions: record.fields.actions,
    affinities: record.fields.affinities,
    typicalUses: record.fields.typicalUses,
    partsUsed: record.fields.partsUsed,
    preparation:  record.fields.preparation,   
  };
  herbsList.value.push(plant);
});
const route = useRoute().params.herb;
console.log("herb", route)


const selectedHerb = route
watchEffect(() => {
  console.log("selected herb", selectedHerb);
});

const herb = computed(() => {
  return herbsList.value.find(item => item.commonName === selectedHerb);
});
</script>

<template>
  <div class="max-w-6xl">
    <div class="container mt-4">
    <h1 class="text-3xl">Herb Name</h1>
    <p class="pb-4">Herb details for {{ $route.params.herb }}</p>
    <pre class="p-4">Selected Herb: {{ herb }}</pre>

    </div>
   
  </div>
</template>
