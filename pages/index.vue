<template>
<div class="wrapper">
    <sidebart></sidebart>
  <div class="main-panel">
    <navbart></navbart>
    <router-view></router-view>
    <footert></footert>
  </div>
</div>
</template>

<script>
import Sidebart from '~/components/Sidebart.vue'
import Navbart from '~/components/Navbart.vue'
import Footert from '~/components/Footert.vue'

export default {
  components: {
    Sidebart,
    Navbart,
    Footert
  }
}
</script>

<style>
</style>
