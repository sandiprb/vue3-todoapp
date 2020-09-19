<template>
  <div class="home">
    <ToDos />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ToDos from "@/components/ToDos.vue"; // @ is an alias to /src

@Options({
  components: {
    ToDos
  }
})
export default class Home extends Vue {}
</script>
