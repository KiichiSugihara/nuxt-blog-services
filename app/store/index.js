
// データ格納場所を定義
export const state = () => ({
  isLoggedIn: false,
  user: null
})

// getters で state の初期データの参照
// state データを加工したいときに表示
export const getters = {
  isLoggedIn:(state) => state.isLoggedIn,
  user: (state) => state.user
}

// stateを更新する関数を登録
export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  }
}

//mutationで定義した関数を実行する関数登録
// action 内では非同期処理を行う
export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`/user/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async register({ commit }, { id }) {
    const payload = {}
    payload[id] = { payload }
    await this.$axios.$patch(`/users.json`, payload)
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit ('setUser',{user})
  }
}
