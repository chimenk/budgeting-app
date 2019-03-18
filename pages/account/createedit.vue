<template>
	<div class="section">
		<div class="section-header">
			<h1>Create new Account</h1>
			<div class="section-header-breadcrumb">
				<nuxt-link to='/account'>Return to Account list</nuxt-link>
			</div>
		</div>
		<div class="section-body">
			<div class="row">
				<div class="col-12">
					<form @submit.prevent="saveNewAccount">
					<div class="card">
						<div class="card-body">
							<div class="form-row">
								<div class="form-group col-md-6">
									<label>Name</label>
									<input type="text" class="form-control" placeholder="name" v-model="newAccount.name">
								</div>
								<div class="form-group col-md-6">
									<label>Category</label>
									<select class="form-control" v-model="newAccount.category">
										<option>Choose One</option>
										<option v-for="value, key in categories" :value="key">{{ value }}</option>
									</select>
								</div>
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label>Balance</label>
									<input type="text" class="form-control" v-model="newAccount.balance">
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-primary">Create</button>
							<nuxt-link to='/account' class="btn btn-danger">Cancel</nuxt-link>
						</div>
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { CATEGORIES } from '~/plugins/const.js'

export default {
	name: 'create-edit-account',

	data: () => {
		return {
			categories: CATEGORIES,
			newAccount: {}
		}
	},

	methods: {
		...mapMutations([
			'addAccount'
		]),

		saveNewAccount () {
			this.$store.commit('accounts/addAccount',this.newAccount)
		}
	}
}
</script>
