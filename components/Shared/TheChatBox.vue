<template>
  <div
    class="position-fixed show-desktop chat-box"
    :class="{ isPinned }"
    style="z-index: 10"
  >
    <div class="header cursor-pointer" @click="togglePin">
      <div
        class="d-flex justify-content-between align-items-center py-2 px-2 w-100"
      >
        <div class="d-flex gap-2">
          <img
            :src="$auth.user.avatar"
            class="img-fluid rounded-circle object-fit-cover w-2r h-2r"
            alt=""
          />
          <h6 class="my-auto">Pesan</h6>
        </div>
        <div class="me-2">
          <font-awesome-icon
            :icon="['fas', isPinned ? 'chevron-down' : 'chevron-up']"
          />
        </div>
      </div>
    </div>
    <div class="h-100">
      <div class="textbox px-2 py-1" style="overflow-y: auto; height: 80%">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ex
        debitis velit libero obcaecati ab, necessitatibus tempora delectus?
        Dolor, officia? Labore excepturi facere ipsam ut, dolores cumque
        voluptate beatae neque velit nulla suscipit consectetur quos facilis sit
        ipsum natus reprehenderit temporibus accusamus totam nam illo nesciunt!
        A perferendis sit commodi architecto. Sint dolor vero voluptas, qui at
        officiis illo, error tempora nesciunt tempore totam! Ipsam magnam libero
        sunt vero animi deserunt sequi, esse dicta voluptate accusantium et
        maxime debitis obcaecati possimus unde amet voluptates aut nisi fugiat!
        Eum rem ipsa nam consequuntur praesentium voluptatum vitae veritatis
        optio! Provident, consequatur. Alias eum aliquid accusamus sed enim
        exercitationem voluptatibus consectetur aliquam, officiis perferendis
        quos vitae officia voluptatum temporibus delectus. Impedit minus sequi
        repellat quas eum accusantium dolores eaque ipsam rem quos inventore
        consequatur laborum sunt, facilis eligendi voluptate porro voluptatibus
        architecto cumque molestiae. Quod explicabo sed earum voluptate?
        Voluptatem temporibus tempora perferendis minus consequatur quas alias,
        velit molestiae sunt natus tempore aut suscipit minima, reiciendis
        explicabo vel, laboriosam vero? Dolorum consequuntur quisquam non rerum
        beatae deleniti repellendus? Veniam, ipsam? Exercitationem voluptatibus
        sapiente iure reiciendis sit ratione vitae tenetur cumque error magni
        saepe dolores fugiat accusamus non mollitia beatae facilis cupiditate
        autem praesentium amet obcaecati, debitis culpa minima. Consectetur
        veniam beatae maiores accusamus, earum ipsam quaerat veritatis hic
        voluptatibus reiciendis. Nulla fugiat architecto voluptatibus
        praesentium voluptatum ipsa earum libero harum, repellendus ipsum
        tempora aperiam quibusdam molestiae laborum voluptate itaque sunt
        corporis velit necessitatibus magni? Minus quam officia saepe error id
        doloremque assumenda nisi, odio mollitia quibusdam ipsum doloribus
        magnam ipsa ea qui deleniti commodi cumque repudiandae cum consequatur
        itaque molestiae porro ullam recusandae. Molestias ducimus eligendi
        repellat dolores laborum cum voluptate! Omnis praesentium dolores ipsa
        itaque pariatur nobis, consequatur impedit vero voluptatem cum, corrupti
        minus ipsam quo natus repellat quae possimus! Molestias suscipit aut
        excepturi dignissimos ad earum autem possimus dolores provident, natus
        eveniet. Porro, fuga minima! Quae et sed non explicabo corporis dolorem
        dignissimos, sint ullam placeat harum amet id deleniti doloribus eos
        porro expedita suscipit? Quam voluptates temporibus voluptatem sequi
        quod tempore sit accusamus fugiat, culpa quibusdam repellendus
        accusantium itaque deleniti dicta rem praesentium ipsum, expedita,
        soluta quis nam. Quidem amet quia id! Accusantium doloremque aliquam
        debitis, suscipit voluptatibus accusamus blanditiis temporibus nihil aut
        obcaecati cum deleniti pariatur eaque tempora ducimus autem tempore
        dolore labore, nisi corporis aliquid expedita, laborum in. Doloribus
        quas porro mollitia, nisi dolor adipisci quibusdam, sint a rerum
        distinctio laborum repellendus nulla qui at alias corporis, voluptatum
        autem. Ut, a vitae?
      </div>
      <div>
        <div class="input w-100 position-fixed bottom-0">
          <input
            id="disabledTextInput"
            type="text"
            :placeholder="`Hai, apa yang sedang anda kerjakan?`"
            autocomplete="off"
            class="form-control"
            style="border-radius: 0px"
          />
          <div class="d-flex justify-content-between">
            <button class="btn">test</button>
            <button class="btn">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    isPinned() {
      return this.$store.state.chat.isPinned
    }
  },
  methods: {
    ...mapActions(['chat/updatePin']),
    togglePin() {
      this.$store.dispatch('chat/updatePin')
    }
  }
}
</script>

<style lang="scss" scoped></style>
