<template>
  <div class="pixel-art-container">
    <div
        v-for="(row, rowIndex) in grid"
        :key="rowIndex"
        class="pixel-row"
    >
      <div
          v-for="(pixel, colIndex) in row"
          :key="colIndex"
          :class="['pixel', `color-${pixel}`]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PixelArt",
  data() {
    return {
      grid: [
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 3, 3, 3, 3, 1, 1, 2, 2, 2, 2, 2, 1, 1, 3, 3, 3, 3, 1, 0],
        [0, 1, 1, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 1, 1, 0],
        [0, 0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0],
        [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 2, 1, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 1, 2, 1, 0, 0],
        [0, 0, 1, 2, 1, 1, 1, 4, 1, 2, 2, 2, 1, 4, 1, 1, 1, 2, 1, 0, 0],
        [0, 0, 1, 2, 1, 1, 1, 4, 1, 2, 2, 2, 1, 4, 1, 1, 1, 2, 1, 0, 0],
        [0, 1, 2, 2, 1, 1, 4, 4, 1, 2, 2, 2, 1, 4, 4, 1, 1, 2, 2, 1, 0],
        [1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1],
        [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1],
        [0, 1, 2, 2, 2, 1, 1, 2, 1, 3, 3, 3, 1, 2, 1, 1, 2, 2, 2, 1, 0],
        [1, 2, 2, 2, 2, 1, 0, 1, 3, 1, 3, 1, 3, 1, 0, 1, 2, 2, 2, 2, 1],
        [1, 1, 2, 2, 2, 1, 0, 1, 3, 1, 3, 1, 3, 1, 0, 1, 2, 2, 2, 1, 1],
        [0, 0, 1, 2, 2, 2, 1, 1, 3, 3, 3, 3, 3, 1, 1, 2, 2, 2, 1, 0, 0],
        [0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 6, 1, 6, 6, 6, 6, 6, 6, 6, 1, 6, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      ],
    };
  },
};
</script>

<style scoped>
.pixel-art-container {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  width: 400px;
  transform: rotate(90deg); /* Rotate the grid 45 degrees */
  transform-origin: center;
  gap: 1px;
}

.pixel {
  width: 20px;
  height: 20px;
  background-color: transparent;
}

.color-0 {
  background-color: white;
}
.color-1 {
  background-color: black;
}
.color-2 {
  background-color: gray;
}
.color-3 {
  background-color: pink;
}
.color-4 {
  background-color: blue;
}
.color-5 {
  background-color: saddlebrown;
}
.color-6 {
  background-color: beige;
}
</style>
