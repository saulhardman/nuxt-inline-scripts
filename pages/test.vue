<template>
  <div class="container">
    <nuxt-link to="/" class="button--grey">
      Back
    </nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Test'
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
