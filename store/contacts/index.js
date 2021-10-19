export const state = () => ({
  contact_lists: {},
  contact_lists_filtered: {},
  active_list: 'user',
  loading: false,
})

export const actions = {
  async fetchContact({commit}, param) {
    commit('setLoading', true)

    let user = {
      'type': 'user',
      'data': await this.$axios.$get('/api/line/user', {params: {'orderBy': 'created_at', 'order': 'desc'}})
    }
    commit('setContact', user);

    let group = {
      'type': 'group',
      'data': await this.$axios.$get('/api/line/group', {params: {'orderBy': 'created_at', 'order': 'desc'}})
    }

    commit('setContact', group);

    commit('setFilteredContact', user.data.data);
  },

  async fetchUser({commit}, param) {
    commit('setLoading', true)

    let user = {
      'type': 'user',
      'data': await this.$axios.$get('/api/line/user', {params: {'orderBy': param.orderBy, 'order': param.order}})
    }
    commit('setContact', user);

    commit('setFilteredContact', user.data.data);
  },

  async fetchGroup({commit}, param) {
    commit('setLoading', true)

    let group = {
      'type': 'group',
      'data': await this.$axios.$get('/api/line/group', {params: {'orderBy': param.orderBy, 'order': param.order}})
    }
    commit('setContact', group);

    commit('setFilteredContact', group.data.data);
  },

}


export const mutations = {

  setContact(state, contact) {
    // console.log();
    let temp = {}
    temp[contact.type] = contact.data.data;

    console.log(temp);

    state.contact_lists = {...state.contact_lists, ...temp}
    state.loading = false;
  },

  setFilteredContact(state, contact) {
    state.contact_lists_filtered = contact;
  },

  changeActiveList(state, type) {
    state.active_list = type;

    this.commit('contacts/setFilteredContact', state.contact_lists[type]);
  },

  setLoading(state, loading) {
    state.loading = loading;
  }
}
