<template>
  <!-- Login -->
  <div class="w-full md:w-1/2 p-8 space-y-6">
    <div>
      <h2 class="text-2xl font-bold mb-1">Login to your account</h2>
    </div>
    <form @submit.prevent="handleUserLogin">
      <div class="mb-4">
        <span class="block text-sm mb-1">Email</span>
        <input
          v-model="user.email"
          type="email"
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError :message="errors.email" />
      </div>

      <div class="mb-4">
        <span class="block text-sm mb-1">Password</span>
        <input
          v-model="user.password"
          type="password"
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError :message="errors.password" />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-md font-medium"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import FormError from '@/components/errors/FormError.vue';
import { useSwal } from '@/utility/useSwal';

const { showSuccess, showError, showConfirm } = useSwal();
const loading = ref(false);
const hasError = ref(false);

// login field
const user = reactive({
  email: '',
  password: '',
});

// errors field
const errors = reactive({
  email: '',
  password: '',
});

// function to validate user input
async function validateInput() {
  if (!user.email) {
    errors.email = 'Email is required';
    hasError.value = true;
  }
  if (!user.password) {
    errors.password = 'Password is required';
    hasError.value = true;
  }
}

async function handleUserLogin() {
  // clear the previous errors if any
  Object.keys(errors).forEach((key) => (errors[key] = ''));
  hasError.value = false;
  try {
    await validateInput();
    if (hasError.value) return;
    loading.value = true;
    await showSuccess('Login successfully');
  } catch (error) {
    console.error('Error logging user:', error);
  } finally {
    loading.value = false;
  }
}
</script>
