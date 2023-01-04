<template>
  <h1>About Page</h1>
  <p>{{ msg }}</p>
  <button @click="msg = 'About Page 2'">Change</button>
</template>

<script>
export default {
  data() {
    return {
      msg: 'About Page'
    }
  },
 beforeCreate() {
   console.log('AboutPage beforeCreate')
   //use for validations
 },
  created() {
    console.log('AboutPage created')
    //htttp request
  },
  beforeMount() {
    console.log('AboutPage beforeMount')
  },
  mounted() {
    console.log('AboutPage mounted')
  },
  beforeUpdate() {
    console.log('AboutPage beforeUpdate')
  },
  updated() {
    console.log('AboutPage updated')
  },
  activated() {
    console.log('AboutPage activated')
  },
  deactivated() {
    console.log('AboutPage deactivated')
  },
  beforeUnmount() {
    console.log('AboutPage beforeUnmount')
  },
  unmounted() {
    console.log('AboutPage unmounted')
  },
  errorCaptured() {
    console.log('AboutPage errorCaptured')
  },
  renderTracked() {
    console.log('AboutPage renderTracked')
  },
  renderTriggered() {
    console.log('AboutPage renderTriggered')
  },
}
</script>

<style>

</style>