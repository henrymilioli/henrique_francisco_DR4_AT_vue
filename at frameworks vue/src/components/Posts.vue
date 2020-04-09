<template>

  <div>
    <div>
      <AddPost/>
    </div>
    <h3>Post(s)</h3>
    <div class="posts">
    <div v-if="allPosts.length == 0">Sem posts cadastrados!</div>
      <div
       
        v-for="post in allPosts"
        :key="post.id"
        :id="post.id"
        class="post"
        
      >
      <router-link
           tag="h5"
           :to="{ name: 'detailPost', params: { id: post.id } }"
       >
        {{ post.title }}
      </router-link>
      
        <i @click="deletePost(post.id)" class="fas fa-trash-alt"></i>
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddPost from './AddPost.vue'
export default {
  name: "posts",
  components:{AddPost},
  methods: {
    ...mapActions(["getPosts", "deletePost"]),
  },
  computed: mapGetters(["allPosts"]),
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.post {
  border: 1px solid #ccc;
  background: rgb(78, 78, 78);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .posts {
    grid-template-columns: 1fr;
  }
}
</style>