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
 * ]A
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
  noData: false,
  filter: null
})

export const mutations = {
  /**
   * increment page
   * @param {Number} page
   */
  INCREMENT_PAGE(state) {
    state.page++
  },

  /**
   * add array of post into state post
   * @param {Array} posts
   * @param {Boolean} infiniteScroll
   */
  ADD_POST(state, { posts, infiniteScroll }) {
    if (infiniteScroll) {
      posts.forEach((post) => {
        const isInStatePost = state.posts.find(({ id }) => id === post.id)
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
  DELETE_POST(state, post) {
    const index = state.posts.findIndex(({ id }) => id === post.id)
    if (index > -1) {
      state.posts.splice(index, 1)
    }
  },

  /**
   * update state post object based on the same ID
   * @param {Array} state
   * @param {Object} post
   */
  UPDATE_POST(state, post) {
    state.posts[state.posts.findIndex(({ id }) => id === post.id)] = post
  },

  /**
   * reset state
   * @param {Mixed} state
   */
  RESET_POST(state) {
    state.posts = []
    state.page = 1
    state.noData = false
  },

  /**
   * add comment into post comments
   * @param {Array} posts
   * @param {Object} post, comment
   */
  ADD_COMMENT(state, { post, comment }) {
    state.posts.find(({ id }) => id === post.id).comments.push(comment)
  },

  /**
   * delete comment from state post object
   * @param {Array} state post
   * @param {Object} post, comment
   */
  DELETE_COMMENT(state, { post, comment }) {
    const postComments = state.posts.find(({ id }) => id === post.id).comments
    const commentIndex = postComments.findIndex(({ id }) => id === comment.id)
    postComments.splice(commentIndex, 1)
  },

  /**
   * add react into post.reacts
   * @param {Array} stateposts
   * @param {Object} post, react
   */
  ADD_REACT(state, { post, react }) {
    state.posts.find(({ id }) => id === post.id).reacts.push(react)
  },

  /**
   * delete react from state post object
   * @param {Array} state post
   * @param {Object} post, react
   */
  DELETE_REACT(state, { post, react }) {
    const postReacts = state.posts.find(({ id }) => id === post.id).reacts
    const reactIndex = postReacts.findIndex(({ id }) => id === react.id)
    postReacts.splice(reactIndex, 1)
  },

  /**
   * set state noData to true
   * @param {Boolean} state nodata
   */
  SET_NO_DATA(state) {
    state.noData = true
  },

  PIN_POST(state, { post }) {
    state.posts[state.posts.findIndex(({ id }) => id === post.id)].is_pinned =
      !state.posts[state.posts.findIndex(({ id }) => id === post.id)].is_pinned
  },

  SET_FILTER_IS_PINNED(state) {
    state.filter = 'is_pinned'
  }
}

export const actions = {
  async fetchPost({ commit, getters }, { infiniteScroll, channelId }) {
    try {
      const { posts } = await this.$axios.$get(`/channels/${channelId}/posts`, {
        params: { page: getters.page, filter: getters.filter }
      })
      if (posts.length > 0) {
        commit('INCREMENT_PAGE')
        commit('ADD_POST', { posts, infiniteScroll })
      } else {
        commit('SET_NO_DATA')
      }
    } catch (e) {}
  },
  addPost({ commit }, post) {
    commit('ADD_POST', { posts: [post], infiniteScroll: false })
  },
  deletePost({ commit }, post) {
    commit('DELETE_POST', post)
  },
  editPost({ commit }, post) {
    commit('UPDATE_POST', post)
  },
  resetPosts({ commit }) {
    commit('RESET_POST')
  },
  addComment({ commit }, { post, comment }) {
    commit('ADD_COMMENT', { post, comment })
  },
  deleteComment({ commit }, { post, comment }) {
    commit('DELETE_COMMENT', { post, comment })
  },
  addReact({ commit }, { post, react }) {
    commit('ADD_REACT', { post, react })
  },
  deleteReact({ commit }, { post, react }) {
    commit('DELETE_REACT', { post, react })
  },
  pinPost({ commit }, { post }) {
    commit('PIN_POST', { post })
  },
  setFilterIsPinned({ commit }) {
    commit('SET_FILTER_IS_PINNED')
  }
}

export const getters = {
  posts(state) {
    return state.posts
  },
  page(state) {
    return state.page
  },
  filter(state) {
    return state.filter
  }
}
