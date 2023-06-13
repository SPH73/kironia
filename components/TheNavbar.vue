<script setup>
const { data: herbsData, error, pending } = await useFetch("/api/herbs");

const herbsList = ref([]);
let herb = {};
herbsData.value.forEach((record, index) => {
  herb = {
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
  herbsList.value.push(herb);
});

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
  <nav class="w-full bg-green-500 p-3 print:hidden" role="navigation">
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
      <div class="hidden lg:block">
        <ul class="flex items-center space-x-4 text-sm font-mulish uppercase text-white text-center">
          <li class="inline-block max-w-[8.5rem] text-center align-middle">
            <NuxtLink to="/" class="pb-2 hover:font-bold" aria-label="Navigate to the homepage">
              Home
            </NuxtLink>
          </li>
           <li class="inline-block align-middle max-w-[8.5rem]">
              <NuxtLink to="/about" class="pb-2 hover:font-bold" aria-label="Navigate to the About page">
                About
              </NuxtLink>
            </li>
          <li class="dropdown max-w-[8.5rem] text-center" aria-haspopup="true">
            <span class="">Herbal Happenings
              <!-- <font-awesome-icon :icon="['fas', 'angle-down']" class="text-secondary h-8 w-8 my-auto" /> -->
            </span>

            <ul class="dropdown-content" aria-label="submenu">
              <li class="flex justify-items-center">
                <NuxtLink to="/herbal-happenings/workshop-talks-tours" class="hover:font-bold pb-2 text-left" aria-label="Navigate to the workshops, talks and tours page">
                  Workshops, Talks and Tours
                </NuxtLink>
              </li>
              <li class="flex justify-items-center">
                <NuxtLink to="/herbal-happenings/exciting-sightings" class="hover:font-bold pb-2"
                  aria-label="Navigate to the School clubs page">
                  Exciting Sightings
                </NuxtLink>
              </li>
              <li class="flex justify-items-center">
                <NuxtLink to="/herbal-happenings/whats-potting-in-the-gardens" class="hover:font-bold pb-2 text-left" aria-label="Navigate to the What's poting in the gardens page">
                  What's potting in the gardens
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="dropdown max-w-[8.5rem]" aria-haspopup="true">
            <span>Who is she? Guide to herbs&nbsp;
              <!-- <font-awesome-icon :icon="['fas', 'angle-down']"
                class="text-secondary h-8 w-8 my-auto" /> -->
                </span>
            <ul class="dropdown-content" aria-label="submenu">
              <li class="flex justify-items-center">
                <NuxtLink to="/guide-to-herbs" class="hover:font-bold pb-2 text-left"
                    aria-label="Navigate to the herbs guide page">
                   Herb Directory
                  </NuxtLink>
              </li>
              <li v-for="herb in herbsList" :key="herb.id" class="flex justify-items-center">
                <NuxtLink :to="`/guide-to-herbs/${herb.commonName}`" class="hover:font-bold pb-2 text-left"
                  aria-label="Navigate to the holiday activity camps page">
                 {{herb.herbId}} ({{herb.commonName}})
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="dropdown max-w-[8.5rem]" aria-haspopup="true">
            <span>Our offerings to Herbalism&nbsp;
              <!-- <font-awesome-icon :icon="['fas', 'angle-down']"
                class="text-secondary h-8 w-8 my-auto" /> -->
                </span>
            <ul class="dropdown-content" aria-label="submenu">
              <li class="flex justify-items-center">
                <NuxtLink to="/herbalism" class="hover:font-bold pb-2 text-left"
                  aria-label="Navigate to the themed parties for kids page">
                  Great Grandmas's Kitchen
                </NuxtLink>
              </li>
              <li class="flex justify-items-center">
                <NuxtLink to="/herbalism" class="hover:font-bold pb-2 text-left" aria-label="Navigate to the party quote form">
                  The Herb Garble Newsletters
                </NuxtLink>
              </li>
              <li class="flex justify-items-center">
                <NuxtLink to="/herbalism" class="hover:font-bold pb-2" aria-label="Navigate to the party quote form">
                  YouTube
                </NuxtLink>
              </li>
              <li class="flex justify-items-center">
                <NuxtLink to="/herbalism" class="hover:font-bold pb-2" aria-label="Navigate to the party quote form">
                  Podcasts
                </NuxtLink>
              </li>
              <li class="flex justify-items-center">
                <NuxtLink to="/herbalism" class="hover:font-bold pb-2" aria-label="Navigate to the party quote form">
                  Articles
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="dropdown" aria-haspopup="true">
              <span>The shop&nbsp;
                <!-- <font-awesome-icon :icon="['fas', 'angle-down']"
                class="text-secondary h-8 w-8 my-auto" /> -->
                  </span>
              <ul class="dropdown-content" aria-label="submenu">
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/plants"
                      class="hover:font-bold pb-2"
                      aria-label="Navigate to the party quote form"
                    >
                      Plants
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/seeds"
                      class="hover:font-bold pb-2"
                      aria-label="Navigate to the party quote form"
                    >
                      Seeds
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/herb-harvest"                    class="hover:font-bold pb-2"
                      aria-label="Navigate to the party quote form"
                    >
                      Herb Harvest
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/herbal-perparations"                    class="hover:font-bold pb-2"
                      aria-label="Navigate to the party quote form"
                    >
                      Herbal Preparations
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/herbal-equipment-and-supplies"                    class="hover:font-bold pb-2 text-left"
                      aria-label="Navigate to the party quote form"
                    >
                      Herbal Equipment and Supplies
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/specials"                    class="hover:font-bold pb-2"
                      aria-label="Navigate to the party quote form"
                    >
                      Specials
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/membership"                    class="hover:font-bold pb-2"
                      aria-label="Navigate to the party quote form"
                    >
                      Membership
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/bookings"                    class="hover:font-bold pb-2 text-left"
                      aria-label="Navigate to the party quote form"
                    >
                      Bookings
                    </NuxtLink>
                  </li>
                <li class="flex justify-items-center">
                    <NuxtLink
                      to="/shop/other"                    class="hover:font-bold pb-2 text-left"
                      aria-label="Navigate to the party quote form"
                    >
                      Other
                    </NuxtLink>
                  </li>
              
              </ul>
            </li>
          <li class="dropdown" aria-haspopup="true">
              <span>Memberships&nbsp;
                <!-- <font-awesome-icon :icon="['fas', 'angle-down']"
                class="text-secondary h-8 w-8 my-auto" /> -->
                  </span>
              <ul class="dropdown-content" aria-label="submenu">
                <li class="flex justify-items-center">
                  <NuxtLink to="/membership/free" class="hover:font-bold pb-2 text-left"
                    aria-label="Navigate to the holiday activity camps page">
                    Sign up (free members section)
                  </NuxtLink>
                </li>
                <li class="flex justify-items-center">
                  <NuxtLink to="/membership/paid" class="hover:font-bold pb-2 text-left"
                    aria-label="Navigate to the holiday activity camps page">
                    The Herb Circlep (paid membership section)
                  </NuxtLink>
                </li>
              </ul>
            </li>

          <li class="inline-block align-middle max-w-[8.5rem]">
            <NuxtLink to="/contact" class="hover:font-bold pb-2"
              aria-label="Navigate to the contact page to send us a message using our message form">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Mobile Menu Transition background -->
      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>
      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 right-0 left-0 w-80 bg-accent fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button aria-label="close" class="absolute top-0 right-0 mt-4 mr-4" @click="isOpen = false">
            <!-- <font-awesome-icon :icon="['fas', 'xmark']" class="text-secondary h-12 w12" /> -->
          </button>
        </div>
        <span @click="isOpen = false" class="flex w-full items-center p-4">
         Kironia
        </span>
        <ul id="menu" class="divide-y divide-secondary font-mulish text-secondary uppercase text-2xl">
          <li class="flex items-center">
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block" aria-label="Navigate to the homepage">
              Home</NuxtLink>
          </li>

          <li class="flex items-center">
            <NuxtLink to="/about" @click="isOpen = false" class="my-4 inline-block"
              aria-label="Navigate to the School Clubs page">
              About</NuxtLink>
          </li>
        </ul>
        <div class="follow">
          <p class="font-mulish uppercase text-secondary text-2xl">connect:</p>
          <div class="social flex space-x-5 mt-4">
            <NuxtLink to="https://www.facebook.com/" aria-label="Connect with us on facebook">
              FaceBook
              <!-- <font-awesome-icon :icon="['fab', 'facebook']" class="text-secondary h-12 w12" /> -->
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com/" aria-label="Connect with us on youtube">
              YouTube
              <!-- <font-awesome-icon :icon="['fab', 'facebook']" class="text-secondary h-12 w12" /> -->
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/" aria-label="Connect with us on instagram">
              Instagram
              <!-- <font-awesome-icon :icon="['fab', 'instagram']" class="text-secondary h-12 w12" /> -->
            </NuxtLink>
            <NuxtLink to="https://api.whatsapp.com/send?phone=27742456359" aria-label="Connect with us on whatsapp chat">
              WhatsApp
              <!-- <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-secondary h-12 w12" /> -->
            </NuxtLink>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  border-bottom: solid 0.1rem white;
}

.dropdown {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 8.3rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 20px;
  left: 0;
  background-color: #22c55e;
  /* width: 295px; */
  min-width: 245px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
