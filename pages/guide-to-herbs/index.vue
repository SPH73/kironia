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
    plantFamily: record.fields.plantFamily,
    plantPart: record.fields.plantPart,
    photo: record.fields.photo,
    keyHerbalCharacteristics: record.fields.keyHerbalCharacteristics,
    tastes: record.fields.tastes,
    energetics: record.fields.energetics,
    actions: record.fields.actions,
    affinities: record.fields.affinities,
    typicalUses: record.fields.typicalUses,
    partsUsed: record.fields.partsUsed,
    preparation: record.fields.preparation,
  };
  herbsList.value.push(plant);
});

const selectedHerb = ref("select")
const herbSelected = ref(false)
watch(selectedHerb, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    herbSelected.value = true
  }
})

const herbData = computed(() => {
  return herbsList.value.find(herb => herb.id === selectedHerb.value);
});
watchEffect(() => {
  console.log("herbData", herbData.value);
});

</script>

<template>
  <div class="container my-4">
    <div class="p-4">
      <h1 class="text-3xl font-bold">Guide to herbs directory</h1>
      <p>Herbs are listed alphabetically by their common name.</p>
    </div>
    <div>
    <label class="text-2xl p-4 font-bold" for="herb-name">Herbs</label>
    </div>
    <div>
    <select v-model="selectedHerb" name="herbName" class="p-4 font-semi-bold">
     <option disabled value="select">Select a herb from the list</option>
      <option v-for="herb in herbsList" :key="herb.herbId" :value="herb.id" >{{ herb.herbId }} ({{ herb.commonName }})</option>
    </select>
    </div>
    <div v-if="herbSelected" class="p-4">
    
    <!-- <pre>{{ herbData }}</pre> -->
    <div class="p-4">
      <h2 class="text-3xl capitalize my-4 font-bold">{{herbData.commonName}}</h2>
      <div>
      <h3 class="text-xl font-bold">Plant Family</h3>
      <p class="p-4">{{ herbData.plantFamily }}</p>
      </div>
      <div class="p-4">
        <!-- <h3 class="text-xl font-bold">Image</h3> -->
      <img v-for="field in herbData.photo" :key="field.id" :src="field.url" :alt="field.filename" class="w-48 h-48 object-center object-cover">
      </div>
      <div>
      <h3 class="text-xl font-bold">Key Herbal Chartacteristics</h3>
      <p class="p-4">{{ herbData.keyHerbalCharacteristics }}</p>
      </div>
      <div>
        <h3 class="text-xl font-bold pb-4">Tastes</h3>
        <p class="px-4 pb-4 inline-flex" v-for="taste in herbData.tastes"><span class="inline-block">{{ taste }}</span></p>
      </div>
      <div>
        <h3 class="text-xl font-bold pb-4">Energentics</h3>
        <p class="px-4 pb-4 inline-flex" v-for="sense in herbData.energetics"><span class="inline-block">{{ sense }}</span></p>
      </div>
      <div>
        <h3 class="text-xl font-bold pb-4">Actions</h3>
        <p class="px-4 pb-4 inline-flex" v-for="action in herbData.actions"><span class="inline-block">{{ action }}</span></p>
      </div>
      <div>
        <h3 class="text-xl font-bold pb-4">Affinities</h3>
        <p class="px-4 pb-4 inline-flex" v-for="item in herbData.affinities"><span class="inline-block">{{ item }}</span></p>
      </div>
     <div>
        <h3 class="text-xl font-bold">Typical usess</h3>
        <p class="p-4">{{ herbData.typicalUses }}</p>
        </div>
    </div>
    <div>
        <h3 class="text-xl font-bold pb-4">Parts used</h3>
        <p class="px-4 pb-4 inline-flex" v-for="part in herbData.partsUsed"><span class="inline-block">{{ part }}</span></p>
    </div>
    <div>
        <h3 class="text-xl font-bold pb-4">Preparation</h3>
        <p class="px-4 pb-4 inline-flex" v-for="method in herbData.preparation"><span class="inline-block">{{ method }}</span></p>
    </div>
    </div>
    
  </div>
</template>

