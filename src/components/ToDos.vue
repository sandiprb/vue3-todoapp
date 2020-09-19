<template>
  <div>
    TODO:
  </div>
  <input type="text" v-model="draftTodo" />
  <button type="submit" @click="addTodo">Add todo</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodos } from "@/hooks/use-todos";

export default defineComponent({
  setup(props, ctx) {
    const { todos, draftTodo, addTodo } = useTodos();
    return {
      todos,
      draftTodo,
      addTodo
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
