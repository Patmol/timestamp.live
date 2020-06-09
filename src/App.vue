<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <CurrentTimestamp></CurrentTimestamp>
    </div>
    <div class="container">
      <ConvertTimestamp></ConvertTimestamp>
    </div>
  </div>
</template>

<script>
import ConvertTimestamp from './components/ConvertTimestamp.vue';
import CurrentTimestamp from './components/CurrentTimestamp.vue';
import Navbar from './components/common/Navbar.vue';

export default {
  name: 'App',
  components: {
    ConvertTimestamp,
    CurrentTimestamp,
    Navbar,
  },
};
</script>

<style scoped>
.container {
  padding-top: 40px;
}
</style>
