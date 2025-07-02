<template>
  <!-- Register -->
  <div class="w-full md:w-1/2 p-8 space-y-6">
    <div>
      <h2 class="text-2xl font-bold mb-1">Create your account</h2>
      <p class="text-sm text-gray-400">Setup your account in just few seconds.</p>
    </div>
    <form @submit.prevent="handleUserRegistration">
      <div class="mb-4">
        <span class="block text-sm mb-1" for="email">Register as</span>
        <select
          v-model="user.userType"
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option v-for="option in ACCOUNT_TYPES" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        <FormError :message="errors.userType" />
      </div>
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

      <div class="mb-4">
        <span class="block text-sm mb-1">Confirm Password</span>
        <input
          v-model="user.confirmPassword"
          type="password"
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError :message="errors.confirmPassword" />
      </div>

      <div class="flex items-center mb-4">
        <input
          v-model="user.agreed"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-600"
        />
        <span for="terms" class="ml-2 text-sm text-gray-400">
          I agree to the Tax System’s
          <a href="#" class="text-blue-400 underline">Terms of Use</a> and
          <a href="#" class="text-blue-400 underline">Privacy Policy</a>.
        </span>
      </div>
      <FormError :message="errors.agreed" />
      <br />

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
import { FwbButton, FwbSpinner } from 'flowbite-vue';
import { ACCOUNT_TYPES } from '../../constants/appConstants';
import FormError from '@/components/errors/FormError.vue';
import { useSwal } from '@/utility/useSwal';

const { showSuccess, showError, showConfirm, showMessage } = useSwal();

const loading = ref(false);
const hasError = ref(false);

// signup field
const user = reactive({
  userType: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreed: false,
});

// errors field
const errors = reactive({
  userType: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreed: '',
});

async function handleUserRegistration() {
  // clear the previous errors if any
  Object.keys(errors).forEach((key) => (errors[key] = ''));
  hasError.value = false;
  try {
    await validateInput();
    if (hasError.value) return;
    loading.value = true;
    await showMessage('Check your email for verification');
  } catch (error) {
    console.error('Error registering user:', error);
  } finally {
    loading.value = false;
  }
}

// function to validate user input
async function validateInput() {
  if (!user.userType) {
    errors.userType = 'Registration type is required';
    hasError.value = true;
  }
  if (!user.email) {
    errors.email = 'Email is required';
    hasError.value = true;
  }
  if (!user.password) {
    errors.password = 'Password is required';
    hasError.value = true;
  }
  if (user.password !== user.confirmPassword) {
    errors.confirmPassword = 'Password do not match';
    hasError.value = true;
  }
  if (!user.agreed) {
    errors.agreed = 'Terms of agreement is required';
    hasError.value = true;
  }
}
</script>
