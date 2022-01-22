export const state = () => ({
  posts: [],
})

export const mutations = {
  addPosts(state, posts) {
    state.posts.unshift(...posts)
  },
  removePost(state, post) {
    state.posts.splice(state.posts.indexOf(post), 1);
  },
  resetPosts(state) {
    state.posts = [];
  }
}

export const actions = {
  async getPosts({ commit }) {
    try {
      var result = await this.$axios.$get("/posts");
      commit('addPosts', result.posts);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  addNewPost({ commit }, post) {
    commit('addPosts', [post])
  },
  removePost({ commit }, post) {
    commit('removePost', post);
  },
  resetPosts({ commit }) {
    commit('resetPosts');
  }
}

export const getters = {
  posts(state) {
    return state.posts;
  }
}
