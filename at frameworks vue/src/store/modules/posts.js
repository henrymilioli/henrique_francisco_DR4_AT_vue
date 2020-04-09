import axios from "axios";

const state = {
  posts: []
};
const getters = {
  allPosts: state => state.posts,
  postById: (state) => (id) => (state.posts.filter(t => t.id == id))[0],
};
const actions = {
  fetchPosts({ commit }) {
      commit("setPosts");
  },
  getPosts({ commit }) {
    axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => {
        commit('getPost', response.data);
    });
},
   addPost({ commit }, post_add) {
    const new_index =  state.posts.length +1
    const response =  {
            "userId": 1,
            "id": new_index ,
            "title": post_add.title,
            "description": post_add.description,
            "selected": post_add.selected,
            "dataexec": post_add.dataexec,
          }
    commit('newPost',response);
  },
  deletePost({ commit }, id) {
    commit("removePost", id);
  }, 
  updatePost({ commit }, updPost) {
    commit("updatePost", updPost);
  }, 
};
const mutations = {
  setPosts: (state) => state.posts,
  getPost: (state, post) => (state.posts = post),
  newPost: (state, post) => state.posts.unshift(post),
  removePost: (state, id) =>
    (state.posts = state.posts.filter(t => t.id !== id)),
    updatePost: (state, updPost) => {
      const index = state.posts.findIndex(t => t.id === updPost.id)
      if (index !== -1) {
        state.posts.splice(index, 1, updPost);
        }
      }
};

export default {
  state,
  actions,
  getters,
  mutations
};