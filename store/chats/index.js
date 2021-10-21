export const state = () => ({
  active_room: {},
  call_data: [],
  chat_contact: [],
  chat_data: [],
  chat_lists: [],
  chat_loading: false,
  chat_messages: null,
  is_pending: false,
  pending: {},
  search_list: [],
  list_filtered: [],
})

export const actions = {
  async fetchChatList({commit}) {
    let response = await this.$axios.$get('/api/line_message/crud/chatList', {
      params: {
        limit: 1000,
      }
    })

    commit('setChatList', response.data)
    commit('setFilteredList', response.data)
  },
  async fetchChatMessage({commit}, payload) {
    commit('setActiveRoom', payload)
    commit('setLoading', true)
    let response = await this.$axios.$get('/api/line_message/crud/chatMessage', {
      params: {
        lineId: payload.lineId,
        type: payload.type,
      }
    })

    commit('setLoading', false)
    commit('setChatMessage', response.data)
    commit('setCall', response.data)

  },
}


export const mutations = {

  setLoading(state, boolean) {
    state.chat_loading = boolean;
  },
  setContact(state, contact) {
    state.contact_lists[contact.type] = contact.data.data;
  },
  setActiveRoom(state, payload) {
    state.active_room = {'avatar': payload.avatar, 'displayName': payload.displayName};
  },
  setChatList(state, lists) {
    let collection = this.$collect(lists);

    state.chat_lists = collection.mapWithKeys(
      element => [element.lineId, element]).toArray();

  },
  setChatMessage(state, messages) {
    state.chat_messages = messages;
  },
  setCall(state, call) {
    state.call_data = call;
  },
  sendMessage(state, message_object) {
    state.chat_messages.unshift(message_object);

    // axios.post('/line_message/' + payload.id,)
    //   .then(response => {
    //     let data = response.data;
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  setPending(state, payload) {
    state.is_pending = true;
    state.pending = payload;
  },

  setFilteredList(state, list) {
    state.list_filtered = list;
  },

}
//
// export const active = {searchInput = document.getElementsByName('searchList')
//
// searchInput.addEventListerner('input', () => {
//   console.log('input event fired');
// })
