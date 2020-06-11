<template>
  <div>
    <p :id="timestampId" class="timestamp is-size-3">
      {{ parseInt(now / parseInt(unit)) }}</p>
    <button
      ref="clipboardButton"
      class="button is-info is-light"
      title="copy"
      :data-clipboard-target="'#' + timestampId"
    >
      <i class="far fa-clipboard"></i>
    </button>
    <div v-if="isCopied" class="notification notification-copy is-link is-light">
      Copied!
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'CurrentTimestamp',
  data() {
    return {
      now: Date.now(),
      isCopied: false,
      timestampId: `uid${this.unit}`,
    };
  },
  props: {
    unit: String,
  },
  mounted() {
    // eslint-disable-next-line no-new
    const clipboard = new ClipboardJS(this.$refs.clipboardButton);

    clipboard.on('success', (e) => {
      this.isCopied = true;

      setTimeout(() => {
        this.isCopied = false;
      }, 5000);

      e.clearSelection();
    });

    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
};
</script>

<style scoped>
.timestamp {
  display: inline-block;
  font-family: Lato;
}

.button {
  position: relative;
  top: 4px;
  left: 10px;
}

.notification-copy {
  display: inline-block;
  margin-left: 15px;
  padding: 8px 30px !important;
  top: -4px;
}
</style>
