<template>
  <header class="bg-blue-600 sticky top-0 z-10">
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <!-- Logo -->
        <RouterLink
          :to="{ name: ROUTE_NAMES.HOME }"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="../../assets/logo.png" class="h-10" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >TaxProMax</span
          >
        </RouterLink>
        <!-- CTA -->
        <div class="flex md:order-2">
          <button
            @click="router.push({ name: ROUTE_NAMES.REGISTER })"
            type="button"
            class="text-white font-medium rounded-lg px-4 py-2 text-center m-2 hover:bg-green-600"
          >
            Register Now
          </button>
          <button
            @click="router.push({ name: ROUTE_NAMES.LOGIN })"
            type="button"
            class="text-white font-medium rounded-lg px-4 py-2 text-center m-2 hover:bg-green-600"
          >
            Login
          </button>
        </div>
        <!-- Nav Items -->
        <div id="navbar-cta">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row"
          >
            <li>
              <RouterLink :to="{ name: ROUTE_NAMES.HOME }" class="block py-2 px-3 md:p-0 text-white"
                >Home</RouterLink
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-3 md:p-0 text-white">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 md:p-0 text-white">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 md:p-0 text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { ROUTE_NAMES } from '../../constants/routeNames';

const router = useRouter();
</script>
