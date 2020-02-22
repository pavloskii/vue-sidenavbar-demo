<template>
  <div id="app">
    <VueSidenavbar>
      <VueSidenavbarItem label="HOME" icon="fas fa-home" to="/" />
      <VueSidenavbarItem
        label="PROFILE"
        icon="fas fa-address-card"
        to="/profile"
      />
      <VueSidenavbarItem label="PHOTOS" icon="fas fa-image" to="/photos" />
      <VueSidenavbarItem
        label="LOGOUT"
        icon="fas fa-sign-out-alt"
        tag="a"
        @click="logout"
      />
    </VueSidenavbar>

    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { VueSidenavbar, VueSidenavbarItem } from "vue-sidenavbar";
export default {
  methods: {
    logout() {
      event.preventDefault();
      alert("You can not logout, I will take you to home page!!!");
      this.$router.push("/");
    }
  },
  components: {
    VueSidenavbar,
    VueSidenavbarItem
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  background-color: #29333f;
}

.active {
  background-color: #29333f !important;
}

main {
  padding: 16px;
  margin: 60px auto;
  max-width: 900px;
}

.card {
  background-color: #445871;
  padding: 2px 16px;
  color: white;
}

.card img {
  max-width: 100%;
}

@media (max-width: 640px) {
  main {
    margin: 80px 5px 5px 5px;
  }
}

a {
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
