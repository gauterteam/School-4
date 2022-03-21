<template>
  <TheNavbar />
  <router-view/>
  <TheFooter />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: { TheNavbar, TheFooter }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
	// border: red solid 1px;
	font-family: 'Roboto', sans-serif;
	user-select: none;
}
</style>
