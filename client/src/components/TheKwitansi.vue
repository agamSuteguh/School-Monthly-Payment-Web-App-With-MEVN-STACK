<template>
    <section>

  <div  v-if="modal" 
    x-show="modalOpen"
    x-transition
    class="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
  >
    <div v-if="spp"

      class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
    >
      <h3 class="text-dark pb-2 text-xl font-bold sm:text-2xl">
        Rincian SPP Siswa
      </h3>
      <span
        class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"
      ></span>
      <p class="text-body-color mb-10 text-base leading-relaxed">
        Nama :  siswas.username <br>
        nis :  siswas.nis <br>
        Jumlah Yang Harus Dibayar:  siswas.spp 
      </p>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-1/2 px-3">
          <button
          @click="modal = !modal"
            class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
          >
            Tutup
          </button>
        </div>
        <div class="w-1/2 px-3">
          <button @click="spp = !spp"
            class="bg-gray-800 border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
          >
            Lakukan Pembayaran
          </button>
        </div>
      </div>
    </div>
    
    <div v-else


class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
>
<h3 class="text-dark pb-2 text-xl font-bold sm:text-2xl">
  Rincian SPP Siswa
</h3>
<span
  class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"
></span>
<p class="text-body-color mb-10 text-base leading-relaxed">
  Namsdsdsdsds
</p>
<div class="-mx-3 flex flex-wrap">
  <div class="w-1/2 px-3">
    <button
    @click="modal = !modal"
      class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
    >
      Tutup
    </button>
  </div>
  <div class="w-1/2 px-3">
    <button
      class="bg-gray-800 border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
    >
      Lakukan Pembayaran
    </button>
  </div>
</div>
</div>
    
  </div>
</section>
</template>
<script>
export default {
    data() {
  	return {
	    modal: true,
      spp: true
  	}
	}
}
console.log
</script>