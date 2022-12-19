
<script setup>
import api from "@/helpers/api";
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();



const transaksi = computed(() => store.state.transaksi.transaksi);


onBeforeMount(() => {
    store.dispatch("transaksi/fetchTransaksi");

});

</script>



<template>
    <!-- component -->

    <body class="antialiased font-sans text-gray-100 bg-gray-900">
        <div class="container mx-auto  px-4 sm:px-8">
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Data Transaksi</h2>
  
                </div>
                <div class="my-2 flex sm:flex-row flex-col">
                    <div class="flex flex-row mb-1 sm:mb-0">
                        <div class="relative">

                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative">

                        </div>
                    </div>

                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Nama Siswa
                                    </th>
                              
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Waktu Transaksi
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Jumlah Pembayaran
                                    </th>

                            

                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="transaksis in transaksi" :key="transaksis._id">
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    :src="`https://avatars.dicebear.com/api/initials/${transaksis.siswa}.svg`"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">

                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm ">
                                        <p class="text-lg text-gray-900 underline decoration-sky-500">{{ transaksis.siswa
                                        }}</p>

                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-lg text-gray-900 underline decoration-sky-500">{{ transaksis.createdAt }}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-lg text-gray-900 underline decoration-sky-500">RP.{{ transaksis.jumlahPembayaran
                                        }}
                                        </p>
                                    </td>
                                  
                                  
                              
                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">

                            <div class="inline-flex mt-2 xs:mt-0">

                            </div>
                        </div>
                    </div>
                </div>
                <hr style=" border: 95px solid transparent;border-radius: 100px;">
            </div>
        </div>

    </body>
</template>