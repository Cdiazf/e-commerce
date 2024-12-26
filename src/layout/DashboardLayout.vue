<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div
        :class="[
        'bg-indigo-700 text-white flex flex-col transition-all duration-500 ease-in-out',
        collapsed ? 'w-20' : 'w-64',
      ]"
    >
      <!-- Toggle Button -->
      <div class="h-16 flex items-center justify-between px-4">
        <span v-if="!collapsed" class="text-2xl font-semibold">🚀</span>
        <button
            @click="toggleSidebar"
            class="text-indigo-200 hover:text-white focus:outline-none"
        >
          <i :class="collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
        </button>
      </div>

      <!-- Navigation Items -->
      <nav class="flex-1">
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <router-link
                :to="item.route"
                class="flex items-center px-4 py-2 text-indigo-200 hover:bg-indigo-800 hover:text-white transition-all duration-500 ease-in-out"
                :class="{ 'justify-center': collapsed }"
            >
              <i
                  :class="[
                  item.icon,
                  'transition-all duration-500 ease-in-out',
                  collapsed ? 'mr-0 text-2xl' : 'mr-3',
                ]"
              ></i>
              <span
                  v-if="!collapsed"
                  class="transition-opacity duration-500 ease-in-out"
              >
                {{ item.name }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Settings -->
      <div class="px-4 py-2 mt-auto">
        <router-link
            to="/settings"
            class="flex items-center text-indigo-200 hover:text-white hover:bg-indigo-800 px-4 py-2 rounded"
            :class="{ 'justify-center': collapsed }"
        >
          <i
              class="fas fa-cog transition-all duration-500 ease-in-out"
              :class="{ 'mr-0 text-2xl': collapsed, 'mr-3': !collapsed }"
          ></i>
          <span v-if="!collapsed" class="transition-opacity duration-500">
            Settings
          </span>
        </router-link>
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Navigation -->
      <header
          class="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200"
      >
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <i class="fas fa-search text-gray-400"></i>
          </span>
          <input
              type="text"
              class="block w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500"
              placeholder="Search"
          />
        </div>
        <div class="flex items-center">
          <i class="fas fa-bell text-gray-400 mr-6"></i>
          <div class="flex items-center">
            <span class="text-gray-700 mr-2">Tom Cook</span>
            <img
                src="https://via.placeholder.com/36"
                alt="Avatar"
                class="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 bg-gray-50 p-6">
        <div
            class="w-full h-full border-2 border-dashed border-gray-300 bg-white"
        >
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State to toggle sidebar collapse
const collapsed = ref(false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

// Menu items for navigation
const menuItems = [
  { name: "Dashboard", icon: "fas fa-home", route: "/" },
  { name: "Register", icon: "fas fa-users", route: "/register" },
  { name: "Product Detail", icon: "fas fa-folder", route: "/product-detail" },
  { name: "Product Description ", icon: "fas fa-folder", route: "/product-description" },
  { name: "Documents", icon: "fas fa-file", route: "/documents" },
  { name: "Reports", icon: "fas fa-chart-pie", route: "/reports" },
];
</script>
