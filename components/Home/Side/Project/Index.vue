<template>
  <div class="rounded shadow-sm px-2 py-2 bg-white mb-2 side-list">
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
                <font-awesome-icon :icon="['fas', 'tasks']" /> FE Development
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
                    <font-awesome-icon :icon="['fas', 'running']" /> On Going
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
                        <font-awesome-icon :icon="['fas', 'code-branch']" />
                        Check
                      </div>
                    </li>
                  </NuxtLink>
                  <NuxtLink to="/my-work">
                    <li>
                      <div class="side-link">
                        <font-awesome-icon :icon="['fas', 'code-branch']" />
                        Check
                      </div>
                    </li>
                  </NuxtLink>
                  <NuxtLink to="/my-work">
                    <li>
                      <div class="side-link">
                        <font-awesome-icon :icon="['fas', 'code-branch']" />
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
                    <font-awesome-icon :icon="['fas', 'flag-checkered']" />
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
                <font-awesome-icon :icon="['fas', 'tasks']" /> FE Development
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
                    <font-awesome-icon :icon="['fas', 'running']" /> On Going
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
                        <font-awesome-icon :icon="['fas', 'code-branch']" />
                        Check
                      </div>
                    </li>
                  </NuxtLink>
                  <NuxtLink to="/my-work">
                    <li>
                      <div class="side-link">
                        <font-awesome-icon :icon="['fas', 'code-branch']" />
                        Check
                      </div>
                    </li>
                  </NuxtLink>
                  <NuxtLink to="/my-work">
                    <li>
                      <div class="side-link">
                        <font-awesome-icon :icon="['fas', 'code-branch']" />
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
                    <font-awesome-icon :icon="['fas', 'flag-checkered']" />
                    Finish
                  </div>
                </li>
              </NuxtLink>
            </ul>
          </li>
        </ul>
      </li>
      <li class="position-sticky bottom-0">
        <NuxtLink to="/my-work">
          <div class="side-link mt-2 text-center bg-dark-gray text-white">
            <font-awesome-icon :icon="['fas', 'plus']" />
            Add More Project
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
