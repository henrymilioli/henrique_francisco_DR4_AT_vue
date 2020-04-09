<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Título:</h2></div>
      <div><input type="text" v-model="post_add.title" placeholder="Adicionar título"></div>
              <div><h4>Descrição:</h4></div>
        <div><input type="text" v-model="post_add.description" placeholder="Digite a Descrição" required></div>
        <div>
        <h4>Selecione a prioridade:</h4>
          <select v-model="post_add.selected" required>
            <option disabled value="">Selecione</option>
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>
          <br>
          <h4><label for="start">Data de execução:</label></h4>
          <input type="date" v-model="post_add.dataexec" id="start" name="trip-start"
                value="2020-04-01"
                min="2020-01-01" max="2030-12-31" required>
      </div>
      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditPost",
  data() {
    return {
      id:this.$route.params.id,
      post_add :{
        title: "",
        description: ""
      }
    }
  },computed: mapGetters(["postById"]),
  created() {
    this.post_add = this.postById(this.id)
  },
  methods: {
    ...mapActions(["updatePost"]),
    onSubmit() {
      this.updatePost(this.post_add);
      alert("Dados editados com sucesso")
    }
  }
}
</script>

<style>
</style>