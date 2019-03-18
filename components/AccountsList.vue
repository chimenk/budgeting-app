<template>
	<table class="table">
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Category</th>
				<th>Balance</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="account in accounts">
				<td>{{ account.id }}</td>
				<td>{{ account.name }}</td>
				<td>{{ categories[account.category] }}</td>
				<td>{{ account.balance }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { CATEGORIES } from '~/plugins/const.js'

export default {
	name: 'AccountsList',

	data () {
		return {
			categories: CATEGORIES
		}
	},

	computed: {
		accounts() {
			return this.$store.state.accounts.accounts
		}
	}
}
</script>