/**
 * state.posts [data structure]
 * [
 *  {
 *    'id':int,
 *    'text':string,
 *    'total_comments':int,
 *    'created_at':string,
 *    'user':Object,
 *  }
 * ]
 * ;
 *
 * user [data structure]
 * {
 *  'id':int,
 *  'name':string,
 *  'avatar':string,
 * };
 */
export const state = () => ({
  posts: []
})

export const mutations = {
  addNewPost(state, posts) {
    state.posts.unshift(...posts)
  },
  removePost(state, post) {
    const index = state.posts.findIndex((x) => x.id == post.id)
    state.posts.splice(index, 1)
  },
  editPost(state, post) {
    state.posts[state.posts.findIndex((x) => x.id == post.id)] = post
  },
  resetPosts(state) {
    state.posts = []
  },
  addTotalComment(state, post) {
    const thepost = state.posts[state.posts.findIndex((x) => x.id == post.id)]
    if (thepost) {
      post.total_comments++
    }
  },
  minTotalComment(state, post) {
    const thepost = state.posts[state.posts.findIndex((x) => x.id == post.id)]
    if (thepost) {
      post.total_comments--
    }
  },
  addTotalReacts(state, post) {
    const thepost = state.posts[state.posts.findIndex((x) => x.id == post.id)]
    if (thepost) {
      post.total_reacts++
    }
  },
  minTotalReacts(state, post) {
    const thepost = state.posts[state.posts.findIndex((x) => x.id == post.id)]
    if (thepost) {
      post.total_reacts--
    }
  }
}

export const actions = {
  async fetchPost({ commit }) {
    commit('resetPosts')
    try {
      const result = await this.$axios.$get('/post')
      commit('addNewPost', result.posts)
      return result
    } catch (e) {}
  },
  addNewPost({ commit }, post) {
    commit('addNewPost', [post])
  },
  removePost({ commit }, post) {
    commit('removePost', post)
  },
  editPost({ commit }, post) {
    commit('editPost', post)
  },
  resetPosts({ commit }) {
    commit('resetPosts')
  },
  addTotalComment({ commit }, post) {
    commit('addTotalComment', post)
  },
  minTotalComment({ commit }, post) {
    commit('minTotalComment', post)
  },
  addTotalReacts({ commit }, post) {
    commit('addTotalReacts', post)
  },
  minTotalReacts({ commit }, post) {
    commit('minTotalReacts', post)
  }
}

export const getters = {
  posts(state) {
    return state.posts
  }
}
