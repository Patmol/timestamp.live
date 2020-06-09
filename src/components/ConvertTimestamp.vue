<template>
  <div>
    <h2 class="is-size-1">Convert Timestamp</h2>
    <div class="field is-grouped column is-6">
      <p class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model="timestampToConvert"
          :placeholder="placeholderTimestamp" />
      </p>
      <p class="control">
        <button class="button is-info" @click="convert()">Convert</button>
      </p>
    </div>
    <div class="column is-6">
        {{ timestampConvert }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConvertTimestamp',
  data() {
    return {
      timestampToConvert: '',
      timestampConvert: '',
    };
  },
  computed: {
    placeholderTimestamp() {
      return `Enter a timestamp : ${Date.now()}`;
    },
  },
  methods: {
    convert() {
      try {
        this.timestampConvert = new Date(parseInt(this.timestampToConvert, 10));
      } catch (e) {
        this.timestampToConvert = 'This value cannot be convert';
      }
    },
  },
};
</script>

<style scoped>
</style>
