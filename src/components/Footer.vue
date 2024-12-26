<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Top Section: Columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">About Us</h3>
          <p class="text-gray-400 text-sm">
            We provide the best quality products at affordable prices. Explore our store for the latest collections.
          </p>
        </div>

        <!-- Useful Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">Shop</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">FAQs</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">Shipping</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">Returns</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <p class="text-gray-400 text-sm">123 Street, City, Country</p>
          <p class="text-gray-400 text-sm mt-2">Email: support@example.com</p>
          <p class="text-gray-400 text-sm mt-2">Phone: +123 456 789</p>
        </div>
      </div>

      <!-- Bottom Section: Social Media & Copyright -->
      <div class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <!-- Social Media Icons -->
        <div class="flex space-x-4 mb-4 md:mb-0">
          <a href="#" class="text-gray-400 hover:text-white transition">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* No additional styles needed since Tailwind CSS handles everything */
</style>
