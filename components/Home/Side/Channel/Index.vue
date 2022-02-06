<template>
  <div class="position-sticky" style="height: 100vh; top: 0">
    <div class="side-list text-sm p-2" style="height: 90%">
      <ul v-if="!fetching" class="side-parent position-relative mb-0">
        <!-- <li>
          <NuxtLink to="/my-work">
            <div class="side-link d-flex gap-1">
              <div class="side-icon">
                <font-awesome-icon :icon="['fas', 'briefcase']" />
              </div>
              OK Bank
            </div>
          </NuxtLink>
          <ul class="parent-2">
            <NuxtLink to="/my-work">
              <li class="h-left-border">
                <div class="side-link d-flex gap-1">
                  <div class="side-icon">
                    <font-awesome-icon :icon="['fas', 'tasks']" />
                  </div>
                  FE Development
                </div>
              </li>
            </NuxtLink>
            <li>
              <ul class="v-left-border">
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'retweet']" />
                      </div>
                      Request
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'running']" />
                      </div>
                      On Going
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'globe-asia']" />
                      </div>
                      Staging
                    </div>
                  </li>
                </NuxtLink>
                <li>
                  <ul class="v-left-border">
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                  </ul>
                </li>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'check']" />
                      </div>
                      Confirmed
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'flag-checkered']" />
                      </div>
                      Finish
                    </div>
                  </li>
                </NuxtLink>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/my-work">
            <div class="side-link d-flex gap-1">
              <div class="side-icon">
                <font-awesome-icon :icon="['fas', 'briefcase']" />
              </div>
              Unilever International
            </div>
          </NuxtLink>
          <ul class="parent-2">
            <NuxtLink to="/my-work">
              <li class="h-left-border">
                <div class="side-link d-flex gap-1">
                  <div class="side-icon">
                    <font-awesome-icon :icon="['fas', 'tasks']" />
                  </div>
                  FE Development
                </div>
              </li>
            </NuxtLink>
            <li>
              <ul class="v-left-border">
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'retweet']" />
                      </div>
                      Request
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'running']" />
                      </div>
                      On Going
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'globe-asia']" />
                      </div>
                      Staging
                    </div>
                  </li>
                </NuxtLink>
                <li>
                  <ul class="v-left-border">
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                  </ul>
                </li>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'check']" />
                      </div>
                      Confirmed
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'flag-checkered']" />
                      </div>
                      Finish
                    </div>
                  </li>
                </NuxtLink>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/my-work">
            <div class="side-link d-flex gap-1">
              <div class="side-icon">
                <font-awesome-icon :icon="['fas', 'briefcase']" />
              </div>
              Unilever International
            </div>
          </NuxtLink>
          <ul class="parent-2">
            <NuxtLink to="/my-work">
              <li class="h-left-border">
                <div class="side-link d-flex gap-1">
                  <div class="side-icon">
                    <font-awesome-icon :icon="['fas', 'tasks']" />
                  </div>
                  FE Development
                </div>
              </li>
            </NuxtLink>
            <li>
              <ul class="v-left-border">
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'retweet']" />
                      </div>
                      Request
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'running']" />
                      </div>
                      On Going
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'globe-asia']" />
                      </div>
                      Staging
                    </div>
                  </li>
                </NuxtLink>
                <li>
                  <ul class="v-left-border">
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li class="h-left-border">
                        <div class="side-link d-flex gap-1">
                          <div class="side-icon">
                            <font-awesome-icon :icon="['fas', 'code-branch']" />
                          </div>
                          Check
                        </div>
                      </li>
                    </NuxtLink>
                  </ul>
                </li>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'check']" />
                      </div>
                      Confirmed
                    </div>
                  </li>
                </NuxtLink>
                <NuxtLink to="/my-work">
                  <li class="h-left-border">
                    <div class="side-link d-flex gap-1">
                      <div class="side-icon">
                        <font-awesome-icon :icon="['fas', 'flag-checkered']" />
                      </div>
                      Finish
                    </div>
                  </li>
                </NuxtLink>
              </ul>
            </li>
          </ul>
        </li> -->
        <li v-for="channel in channels" :key="channel.id">
          <HomeSideChannelItem :slug="channel.slug" :name="channel.name" />
          <ul></ul>
        </li>
      </ul>
      <div v-else>
        <div
          class="d-flex align-items-center justify-content-center intro-y"
          style="min-height: 300px"
        >
          <DefaultLoading />
        </div>
      </div>
    </div>
    <div class="bg-light" style="height: 10%">
      <div class="dropdown dropup">
        <button
          type="button"
          class="w-100 text-sm text-center bg-light border d-flex gap-1 align-items-center justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div class="side-icon">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </div>

          Create new channel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetching: false
    }
  },
  computed: {
    channels() {
      return this.$store.state.channels.channels
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      this.fetching = true
      try {
        await this.$store.dispatch('channels/fetchChannels')
      } catch (e) {}
      this.fetching = false
    }
  }
}
</script>
