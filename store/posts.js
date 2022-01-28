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
  addPage(state) {
    state.page++
  },
  /**
   * add array of post into state post
   * @param {Array} posts
   * @param {Boolean} infiniteScroll
   */
  addPost(state, { posts, infiniteScroll }) {
    if (infiniteScroll) {
      // Method 1
      // const filteredPost = posts.filter(function (post) {
      //   return state.posts.some(function (statePost) {
      //     console.log(statePost.id, post.id)
      //     return statePost.id != post.id
      //   })
      // })
      // ------------------------------------------------------
      // method 2
      // const filteredPost = {}
      // await posts.forEach((post) => {
      //   const isInStatePost = state.posts.find(
      //     (statePost) => statePost.id == post.id
      //   )
      //   if (isInStatePost == undefined) {
      //     filteredPost.push(isInStatePost)
      //   }
      // })
      // state.posts.push(...filteredPost)
      // End filter
      state.posts.push(...posts)
    } else {
      state.posts.unshift(...posts)
    }
  },
  deletePost(state, post) {
    const index = state.posts.findIndex((statePost) => statePost.id == post.id)
    state.posts.splice(index, 1)
  },
  editPost(state, post) {
    state.posts[state.posts.findIndex((statePost) => statePost.id == post.id)] =
      post
  },
  resetPosts(state) {
    state.posts = []
    state.page = 1
    state.noData = false
  },
  addComment(state, { post, comment }) {
    state.posts
      .find((statePost) => statePost.id == post.id)
      .comments.push(comment)
  },
  deleteComment(state, { post, comment }) {
    const postComments = state.posts.find(
      (statePost) => statePost.id == post.id
    ).comments
    const commentIndex = postComments.findIndex(
      (postComment) => postComment.id == comment.id
    )
    postComments.splice(commentIndex, 1)
  },
  addReact(state, { post, react }) {
    state.posts.find((statePost) => statePost.id == post.id).reacts.push(react)
  },
  deleteReact(state, { post, react }) {
    const postReacts = state.posts.find((x) => x.id == post.id).reacts
    const reactIndex = postReacts.findIndex((x) => x.user_id == react.user_id)
    postReacts.splice(reactIndex, 1)
  },
  setNoData(state) {
    state.noData = true
  }
}

export const actions = {
  async fetchPost({ commit, getters }, { infiniteScroll }) {
    try {
      // const result = await this.$axios.$get(`/posts?page=${getters.page}`)
      const result = await this.$axios.$get('/posts', {
        params: { page: getters.page }
      })
      if (result.posts.length > 0) {
        commit('addPage')
        commit('addPost', { posts: result.posts, infiniteScroll })
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
