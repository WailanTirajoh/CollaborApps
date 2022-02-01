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
  posts: [],
  page: 1,
  noData: false
})

export const mutations = {
  /**
   * increment page
   * @param {Number} page
   */
  incrementPage(state) {
    state.page++
  },

  /**
   * add array of post into state post
   * @param {Array} posts
   * @param {Boolean} infiniteScroll
   */
  addPost(state, { posts, infiniteScroll }) {
    if (infiniteScroll) {
      posts.forEach((post) => {
        const isInStatePost = state.posts.find(({ id }) => id == post.id)
        if (!isInStatePost) {
          state.posts.push(post)
        }
      })
    } else {
      state.posts.unshift(...posts)
    }
  },

  /**
   * remove post object from state posts
   * @param {Array} posts
   * @param {Object} post
   */
  deletePost(state, post) {
    const index = state.posts.findIndex(({ id }) => id == post.id)
    if (index > -1) {
      state.posts.splice(index, 1)
    }
  },

  /**
   * update state post object based on the same ID
   * @param {Array} state
   * @param {Object} post
   */
  editPost(state, post) {
    state.posts[state.posts.findIndex(({ id }) => id == post.id)] = post
  },

  /**
   * reset state
   * @param {Mixed} state
   */
  resetPosts(state) {
    state.posts = []
    state.page = 1
    state.noData = false
  },

  /**
   * add comment into post comments
   * @param {Array} posts
   * @param {Object} post, comment
   */
  addComment(state, { post, comment }) {
    state.posts.find(({ id }) => id == post.id).comments.push(comment)
  },

  /**
   * delete comment from state post object
   * @param {Array} state post
   * @param {Object} post, comment
   */
  deleteComment(state, { post, comment }) {
    const postComments = state.posts.find(({ id }) => id == post.id).comments
    const commentIndex = postComments.findIndex(({ id }) => id == comment.id)
    postComments.splice(commentIndex, 1)
  },

  /**
   * add react into post.reacts
   * @param {Array} stateposts
   * @param {Object} post, react
   */
  addReact(state, { post, react }) {
    state.posts.find(({ id }) => id == post.id).reacts.push(react)
  },

  /**
   * delete react from state post object
   * @param {Array} state post
   * @param {Object} post, react
   */
  deleteReact(state, { post, react }) {
    const postReacts = state.posts.find(({ id }) => id == post.id).reacts
    const reactIndex = postReacts.findIndex(({ id }) => id == react.id)
    postReacts.splice(reactIndex, 1)
  },

  /**
   * set state noData to true
   * @param {Boolean} state nodata
   */
  setNoData(state) {
    state.noData = true
  }
}

export const actions = {
  async fetchPost({ commit, getters }, { infiniteScroll }) {
    try {
      const { posts } = await this.$axios.$get('/posts', {
        params: { page: getters.page }
      })
      if (posts.length > 0) {
        commit('incrementPage')
        commit('addPost', { posts, infiniteScroll })
      } else {
        commit('setNoData')
      }
    } catch (e) {}
  },
  addPost({ commit }, post) {
    commit('addPost', { posts: [post], infiniteScroll: false })
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
  },
  page(state) {
    return state.page
  }
}
