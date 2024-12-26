<template>
  <div class=" h-dvh bg-gray-100 py-12 ">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Checkout</h2>

      <!-- Checkout Layout -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Section: Shipping Information -->
        <div class="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-4">Shipping Information</h3>
          <form @submit.prevent="onSubmit" class="space-y-6">
            <!-- Full Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
              />
            </div>

            <!-- Email Address -->
            <div>
              <label class="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                  v-model="form.email"
                  type="email"
                  placeholder="john.doe@example.com"
                  class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
              />
            </div>

            <!-- Address -->
            <div>
              <label class="block text-sm font-medium text-gray-700">Address</label>
              <input
                  v-model="form.address"
                  type="text"
                  placeholder="123 Main Street"
                  class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
              />
            </div>

            <!-- City, State, and ZIP -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">City</label>
                <input
                    v-model="form.city"
                    type="text"
                    placeholder="New York"
                    class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">State</label>
                <input
                    v-model="form.state"
                    type="text"
                    placeholder="NY"
                    class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                    v-model="form.zip"
                    type="text"
                    placeholder="10001"
                    class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
              </div>
            </div>

            <!-- Payment Option -->
            <div>
              <label class="block text-sm font-medium text-gray-700">Payment Method</label>
              <select
                  v-model="form.payment"
                  class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>
          </form>
        </div>

        <!-- Right Section: Order Summary -->
        <div class="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-4">Order Summary</h3>

          <!-- Order Items -->
          <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <img :src="item.image" alt="Product" class="w-16 h-16 rounded-md object-cover" />
              <div class="ml-4">
                <p class="text-sm font-semibold text-gray-800">{{ item.name }}</p>
                <p class="text-sm text-gray-600">Qty: {{ item.quantity }}</p>
              </div>
            </div>
            <p class="text-sm font-bold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>

          <!-- Subtotal -->
          <div class="flex justify-between font-semibold text-gray-900 mt-4">
            <span>Subtotal</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>

          <!-- Checkout Button -->
          <button
              @click="submitOrder"
              class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            Place Order
          </button>
        </div>


      </div>

<!--      <div class="flex flex-row mt-4 mb-20 ">-->
<!--        <PixelArt/>-->
<!--      </div>-->

    </div>

  </div>


</template>

<script setup>
import { ref, computed } from "vue";
import PixelArt from "@/components/PixelArt.vue";

// Form State
const form = ref({
  name: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  payment: "credit-card",
});

// Sample Cart Items
const cartItems = ref([
  {
    id: 1,
    name: "Throwback Hip Bag",
    price: 90.0,
    quantity: 1,
    image: "https://via.placeholder.com/80x80?text=Bag",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    price: 32.0,
    quantity: 1,
    image: "https://via.placeholder.com/80x80?text=Satchel",
  },
  {
    id: 3,
    name: "Zip Tote Basket",
    price: 140.0,
    quantity: 1,
    image: "https://via.placeholder.com/80x80?text=Tote",
  },
]);

// Calculate Subtotal
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Handle Form Submission
const submitOrder = () => {
  alert("Order placed successfully!");
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
