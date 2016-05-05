<template>
  <div id="app">
      <h1>Lists</h1>
      <div><input v-on:keyup.enter="addList(newTitle),sayhi()" v-model="newTitle" placeholder="Add new list"></input></div>
{{message}}
      <list-container v-for="list in lists" :list-id="$index" :list-title="list.listTitle" :todos="list.todos"></list-container>
  </div>
</template>

<script>
    import { addList, addListNew } from './actions';
    import ListContainer from './ListContainer.vue';

    export default {
      vuex: {
          getters: {
              lists: state => state.lists
          },
          actions: {
              addList,
              addListNew
          }
      },
      data: function() {
        return {
          newTitle:""
        }
      },
      components: {
        ListContainer
      },
      methods: {
        sayhi:function() {
          this.newTitle = '';
        }
      }
    };
</script>
