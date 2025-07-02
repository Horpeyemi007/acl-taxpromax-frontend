<template>
  <div class="min-h-screen flex items-center justify-center text-white">
    <div
      class="flex flex-col md:flex-row w-full max-w-5xl bg-gray-600 rounded-lg shadow overflow-hidden"
    >
      <!-- Left Form Section -->
      <!-- Signup -->
      <SignupAuth v-if="route.path === '/register'" />
      <!-- Login -->
      <LoginAuth v-else="route.path === '/login'" />
      <!-- Right Illustration Section -->
      <div
        class="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center text-center p-6 text-white"
      >
        <div>
          <h2 class="text-2xl font-bold mb-2">Welcome to TaxProMax</h2>
          <p class="text-sm text-blue-100 max-w-xs mx-auto">
            File, track and manage your taxes securely from one dashboard. Stay compliant and save
            time.
          </p>
          <div class="mt-4">
            <span class="text-xs block"
              >Trusted by over <strong>20,000+ users</strong> nationwide</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router';
import SignupAuth from './SignupAuth.vue';
import LoginAuth from './LoginAuth.vue';

const route = useRoute();
</script>
