<template>
  <Layout> About Page </Layout>
</template>

<script>
import Layout from "../../components/Shared/TheLayout.vue";
export default {
  name: "IndexPage",
  components: {
    Layout,
  },
  head() {
    return {
      title: "About My Learning",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About My Learnign",
        },
      ],
    };
  },
};
</script>
