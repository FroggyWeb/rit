<template>
  <div class="article-wrap section config-app">
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import Catalog from "./component/Catalog.vue";
import Form from "./component/Form.vue";
export default {
  data() {
    return {};
  },
  components: {
    Catalog,
    Form
  },
  setup() {

    return {

    };
  },
  mounted() {},
};
</script>

