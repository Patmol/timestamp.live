<template>
  <header>
    <h1>
      timestamp.live
    </h1>
    <h2>
      Always get the latest UNIX timestamp
    </h2>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
header {
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(45deg,hsl(171, 100%, 41%) 0%,hsl(204, 86%, 53%) 100%);
}

h1 {
  color: white;
  font-family: Lato;
  font-size: 3rem;
}

h2 {
  color: white;
  font-family: Lato;
  font-size: 2rem;
}
</style>
