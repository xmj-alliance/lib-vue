<template>
  <section class="hello">
    <h1>hello {{ name }}!</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "lib-vue"
    }
  }
}
</script>

<style>
section.hello {
  text-align: center;
}
</style>
