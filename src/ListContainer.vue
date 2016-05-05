<template>
  <div class="list-container">
    <h1> {{listTitle}}</h1>
    <button @click="deleteList(listId)">Delete</button>
    <p v-for="todo in todos">{{todo.name}}</p>
  </div>
</template>

<script>
import {  deleteList, } from './actions'

export default {
  props: ['listId','listTitle', 'todos'],
  vuex: {
    getters: {
    },
    actions: {
      deleteList
    }
  }
}

</script>

<style>
.list-container {
width:300px;
height:500px;
border:1px solid black;
float:left;
padding:10px;
margin:10px;
}
</style>
