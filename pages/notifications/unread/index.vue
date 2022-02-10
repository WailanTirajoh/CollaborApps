<template>
  <div class="notification-detail row">
    <div class="col-lg-12">Unread</div>
    <div class="col-lg-12">
      <ul>
        <li v-for="notification in notifications" :key="notification.id">
          <div class="user-pic">
            <img :src="notification.comment.user.avatar" />
          </div>
          <div>
            <div class="user-name">
              {{ notification.comment.user.name }}
            </div>
            <div class="message">
              {{ notification.comment.message }}
            </div>
          </div>
        </li>
      </ul>
      <!-- {{ notifications }} -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: []
    }
  },
  mounted() {
    this.getNotification()
  },
  methods: {
    async getNotification() {
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
    }
  }
}
</script>
