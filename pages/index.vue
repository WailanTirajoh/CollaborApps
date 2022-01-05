<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="px-1 col-lg-3 show-desktop">
        <div class="bg-blizard-blue rounded shadow px-2 py-2 bg-white mb-2 text-center">
          <font-awesome-icon :icon="['fas', 'project-diagram']" /> Recent
          Projects
        </div>
        <div class="bg-blizard-blue rounded shadow px-2 py-2 bg-white mb-2 side-list">
          <ul class="side-parent position-relative">
            <li>
              <NuxtLink to="/my-work">
                <div class="side-link">
                  <font-awesome-icon :icon="['fas', 'briefcase']" /> OK Bank
                </div>
              </NuxtLink>
              <ul class="parent-2">
                <NuxtLink to="/my-work">
                  <li>
                    <div class="side-link">
                      <font-awesome-icon :icon="['fas', 'tasks']" /> FE
                      Development
                    </div>
                  </li>
                </NuxtLink>
                <li>
                  <ul>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'retweet']" />
                          Request
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'running']" /> On
                          Going
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'globe-asia']" />
                          Staging
                        </div>
                      </li>
                    </NuxtLink>
                    <li>
                      <ul>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">
                              <font-awesome-icon
                                :icon="['fas', 'code-branch']"
                              />
                              Check
                            </div>
                          </li>
                        </NuxtLink>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">
                              <font-awesome-icon
                                :icon="['fas', 'code-branch']"
                              />
                              Check
                            </div>
                          </li>
                        </NuxtLink>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">
                              <font-awesome-icon
                                :icon="['fas', 'code-branch']"
                              />
                              Check
                            </div>
                          </li>
                        </NuxtLink>
                      </ul>
                    </li>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'check']" />
                          Confirmed
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon
                            :icon="['fas', 'flag-checkered']"
                          />
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
                <div class="side-link">
                  <font-awesome-icon :icon="['fas', 'briefcase']" /> Unilever
                  International
                </div>
              </NuxtLink>
              <ul class="parent-2">
                <NuxtLink to="/my-work">
                  <li>
                    <div class="side-link">
                      <font-awesome-icon :icon="['fas', 'tasks']" /> FE
                      Development
                    </div>
                  </li>
                </NuxtLink>
                <li>
                  <ul>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'retweet']" />
                          Request
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'running']" /> On
                          Going
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'globe-asia']" />
                          Staging
                        </div>
                      </li>
                    </NuxtLink>
                    <li>
                      <ul>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">
                              <font-awesome-icon
                                :icon="['fas', 'code-branch']"
                              />
                              Check
                            </div>
                          </li>
                        </NuxtLink>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">
                              <font-awesome-icon
                                :icon="['fas', 'code-branch']"
                              />
                              Check
                            </div>
                          </li>
                        </NuxtLink>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">
                              <font-awesome-icon
                                :icon="['fas', 'code-branch']"
                              />
                              Check
                            </div>
                          </li>
                        </NuxtLink>
                      </ul>
                    </li>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon :icon="['fas', 'check']" />
                          Confirmed
                        </div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">
                          <font-awesome-icon
                            :icon="['fas', 'flag-checkered']"
                          />
                          Finish
                        </div>
                      </li>
                    </NuxtLink>
                  </ul>
                </li>
              </ul>
            </li>
            <li class=" position-sticky bottom-0">
              <NuxtLink to="/my-work">
                <div class="side-link mt-2 text-center bg-dark-gray text-white">
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  Add More Project
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="px-1 col-12"
        :class="{ 'col-lg-8': !chat.pinned, 'col-lg-6 pe-4': chat.pinned }"
      >
        <div class="bg-blizard-blue rounded shadow px-2 py-2 bg-white">
          <div class="d-flex align-items-center gap-2">
            <img
              class="img-fluid rounded-circle object-fit-cover w-3r h-3r"
              src="/default/user.png"
            />
            <FormInput
              type="text"
              id="disabledTextInput"
              class="w-100"
              :placeholder="`Hello ${$auth.user.name}, apa yang anda pikirkan?`"
            />
          </div>
        </div>
      </div>
      <RightChatBox @chatClicked="updatePin" />
    </div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  ssr: false,
  middleware: "auth",
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Homepage",
        },
      ],
    };
  },
  data() {
    return {
      chat: {
        pinned: true,
      },
    };
  },
  methods: {
    updatePin(event) {
      this.chat.pinned = event;
    },
  },
  mounted() {},
};
</script>
