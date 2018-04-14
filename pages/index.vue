<template>
<div class="wrapper">
    <sidebart></sidebart>
  <div class="main-panel">
    <navbart></navbart>
    <maps></maps>
    <footert></footert>
  </div>
</div>
</template>

<script>
import Sidebart from '~/components/Sidebart.vue'
import Navbart from '~/components/Navbart.vue'
import Maps from '~/components/Maps.vue'
import Footert from '~/components/Footert.vue'

export default {
  components: {
    Sidebart,
    Navbart,
    Maps,
    Footert
  }
}
</script>

<style>
</style>
