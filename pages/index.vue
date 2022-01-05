<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="px-1 col-lg-2 show-desktop">
        <div class="bg-blizard-blue rounded shadow px-2 py-2 bg-white mb-2">
          Recent Projects
        </div>
        <div class="bg-blizard-blue rounded shadow px-2 py-2 bg-white mb-2">
          <ul class="side-parent">
            <li>
              <NuxtLink to="/my-work">
                <div class="side-link">My Work</div>
              </NuxtLink>
              <ul class="parent-2">
                <NuxtLink to="/my-work">
                  <li>
                    <div class="side-link">My Work</div>
                  </li>
                </NuxtLink>
                <li>
                  <ul>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">My Work</div>
                      </li>
                    </NuxtLink>
                    <NuxtLink to="/my-work">
                      <li>
                        <div class="side-link">My Work</div>
                      </li>
                    </NuxtLink>
                    <li>
                      <ul>
                        <NuxtLink to="/my-work">
                          <li>
                            <div class="side-link">My Work</div>
                          </li>
                        </NuxtLink>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/my-work">
                <div class="side-link">My Work</div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/my-project">
                <div class="side-link">My Project</div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/activity">
                <div class="side-link">Activity</div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/unread-comment">
                <div class="side-link">Unread Comment</div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events">
                <div class="side-link">Events</div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="px-1 col-12"
        :class="{ 'col-lg-9': !chat.pinned, 'col-lg-7 pe-4': chat.pinned }"
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
  </div>
</template>

<script>
export default {
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
};
</script>
