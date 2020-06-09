<template>
  <div>
    <h2 class="is-size-1">Current Timestamp</h2>
    <p id="timestamp" class="timestamp is-size-3">
      {{ parseInt(now / 1000) }}</p>
    <button
      class="button is-info is-light"
      title="copy"
      data-clipboard-target="#timestamp"
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
    };
  },
  created() {
    // eslint-disable-next-line no-new
    const clipboard = new ClipboardJS('.button');

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
  width: 190px;
}

.button {
  position: relative;
  top: 6px;
}

.notification-copy {
  display: inline-block;
  margin-left: 15px;
  padding: 8px 30px !important;
  top: -4px;
}
</style>
