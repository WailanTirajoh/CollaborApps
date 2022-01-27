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
  addPost(state, posts) {
    state.posts.unshift(...posts)
  },
  deletePost(state, post) {
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
    const commentIndex = postComments.findIndex((x) => x.id == comment.id)
    postComments.splice(commentIndex, 1)
  },
  addReact(state, { post, react }) {
    state.posts.find((x) => x.id == post.id).reacts.push(react)
  },
  deleteReact(state, { post, react }) {
    const postReacts = state.posts.find((x) => x.id == post.id).reacts
    const reactIndex = postReacts.findIndex((x) => x.user_id == react.user_id)
    postReacts.splice(reactIndex, 1)
  }
}

export const actions = {
  async fetchPost({ commit }) {
    commit('resetPosts')
    try {
      const result = await this.$axios.$get('/posts')
      commit('addPost', result.posts)
      return result
    } catch (e) {}
  },
  addPost({ commit }, post) {
    commit('addPost', [post])
  },
  deletePost({ commit }, post) {
    commit('deletePost', post)
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
  addReact({ commit }, { post, react }) {
    commit('addReact', { post, react })
  },
  deleteReact({ commit }, { post, react }) {
    commit('deleteReact', { post, react })
  }
}

export const getters = {
  posts(state) {
    return state.posts
  }
}
