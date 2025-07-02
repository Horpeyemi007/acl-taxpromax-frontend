<template>
  <div class="">
    <!-- header content -->
    <Header />
    <!-- main page content -->
    <main class="">
      <RouterView />
    </main>
    <!-- footer content -->
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap');
</style>
