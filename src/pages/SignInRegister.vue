<template>
  <div class="flex min-h-screen">
    <!-- Left Section: Form -->
    <div class="w-full sm:w-1/2 flex flex-col justify-center px-6 lg:px-20">
      <div class="mb-8 flex justify-start">
        <!-- Placeholder for Logo -->
        <span class="text-indigo-500 text-4xl font-bold">🚀</span>
      </div>

      <!-- Heading -->
      <h2 class="text-2xl font-bold text-gray-900 mb-2">
        Sign in to your account
      </h2>
      <p class="text-sm text-gray-600 mb-6">
        Not a member?
        <a href="#" class="text-indigo-600 hover:underline"
        >Start a 14 day free trial</a
        >
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
          >Email address</label
          >
          <input
              type="email"
              id="email"
              v-model="email"
              placeholder="you@example.com"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
          >
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="••••••••"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
                type="checkbox"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span class="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" class="text-sm text-indigo-600 hover:underline"
          >Forgot password?</a
          >
        </div>

        <!-- Sign In Button -->
        <button
            type="submit"
            class="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </button>
      </form>

      <!-- Divider -->
      <div class="mt-6 flex items-center justify-center">
        <div class="border-t border-gray-300 w-full"></div>
        <span class="px-2 text-gray-400 text-sm">Or continue with</span>
        <div class="border-t border-gray-300 w-full"></div>
      </div>

      <!-- Social Buttons -->
      <div class="mt-4 flex gap-4">
        <button
            class="w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          <img
              src="https://www.svgrepo.com/show/303107/google-icon-logo.svg"
              alt="Google"
              class="h-5 w-5 mr-2"
          />
          Google
        </button>
        <button
            class="w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          <i class="fab fa-github text-xl mr-2"></i>
          GitHub
        </button>
      </div>
    </div>

    <!-- Right Section: Image -->
    <div class="hidden sm:block sm:w-1/2 bg-gray-50">
      <img
          src="https://via.placeholder.com/600x800"
          alt="Workstation"
          class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

// Submit handler
const handleSubmit = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
};
</script>

<style scoped>
/* Additional custom styles (optional) */
</style>
