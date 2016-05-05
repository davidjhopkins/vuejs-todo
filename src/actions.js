/*jshint esversion: 6 */

export const addList = ({ dispatch }, title) => dispatch('ADD_LIST', title);

export const addListNew = ({ dispatch }, title) => dispatch('ADD_LIST_NEW', title);

export const deleteList = ({ dispatch }, listID) => dispatch('DELETE_NOTE', listID);
