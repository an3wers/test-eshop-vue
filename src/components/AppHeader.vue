<template>
  <nav class="bg-slate-100 py-4">

    <div class="container">
      <div class="nav flex justify-between">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo-eshop.svg" alt="">
          </router-link>
        </div>
        <div class="flex space-x-6">
          <router-link class="no-underline hover:underline" to="/">Home</router-link>
           <!-- Dropdown menu -->
          <a class="no-underline hover:underline" href="#">Shop</a>
          <!-- # Dropdown menu -->
          <router-link class="no-underline hover:underline" to="/about">About</router-link>
        </div>
        <div class="flex space-x-4">
          <a href="#">
            <img src="@/assets/icons/user.svg" class=" w-6" alt="profile">
          </a>
          <a href="#">
            <img src="@/assets/icons/search.svg" class=" w-6" alt="search">
          </a>
          <div class="divaider"></div>
          <a class="header-cart flex items-center" href="@">
            <img src="@/assets/icons/shopping-cart.svg" class=" w-6 mr-1" alt="">
            <span class="header-cart-counter">0</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
