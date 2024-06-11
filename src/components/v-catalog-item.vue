<template>

  <div class="v-card-item-border">
    <div class="v-card-item-wrapper">
    <div class="card " v-if="item_data">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="item_data.image" class="img-fluid rounded-start" style="height: 200px; width: 200px" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="v-card-title">{{item_data.name}}</h5>
            <p class="v-card-li"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" style="color: rgb(214, 61, 46); margin-right: 5px" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>{{item_data.status}} - {{item_data.species}}</p>

            <p class="v-card-label"> Last known location:</p>
            <p class="v-card-text">{{item_data.location.name}}</p>

            <p class="v-card-label">First seen in:</p>

            <p class="v-card-text">{{this.episode}}</p>
          </div>
        </div>
      </div>
    </div>
        </div>


      </div>
</template>

<script>
import axios from "axios";

export default {
  name: "v-catalog-item",
  props: {
    item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      episode: ''
    }
  },

  mounted() {

       axios(this.item_data.episode[0], {
        method: "GET"
      }).then((response )=>{
         this.episode = response.data.name
      })
          .catch((error)=>{
            console.log(error)
            return error;
          })
    }
  }

</script>

<style>
.v-card-item-wrapper{
  height: 100%;

}
.card{
  height: 100%;
  background-color:rgb(60, 62, 68);
}
.card-body{
  text-align: left;
}
.v-card-label{
  margin-top: 5px;
  color: rgb(158, 158, 158);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
}
.v-card-li{
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: white;

}
.v-card-title{
  color: white;
  font-weight: bold;
  font-size: 22px;
  margin: 0;
}
.v-card-text{
  color: rgb(245, 245, 245);
  font-size: 16px;
  margin-bottom: 10px;
}
</style>