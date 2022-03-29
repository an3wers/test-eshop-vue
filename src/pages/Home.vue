<template>
  <div id="home">
    <!-- Первый экран -->
    <div
      style="background-image: url('/assets/hero.jpg')"
      class="hero bg-cover bg-no-repeat flex justify-center items-center"
    >
      <div class="container">
        <div class="hero__body flex flex-col justify-center space-y-4">
          <div class="hero__title text-center text-4xl uppercase">
            New spring collection
          </div>
          <div class="hero__button text-center">
            <a class="underline inline-flex" href="#">
              <span>Shop the collection</span>
              <img
                src="@/assets/icons/arrow-narrow-right.svg"
                class="w-6 ml-1"
                alt="arrow-right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- # Первый экран -->

    <div class="container">
      <!-- Продукты -->
      <div class="products-section my-24">
        <h2 class="text-3xl leading-normal uppercase mb-10 text-black">New collection</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:grid-cols-4">
            <router-link to="/shop/category/product">
              <div class="section-product">
                  <div class="section-product__img mb-2 w-full">
                      <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                  </div>
                  <div class="section-product__title">Urban raincoat gray</div>
                  <div class="section-product__price">$510.00</div>
              </div>
            </router-link>
            

            <div class="section-product">
                <div class="section-product__img mb-2 w-full">
                    <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                </div>
                <div class="section-product__title">Urban raincoat gray</div>
                <div class="section-product__price">$510.00</div>
            </div>
            <div class="section-product">
                <div class="section-product__img mb-2 w-full">
                    <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                </div>
                <div class="section-product__title">Urban raincoat gray</div>
                <div class="section-product__price">$510.00</div>
            </div>
            <div class="section-product">
                <div class="section-product__img mb-2 w-full">
                    <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                </div>
                <div class="section-product__title">Urban raincoat gray</div>
                <div class="section-product__price">$510.00</div>
            </div>
        </div>
      </div>
      <!-- # Продукты -->
    </div>
  </div>
</template>
