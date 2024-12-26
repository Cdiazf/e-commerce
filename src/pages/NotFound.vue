<template>
  <div
      class="flex flex-col items-center justify-center h-screen bg-gray-100 text-center"
  >
    <!-- Oops Text -->
    <h1
        class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-indigo-600 mb-4"
        style="background-image: url('https://source.unsplash.com/800x600/?galaxy,space'); background-size: cover;"
    >
      Oops!
    </h1>

    <!-- Page Not Found Text -->
    <p class="text-2xl font-semibold text-gray-800 mb-4">404 - PAGE NOT FOUND</p>

    <!-- Description -->
    <p class="text-gray-600 mb-8 max-w-md">
      The page you are looking for might have been removed, had its name changed,
      or is temporarily unavailable.
    </p>

    <!-- Go to Homepage Button -->
    <router-link
        to="/"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
    >
      GO TO HOMEPAGE
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
h1 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
