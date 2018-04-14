<template>
  <div class="sidebar" data-background-color="black" data-active-color="danger">

  <div class="sidebar-wrapper">
    <div class="logo">
      <a href="/" class="simple-text">
        Bancomer Heat Map
      </a>
    </div>

    <ul class="nav">
      <li v-for="category in categories">
        <nuxt-link :to="'/'+category.id">
          <p>{{ category.name }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        categories: [],
        errors: []
      }
    },
    mounted() {
      axios.get('http://localhost:8081/api/categories')
        .then(categories => {
          this.categories = categories.data;
        })
        .catch(err => {
          errors.push(err);
        })
    },
    methods: {
      changeActive() {

      }
    }
  }
</script>
