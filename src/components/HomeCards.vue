<template>
  <div class="container mx-auto px-4 py-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
          v-for="(item, index) in cards"
          :key="index"
          :image="item.image"
          :title="item.title"
          :price="item.price"
          :location="item.location"
          :beds="item.beds"
          :baths="item.baths"
          :description="item.description"
      />
    </div>
  </div>
</template>

<script setup>


import Card from "@/components/ui/card.vue";

const cards = [
  {
    image: "https://via.placeholder.com/600x400", // Replace with actual image
    title: "Smart Apartment",
    price: 416.0,
    location: "Anytown, ST",
    beds: 3,
    baths: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "https://via.placeholder.com/600x400",
    title: "Millenial Home",
    price: 519.0,
    location: "Anytown, ST",
    beds: 4,
    baths: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "https://via.placeholder.com/600x400",
    title: "Modern Architecture",
    price: 689.0,
    location: "Anytown, ST",
    beds: 6,
    baths: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
</script>
