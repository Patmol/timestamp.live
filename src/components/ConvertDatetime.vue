<template>
  <div>
    <div class="field has-addons">
      <p class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model="datetimeToConvert"
          :placeholder="placeholder" />
      </p>
      <p class="control">
        <button class="button is-info" @click="convert()">Convert</button>
      </p>
    </div>
    <div>
        {{ datetimeConvert }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ConvertDatetime',
  data() {
    return {
      datetimeToConvert: '',
      datetimeConvert: '',
    };
  },
  computed: {
    placeholder() {
      return 'Enter a date : 20 dec 2019';
    },
  },
  methods: {
    convert() {
      try {
        const date = moment(this.datetimeToConvert);

        if (date.isValid()) {
          this.datetimeConvert = date.valueOf();
        } else {
          this.datetimeConvert = 'This value cannot be convert';
        }
      } catch (e) {
        this.datetimeConvert = 'This value cannot be convert';
      }
    },
  },
};
</script>

<style scoped>
</style>
