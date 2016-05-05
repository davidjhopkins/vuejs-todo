/*jshint esversion: 6 */

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // Initial state
    state: {
        lists: [],
    },
    // Mutations
    mutations: {
      ADD_LIST (state, title) {
      var randomNumber = Math.random().toString(36).slice(12);
       const newList = {
         listTitle: title,
         todos:[{"name":"item one"},{"name":"item two"}]
       };
       state.lists.push(newList);
       },
       DELETE_NOTE (state, listID) {
        //state.notes.$remove(state.activeNote);
        //state.activeNote = state.notes[0];
        console.log("delete "+listID);
        state.lists.$remove(state.lists[listID]);
      },
      ADD_LIST_NEW (state, title) {
       console.log(title);
     },
    }
});
