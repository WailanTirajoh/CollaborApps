export const state = () => ({
  posts: [],
})

export const mutations = {
  addSinglePost(state, post) {
    state.posts.unshift(post)
  },
  addPosts(state, posts) {
    state.posts.unshift(...posts)
  },
  resetPosts(state) {
    state.posts = [];
  }
}

export const actions = {
  async getPosts({ commit }) {
    try {
      var result = await this.$axios.$get("/posts");
      console.log(result.posts);
      commit('addPosts', result.posts);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  addNewPost({ commit }, post) {
    commit('addPosts', [post])
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
