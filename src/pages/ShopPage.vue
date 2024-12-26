<template>
  <div class="flex flex-col max-w-1360 mx-auto" >
    <Banner />
    <div class="flex lg:flex-row">
      <CategoryFilter />
      <ProductList />
    </div>
    <div>
      <FeaturedItems/>
      <BlogSection/>
    </div>

  </div>
</template>

<script setup>
import CategoryFilter from "@/components/CategoryFilter.vue";
import ProductList from "@/components/ProductList.vue";
import FeaturedItems from "@/components/FeaturedItems.vue";
import BlogSection from "@/assets/BlogSection.vue";
import Banner from "@/components/Banner.vue";
</script>
