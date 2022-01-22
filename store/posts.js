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
  editPost(state, post) {
    state.posts[state.posts.findIndex(x => x.id === post.id)] = post;
  },
  resetPosts(state) {
    state.posts = [];
  }
}

export const actions = {
  async fetchPost({ commit }) {
    commit('resetPosts');
    try {
      var result = await this.$axios.$get("/post");
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
  editPost({ commit }, post) {
    commit('editPost', post);
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
