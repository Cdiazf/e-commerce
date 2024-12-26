<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Available Courses</h1>
    <div v-for="course in courses" :key="course.id" class="p-4 border rounded mb-2">
      <h2 class="text-xl font-semibold">{{ course.title }}</h2>
      <p>{{ course.description }}</p>
      <p class="font-bold">${{ course.price }}</p>
    </div>
  </div>
</template>

<script>
import apiClient from '../api';

export default {
  data() {
    return {
      courses: [],
    };
  },
  async created() {
    const response = await apiClient.get('/courses');
    this.courses = response.data;
  },
};
</script>
