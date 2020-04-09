<template>
    <div>
    
        <h1>Detalhe do Post</h1>
        <router-link
           tag="a"
           :to="{ name: 'posts' }"
       >
        Voltar
      </router-link>
      <div class="detail">
        <div><h3>título :</h3> {{ postById(id).title }}</div>
        <div><h3>descrição :</h3> {{ postById(id).description }}</div>
        <div><h3>prioridade :</h3> {{ postById(id).selected }}</div>
        <div><h3>descrição :</h3> {{ postById(id).dataexec }}</div>

        <button @click="editar">Editar Post</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "DetailPost",
    data: function(){
        return{ 
            id : this.$route.params.id,}
    },
    computed: mapGetters(["postById"]),
    methods: {
        editar() {
        this.$router.push({ name: 'edit-post' , params: { id: this.id } });
        }
    }
}
</script>

<style>
button{
  flex: 2;
  background: red;
  border: 1px solid grey;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
.detail{
    padding: 24px;
}
i {
  cursor: pointer;
  color: #000;
  position: inherit;
}
</style>