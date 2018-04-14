<template>
  <div class="sidebar" data-background-color="white" data-active-color="danger">

    <!--
    Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
    Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
  -->

  <div class="sidebar-wrapper">
    <div class="logo">
      <a href="/" class="simple-text">
        Bancomer Heat Map
      </a>
    </div>

    <ul class="nav">
      <li v-bind:class="{ active: activeId == 1 }">
        <a href="#" v-on:click="changeActiveId(1)">
          <i class="ti-map"></i>
          <p>Maps</p>
        </a>
      </li>
      <li v-bind:class="{ active: activeId == 2}">
        <a href="#" v-on:click="changeActiveId(2)">
          <i class="ti-user"></i>
          <p>Users</p>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeId: 1
      }
    },
    methods: {
      changeActiveId(id) {
        this.activeId = id
      }
    }
  }
</script>
