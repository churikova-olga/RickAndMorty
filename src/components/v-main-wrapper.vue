<template>
  <img class="img-rick-and-morty" src="../assets/styles/img/Rick_and_Morty_logo.png">
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
export default {
  name: "v-main-wrapper",

}
</script>

<style>
.v-main-wrapper{
  max-width: 100%;
  margin: 0 auto;
}
.img-rick-and-morty{
  max-height: 120px;
  max-width: 500px;
}
</style>