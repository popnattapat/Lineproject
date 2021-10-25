export const state = () => ({
  active_room: {},
  // read_three_bar: [],
  chat_contact: [],
  chat_data: [],
  chat_lists: [],
  current_chat_lists: [],
  list_filtered: [],
  chat_loading: false,
  chat_messages: null,
  is_pending: false,
  pending: {},
  search_list: [],
  search: '',

})

export const actions = {
  async fetchChatList({commit}) {

    let response = await this.$axios.$get('/api/line_message/crud/chatList', {
      params: {
        limit: 1000,
      }
    })

    commit('setChatList', response.data)
    commit('setCurrentList', response.data)
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
    console.log(payload);

    commit('setLoading', false)
    commit('setChatMessage', response.data)
    // commit('setReadThreeBar', response.data)

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
    state.active_room = {'avatar': payload.avatar, 'displayName': payload.displayName, 'type': payload.type};
  },
  setChatList(state, lists) {
    let collection = this.$collect(lists);

    state.chat_lists = collection.mapWithKeys(
      element => [element.lineId, element]).toArray();

  },
  setChatMessage(state, messages) {
    state.chat_messages = messages;
  },
  // setReadThreeBar(state, type) {
  //   state.read.three.bar = type;
  //   this.commit('chats/changeMessageType', type);
  // },
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
  setCurrentList(state, list) {
    state.current_chat_lists = list;
    this.commit('chats/setFilteredList', list);

  },
  changeMessageType(state, type) {
    if (type === 'all') {
      this.commit('chats/setCurrentList', state.chat_lists);
    } else {
      this.commit('chats/setCurrentList', state.chat_lists.filter(chat => {
        return chat.type.toLowerCase().includes(type)
      }));
    }
    this.commit('chats/setFilteredList', state.current_chat_lists.filter(chat => {
      return chat.displayName.toLowerCase().includes(state.search.toLowerCase())
    }));
    state.change_message = type;

  },
  setSearch(state,value){
    state.search = value;
  },
}
//
// export const active = {searchInput = document.getElementsByName('searchList')
//
// searchInput.addEventListerner('input', () => {
//   console.log('input event fired');
// })
