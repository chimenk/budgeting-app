import { guid } from '~/plugins/helpers.js'

export const state = () => ({
	accounts: []
})

export const mutations = {
	addAccount (state, payload) {
		let id = guid();
		console.log(state.accounts)
		state.accounts.push({
			id: id,
			balance: payload.balance,
			category: payload.category,
			name: payload.name
		})
		// state.accounts[id] = Object.assign({ id: id }, payload.account);
	}
}
