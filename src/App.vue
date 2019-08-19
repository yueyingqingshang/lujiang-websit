<template>
  <div id="app">
    <pageHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import pageHeader from '@/components/header.vue'

export default {
  name: 'app',
  components: {
    pageHeader
  }
}
</script>

<style>

</style>
