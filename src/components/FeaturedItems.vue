<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-8">FEATURED ITEMS</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
            v-for="item in featuredItems"
            :key="item.id"
            class="bg-white p-4 rounded shadow text-center"
        >
          <img
              :src="item.image"
              alt="Item Image"
              class="w-full h-32 object-contain mb-4"
          />
          <p class="text-gray-700 font-semibold mb-2">{{ item.name }}</p>
          <p class="text-red-500 font-bold">${{ item.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredItems = [
  { id: 1, name: "Long-Range 2.0", price: 22.0, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Speed 500 Ignite", price: 120.0, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Basketball", price: 50.0, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Soccer Ball", price: 30.0, image: "https://via.placeholder.com/150" },
];
</script>
