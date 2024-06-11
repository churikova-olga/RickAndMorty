import axios from "axios";

export default {
    state:{
        catalog: [],
        filterCatalog: []
    },

    actions:{
        GET_CATALOG_FROM_API({commit}, data){

            return axios(`https://rickandmortyapi.com/api/character/?page=${data.idPage}`, {
                method: "GET"
            })
                .then((catalog )=>{


                    commit('SET_FILTER_CATALOG_TO_STATE', {catalog: catalog.data.results, name: data.name, status: data.status});
                    commit('SET_CATALOG_TO_STATE', catalog.data.results);
                    return catalog
                })
                .catch((error)=>{
                    console.log(error)
                    return error;
                })
        }
    },
    mutations: {
        SET_CATALOG_TO_STATE(state, catalog){
            state.catalog = catalog;
        },
        SET_FILTER_CATALOG_TO_STATE: (state, data)=>{
            state.filterCatalog = data.catalog.filter((elem) => {
                if (data.status === 'Any status') {
                    return true
                } else if (data.status === 'Alive') {
                    if (elem.status === 'Alive') {
                        return elem
                    }
                } else if (data.status === 'Unknown') {
                    if (elem.status === 'unknown') {
                        return elem
                    }
                } else {
                    if (elem.status === 'Dead') {
                        return elem
                    }
                }
            }).filter(function (elem) {
                if(data.name === '') return true;
                else return elem.name.indexOf(data.name) > -1;
            })
        },
    },
    getters: {
        CATALOG(state){
            return state.catalog
        },
        FILTER_CATALOG(state){
            return state.filterCatalog
        }
    }

}
