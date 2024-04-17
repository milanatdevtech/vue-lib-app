import AuthService from './../../../service/authService.js';
export default {
    async login({ commit }, credentials) {
        const authService = new AuthService();
        const response = await authService.login('http://localhost:5092/api/Authentication/login', credentials);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
    },

    logout({ commit }) {
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
    },
}