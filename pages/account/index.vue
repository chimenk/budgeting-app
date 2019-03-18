<template>
	<div class="section">
		<div class="section-header">
			<h1>User List</h1>
			<div class="section-header-breadcrumb">
				<nuxt-link to='/account/createedit'>Create New Account</nuxt-link>
			</div>
		</div>
		<div class="section-body">
			<AccountsList />
		</div>
	</div>
</template>

<script>
import AccountsList from '~/components/AccountsList.vue'

export default {
	components: {
		AccountsList
	}
}
</script>