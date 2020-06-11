<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <h2 class="is-size-1">Current Timestamp</h2>
      <CurrentTimestamp unit="1000"></CurrentTimestamp>
      <CurrentTimestamp unit="1"></CurrentTimestamp>
    </div>
    <div class="container">
      <ConvertTimestamp></ConvertTimestamp>
    </div>
  </div>
</template>

<script>
import ConvertTimestamp from './components/ConvertTimestamp.vue';
import CurrentTimestamp from './components/CurrentTimestamp.vue';
import Header from './components/common/Header.vue';

export default {
  name: 'App',
  components: {
    ConvertTimestamp,
    CurrentTimestamp,
    Header,
  },
};
</script>

<style scoped>
.container {
  padding-top: 40px;
}
</style>
