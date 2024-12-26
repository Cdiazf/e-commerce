<template>
  <section class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-gray-900">From the blog</h2>
        <p class="mt-2 text-lg text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>

      <!-- Blog Cards -->
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Single Blog Card -->
        <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <!-- Image -->
          <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover"
          />

          <!-- Content -->
          <div class="p-6">
            <p class="text-sm text-gray-500 mb-2">
              {{ post.date }} <span class="inline-block ml-2 px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                {{ post.category }}
              </span>
            </p>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ post.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {{ post.description }}
            </p>

            <!-- Author Info -->
            <div class="flex items-center">
              <img
                  :src="post.authorImage"
                  :alt="post.author"
                  class="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p class="text-sm font-semibold text-gray-800">{{ post.author }}</p>
                <p class="text-xs text-gray-500">{{ post.authorRole }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Blog Card -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Static data for blog posts
const blogPosts = [
  {
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    category: "Marketing",
    description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    image: "https://via.placeholder.com/600x400?text=Blog+1",
    author: "Michael Foster",
    authorRole: "Co-Founder / CTO",
    authorImage: "https://via.placeholder.com/40x40?text=M",
  },
  {
    title: "How to use search engine optimization to drive sales",
    date: "Mar 10, 2020",
    category: "Sales",
    description:
        "Optio cum necessitatibus dolor voluptatem provident commodi et.",
    image: "https://via.placeholder.com/600x400?text=Blog+2",
    author: "Lindsay Walton",
    authorRole: "Front-end Developer",
    authorImage: "https://via.placeholder.com/40x40?text=L",
  },
  {
    title: "Improve your customer experience",
    date: "Feb 12, 2020",
    category: "Business",
    description:
        "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus.",
    image: "https://via.placeholder.com/600x400?text=Blog+3",
    author: "Tom Cook",
    authorRole: "Director of Product",
    authorImage: "https://via.placeholder.com/40x40?text=T",
  },
];
</script>

<style scoped>
/* Scoped styles if needed */
</style>
