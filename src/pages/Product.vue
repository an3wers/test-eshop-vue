<template>
  <div id="product">
    <div class="container">
      <!-- Breadcrumbs -->
      
      <!-- # Breadcrumbs -->

      <!-- Product body -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 my-8">
        <div class="product-image w-full h-full">
          <img src="@/assets/products/9.jpg" alt="" />
        </div>
        <div class="product-body">
          <h1 class="product-body__title text-xl mb-2">Urban raincoat gray</h1>
          <div class="product-body__price text-xl font-bold">$ 510.00</div>
          <!-- Selectors -->
          <div
            class="product-body__selectors selectors flex flex-col space-y-3 my-6"
          >
            <div class="selectors__colors">
              <div class="selectors__title text-slate-500 my-2">
                Select color
              </div>
              <div class="selectors__body">
                <div class="selectors__params flex space-x-2">
                  <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                  <label
                    class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer ring ring-offset-1 focus:outline-none ring-gray-400"
                  >
                    <input
                      type="radio"
                      name="color-choice"
                      value="White"
                      class="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <p id="color-choice-0-label" class="sr-only">White</p>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-gray-400 border border-black border-opacity-10 rounded-full"
                    ></span>
                  </label>
                  <label
                    class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
                  >
                    <input
                      type="radio"
                      name="color-choice"
                      value="White"
                      class="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <p id="color-choice-0-label" class="sr-only">White</p>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-black border border-black border-opacity-10 rounded-full"
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="selectors__sizes">
              <div class="selectors__title text-slate-500 my-2">
                Select size
              </div>
              <div class="selectors__body">
                <div class="flex space-x-2">
                  <select class="form-select w-80 rounded-md border-slate-300 focus:border-slate-400 focus:ring-0" name="size">
                    <option selected disabled value="default">
                      Select size
                    </option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">Xl</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- # Selectors -->
          <!-- Button -->
          <div class="product-body__button my-6">
            <button
              type="submit"
              class="w-80 flex items-center uppercase justify-center px-8 py-2 border border-transparent text-base rounded-md text-white bg-slate-900 hover:bg-slate-800"
            >
              Select size
            </button>
          </div>
          <!-- # Button -->

          <!-- Description -->
          <div class="product-body__description description my-6">
            <div class="description__title text-slate-500 my-2">
              Description
            </div>
            <div class="description__body">
              <p>Raincoat of a straight silhouette made of waterproof fabric with a high collar and hidden hood. The drawstring on the hood allows you to adjust the tightness of its fit, which provides additional protection from wind and rain. The model has a zipper and two side pockets. Another pocket is located inside the raincoat. </p>
            </div>
          </div>
          <!-- # Description -->
        </div>
      </div>
      <!-- # Product body -->
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
    // Нужен рефакторинг, настройки роутера
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
}
</script>
