<template>
<div class="app">
  <vMainWrapper />
</div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'
export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style >
@import '~bootstrap/dist/css/bootstrap.css';
#app {
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;

}
html,body {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
