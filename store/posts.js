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
  addComment(state, { post, comment }) {
    state.posts.find((x) => x.id == post.id).comments.push(comment)
  },
  deleteComment(state, { post, comment }) {
    const postComments = state.posts.find((x) => x.id == post.id).comments
    const commetIndex = postComments.findIndex((x) => x.id == comment.id)
    postComments.splice(commetIndex, 1)
  },
  addTotalReacts(state, post) {
    const thepost = state.posts[state.posts.findIndex((x) => x.id == post.id)]
    if (thepost) {
      thepost.total_reacts++
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
      const result = await this.$axios.$get('/posts')
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
  addComment({ commit }, { post, comment }) {
    commit('addComment', { post, comment })
  },
  deleteComment({ commit }, { post, comment }) {
    commit('deleteComment', { post, comment })
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
