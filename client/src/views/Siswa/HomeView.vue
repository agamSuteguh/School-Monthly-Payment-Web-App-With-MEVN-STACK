<template>
  <header class="">
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <button
          type="button"
          class="inline-flex p-1 text-gray-100 transition-all duration-200 border border-gray-100 lg:hidden focus:bg-gray-100 hover:bg-gray-100"
        >
          <!-- Menu open: "hidden", Menu closed: "block" -->
          <svg
            class="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <!-- Menu open: "block", Menu closed: "hidden" -->
          <svg
            class="hidden w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <section class="">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 class="text-4xl font-bold text-gray-100 sm:text-6xl lg:text-7xl">
            Agam
            <div class="relative inline-flex">
              <span
                class="absolute inset-x-0 bottom-0 border-b-[30px] border-[salmon]"
              ></span>
              <h1
                class="relative text-4xl font-bold text-gray-300 sm:text-6xl lg:text-7xl"
              >
                Book Store.
              </h1>
            </div>
          </h1>

          <p class="mt-8 text-base text-gray-500 sm:text-xl">
            Adalah Perusahaan Yang Bergerak Di Bidang Penjualan Buku Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo at deleniti nulla
            officia numquam, quasi, nobis voluptas soluta cum quis natus
            corporis molestias. Odit facere labore, ratione ab optio harum.
          </p>

          <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
            <a
              href="/"
              title=""
              class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
              role="button"
            >
              Kembali Ke Home
            </a>
          </div>
        </div>

        <div>
          <img
            class="w-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
