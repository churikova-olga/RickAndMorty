<template>

  <div class="v-catalog">
    <h1 class="title">Characters</h1>
<div class="  filter-menu row">
  <div class="col-3">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{flagStatus}}
      </button>
      <ul class="dropdown-menu">
        <li><button class="dropdown-item" @click="flagStatus='Any status'">Any status</button></li>
        <li><button class="dropdown-item" @click="flagStatus='Alive'">Alive</button></li>
        <li><button class="dropdown-item" @click="flagStatus='Dead'" >Dead</button></li>
        <li><button class="dropdown-item" @click="flagStatus='Unknown'">Unknown</button></li>

      </ul>
    </div>
  </div>
  <div class="col-6">
        <input v-model="search" class="form-control me-2" type="search" placeholder="Search name..." aria-label="Search">
  </div>
  <div class="col-2">
    <button type="button" class="btn btn-secondary" @click="this.applyFilter()"> Apply </button>
  </div>
</div>

    <div class="v-catalog-list">
     <div class="container-fluid" v-if="this.FILTER_CATALOG.length">
    <ul class="v-list">
      <vCatalogItem
        v-for="item in this.FILTER_CATALOG"
        :key="item.id"
        v-bind:item_data="item"
        class="v-list-group-item col-5 "
      />
    </ul>
      </div>
      <p class="v-not-characters" v-else > Not characters</p>
      <nav aria-label="Page navigation example" >
        <ul class="pagination" style="margin-top: 20px; justify-content: center">
          <li class="page-item">
            <button v-if="this.idPage > 1  " class="page-link" @click="this.idPage-=1; this.GET_CATALOG_FROM_API({idPage: this.idPage,name:this.curSearch, status:this.curFlagStatus})">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li class="page-item"><div class="page-link">{{this.idPage}}</div></li>

          <li class="page-item">
            <a class="page-link" @click="this.idPage+=1; this.GET_CATALOG_FROM_API({idPage: this.idPage,name:this.curSearch, status:this.curFlagStatus}); " v-if="this.idPage < 42   ">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
import vCatalogItem from  './v-catalog-item'
import {mapActions, mapGetters, mapMutations} from 'vuex'


export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {
    pageIdDefault: {
      type: String,
      default() {
        return '1';
      }
    },
    searchDefault: {
      type: String,
      default() {
        return '';
      }
    },
    statusDefault: {
      type: String,
      default() {
        return 'Any status';
      }
    }
  },
  data(){
    return {
      flagStatus: this.statusDefault,
      search: this.searchDefault,
      idPage: Number(this.pageIdDefault),
      curFlagStatus: this.statusDefault,
      curSearch: this.searchDefault,
    }
  },
  computed: {
    ...mapGetters([
      'CATALOG',
      'FILTER_CATALOG'
    ]),

  },
  methods: {
    ...mapActions([
      'GET_CATALOG_FROM_API',
    ]),
    ...mapMutations([
        'SET_FILTER_CATALOG_TO_STATE'
    ]),
    applyFilter(){
      this.curSearch = this.search;
      this.curFlagStatus = this.flagStatus;
      this.SET_FILTER_CATALOG_TO_STATE({catalog: this.CATALOG,idPage: this.idPage,name:this.curSearch, status:this.curFlagStatus})
    }

  },
  async mounted() {

    await this.GET_CATALOG_FROM_API({idPage: this.pageIdDefault,name:this.searchDefault, status:this.statusDefault});

  },

}
</script>

<style >
.btn{
  width: 100%;
}
.title{
  color: black;
  font-size: 64px;
  font-weight: bold;
  font-family: Roboto Slab;;
}
.filter-menu{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
  width: 100%;
}
.v-catalog-list{
  padding: 15px;
  background-color: rgb(39, 43, 51);

}
.v-list{
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;

}
.v-list-group-item{

   position: relative;
   display: block;
   color: #212529;
   text-decoration: none;
  max-height: 200px;
  margin: 10px;
}
.page-item{
  cursor: pointer;
  background-color: rgb(39, 43, 51);
}
.v-not-characters{
  color: white;
  font-family: Roboto Slab;
}
</style>