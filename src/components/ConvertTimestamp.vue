<template>
  <div>
    <div class="field has-addons">
      <p class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model="timestampToConvert"
          :placeholder="placeholder" />
      </p>
      <p class="control">
        <button class="button is-info" @click="convert()">Convert</button>
      </p>
    </div>
    <div>
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
    placeholder() {
      return `Enter a timestamp : ${Date.now()}`;
    },
  },
  methods: {
    convert() {
      try {
        let timestamp = this.timestampToConvert;

        if (timestamp.length === 10) {
          timestamp *= 1000;
        }

        this.timestampConvert = new Date(parseInt(timestamp, 10));
      } catch (e) {
        this.timestampConvert = 'This value cannot be convert';
      }
    },
  },
};
</script>

<style scoped>
</style>
