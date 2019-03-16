<template>
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      <div class="navbar-bg"></div>
        <navbar />
        <sidebar />

        
        <!-- Main Content -->
        <div class="main-content">
          <nuxt />
        </div>
        <footer />
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>