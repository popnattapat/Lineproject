export const state = () => ({
  dark_mode: false,
})

export const mutations = {
 toggleDarkMode(state){
   state.dark_mode = !state.dark_mode;
 }
}

