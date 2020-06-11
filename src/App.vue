<template>
  <div id="app">
    <Header></Header>
    <div class="container column is-4">
      <h2 class="is-size-2 has-text-primary">Current Timestamp</h2>
      Seconds <CurrentTimestamp unit="1000"></CurrentTimestamp>
      Milliseconds <CurrentTimestamp unit="1"></CurrentTimestamp>
    </div>
    <div class="container column is-4">
      <h2 class="is-size-2 has-text-primary">Convert Timestamp</h2>
      <ConvertTimestamp></ConvertTimestamp>
    </div>
    <div class="container column is-4">
      <h2 class="is-size-2 has-text-primary">Convert Datetime</h2>
      <ConvertDatetime></ConvertDatetime>
    </div>
  </div>
</template>

<script>
import ConvertDatetime from './components/ConvertDatetime.vue';
import ConvertTimestamp from './components/ConvertTimestamp.vue';
import CurrentTimestamp from './components/CurrentTimestamp.vue';
import Header from './components/common/Header.vue';

export default {
  name: 'App',
  components: {
    ConvertDatetime,
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
