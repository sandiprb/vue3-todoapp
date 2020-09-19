import { ref, onMounted, watch, reactive, watchEffect } from "vue";
import { useLocalStorage } from "./use-localstorage";

type ITodo = {
  id: number;
  text: string;
};

export function useTodos() {
  const storageKey = "todos";
  const todos = ref<ITodo[]>([]);
  const draftTodo = ref<string>("");
  const storage = useLocalStorage(storageKey);

  const addTodo = () => {
    const newTodo = {
      id: todos.value.length,
      text: draftTodo.value
    };
    todos.value.push(newTodo);
    draftTodo.value = "";
  };

  //   watch(
  //     () => todos.value.length,
  //     () => {
  //       storage.set(JSON.stringify(todos.value));
  //     }
  //   );

  //   onMounted(() => {
  //     let storageTodos = storage.get();
  //     if (storageTodos) {
  //       storageTodos = JSON.parse(storageTodos);
  //       console.log(storageTodos)
  //       todos.value.concat(storageTodos)
  //     }
  //   });

  return {
    todos,
    draftTodo,
    addTodo
  };
}
