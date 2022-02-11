<template>
  <div class="notification-detail row">
    <div class="col-lg-12">
      Unread Notification
      <span v-if="notifications"> ({{ notifications.length }}) </span>
    </div>
    <div class="col-lg-12 p-0">
      <hr class="text-secondary">
    </div>
    <div class="col-lg-12">
      <ul v-if="notifications">
        <li
          v-for="notification in notifications"
          :key="notification.id"
          class="intro-y"
        >
          <div class="user-pic">
            <img class="shadow-sm" :src="notification.comment.user.avatar" />
          </div>
          <div class="position-relative">
            <div class="user-name">
              <div class="d-flex justify-content-between">
                <div class="">
                  {{ notification.comment.user.name }}
                </div>
                <div class="text-sm text-secondary">
                  {{ notification.created_at }}
                </div>
              </div>
            </div>
            <div class="message shadow-sm">
              {{ notification.comment.message }}
            </div>
          </div>
        </li>
      </ul>
      <div v-else-if="fetching" class="col-lg-12">
        <div
          class="d-flex align-items-center justify-content-center intro-y"
          style="min-height: 300px"
        >
          <DefaultLoading />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: null,
      fetching: false
    }
  },
  mounted() {
    this.getNotification()
  },
  methods: {
    async getNotification() {
      this.fetching = true
      try {
        const response = await this.$axios.get('/notifications')
        this.notifications = response.data.notifications
      } catch (e) {
        this.$toast
          .error(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(2500)
      }
      this.fetching = false
    }
  }
}
</script>
