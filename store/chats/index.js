export const state = () => ({
  active_room: {},
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
  skip: 0,
  chat_msg_loading: false,
  timestart: null,
  timeend: null,
  time: [],

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
  async fetchChatMessage({commit, state}, payload) {

    commit('setActiveRoom', payload)
    commit('setLoading', true)
    // commit('setSearchSubmit', payload)


    let response = await this.$axios.$get('/api/line_message/crud/chatMessage', {
      params: {
        lineId: payload.lineId,
        type: payload.type,
        limit: 25,
      }
    })
    console.log(payload);

    commit('setLoading', false)
    commit('setChatMessage', response.data)
  },
  async fetchNewChatMessage({commit, state}, payload) {

    commit('setChatMsgLoading', true)

    if (state.skip === 0) {
      commit('setSkip', 25)
    } else {
      commit('setSkip', payload.skip + state.skip)
    }
    let response = await this.$axios.$get('/api/line_message/crud/chatMessage', {
      params: {
        lineId: state.active_room.lineId,
        type: state.active_room.type,
        limit: payload.limit,
        skip: state.skip,
        timeend: state.timeend,
        timestart: state.timestart,
      }
    })
    console.log(response);

    commit('setChatMsgLoading', false)
    commit('addMessage', response.data)
  },
  async fetchChatMessageSearch({commit, state}) {
    commit('setSkip', 0);
    commit('setLoading', true)
    // commit('setSearchSubmit', payload)

    let response = await this.$axios.$get('/api/line_message/crud/chatMessage', {
      params: {
        lineId: state.active_room.lineId,
        type: state.active_room.type,
        limit: 25,
        timeend: state.timeend,
        timestart: state.timestart,
      }
    })

    commit('setLoading', false)
    commit('setChatMessage', response.data)
  }


}


export const mutations = {

  setSkip(state, skip) {
    state.skip = skip;
  },
  setLoading(state, boolean) {
    state.chat_loading = boolean;
  },
  setChatMsgLoading(state, boolean) {
    state.chat_msg_loading = boolean;
  },
  setContact(state, contact) {
    state.contact_lists[contact.type] = contact.data.data;
  },
  setActiveRoom(state, payload) {
    state.timestart = null;
    state.timeend = null;
    state.time = [];
    state.skip = 0;
    state.active_room = {'avatar': payload.avatar, 'displayName': payload.displayName, 'type': payload.type, 'lineId': payload.lineId};
  },
  setChatList(state, lists) {
    let collection = this.$collect(lists);

    state.chat_lists = collection.mapWithKeys(
      element => [element.lineId, element]).toArray();

  },
  setChatMessage(state, messages) {
    state.chat_messages = messages;
  },
  addMessage(state, messages) {
    state.chat_messages.push(...messages);
  },
  async sendMessage(state, message_object) {
    state.chat_messages.unshift(message_object);

    let response = await this.$axios.$post('/api/line_message/crud/sendText', {
      lineId: state.active_room.lineId,
      type: state.active_room.type,
      message: message_object.text,
    });
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
  setSearch(state, value) {
    state.search = value;
  },
  setSearchTime(state, time) {
    state.time = time;
    state.timestart = this.$moment(state.time[0]).startOf('day').toISOString();
    state.timeend = this.$moment(state.time[1]).endOf('day').toISOString();
  },

  // console.log(state.time_start);
  // console.log(state.time_end);

  // setAdvanceSearch(state, payload){
  //   this.commit('chats/setActiveRoom', state.payload);
  //   state.advance_search = {'1':payload.searchone, '2':payload.searchtwo}
  // }
}
//
// export const active = {searchInput = document.getElementsByName('searchList')
//
// searchInput.addEventListerner('input', () => {
//   console.log('input event fired');
// })
