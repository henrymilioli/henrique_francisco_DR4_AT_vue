<template>
  <div>
    <h3>Adicionar Post</h3>
    <div>
      <form @submit.prevent="onSubmit">
        <div><h4>Título:</h4></div>
        <div><input type="text" v-model="post_add.title" placeholder="Digite o título do Post" required></div>
        <div><h4>Descrição:</h4></div>
        <div><input type="text" v-model="post_add.description" placeholder="Digite a Descrição do Post" required></div>
        <div>
        <h4>Selecione a prioridade:</h4>
          <select v-model="post_add.selected" required>
            <option disabled value="">Selecione</option>
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>
          <br>
          <h4><label for="start">Data para execução:</label></h4>
          <input type="date" v-model="post_add.dataexec" id="start" name="trip-start"
                value="2020-04-01"
                min="2020-01-01" max="2030-12-31" required>
        </div>
        <div><input type="submit" value="Adicionar Post"></div> 
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      post_add :{
        title: "",
        description: "",
        selected: "",
        dataexec: "",
      }
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    onSubmit() {
      this.addPost(this.post_add);
    }
  }
};
</script>

<style>
form {
  display: block;
}
input[type="text"],input[type="textarea"] {
  width: 100%;
  flex: 10;
  padding: 10px;
  border: 1px solid grey;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: red;
  border: 1px solid black;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
</style>