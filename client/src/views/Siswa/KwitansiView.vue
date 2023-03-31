
<script setup>
import api from "@/helpers/api";
import { onBeforeMount, ref } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "vuex";



const store = useStore();
const route = useRoute();

const transaksi = ref({});
console.log(transaksi)
onBeforeMount(async () => {
  const res = await api.get(`transaksi/kwitansi/${route.params.id}`);
  transaksi.value = res.data;
});




</script>
<template>
<!-- component -->
<!-- component -->
<!-- component -->
<section class="py-20 bg-black">
 <div class="max-w-5xl mx-auto py-16 bg-white">
  <article class="overflow-hidden">
   <div class="bg-[white] rounded-b-md">
    <div class="p-9">
     <div class="space-y-6 text-slate-700">
     

      <p class="text-xl font-extrabold tracking-tight uppercase font-body">
       SMK BINA MANDIRI MULTI MEDIA
      </p>
     </div>
    </div>
    <div class="p-9">
     <div class="flex w-full">
      <div class="grid grid-cols-4 gap-12">
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">
         Nama Siswa:
        </p>
        <p>{{transaksi.siswa}}</p>
        
      
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">nama admin:</p>
        <p>{{transaksi.admin}}</p>
       
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">bulan</p>
        <p>{{  transaksi.createdAt }}</p>

       
       </div>
      </div>
     </div>
    </div>

    <div class="p-9">
     <div class="flex flex-col mx-0 mt-8">
      <table class="min-w-full divide-y divide-slate-500">
       <thead>
        <tr>
         <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
          Bayar
         </th>
       
         <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
          Jumlah Pembayaran
         </th>
      
        </tr>
       </thead>
       <tbody>
        <tr class="border-b border-slate-200">
         <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
          <div class="font-medium text-slate-700">SPP bulan {{transaksi.createdAt}}</div>
          <div class="mt-0.5 text-slate-500 sm:hidden">
        
          </div>
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
         Rp. {{ transaksi.jumlahPembayaran }}
         </td>
       
                                             
        </tr>
        <br>
        <br>
        <br><br><br><br><br>
        <button onclick="window.print();
"
                                                        class="px-5 py-3 rounded-xl text-sm font-medium text-gray-100 bg-pink-800 outline-none border text-gray-300 focus:outline-none bg-gray-100 m-1 hover:m-0 focus:m-0 border text-pink-600 hover: bg-gray-100 border-4 focus:border-4 hover:border-800 hover:text-pink-800 focus:border-pink-200 active:border-pink-900 active:text-grey-900 transition-all">
                                                        <a class="text-gray-100">Kwitansi</a>
                                                        <i
                                                            class="mdi mdi-circle-outline ml-2 text-xl align-middle leading-none"></i>
                                                    </button>
      
        <!-- Here you can write more products/tasks that you want to charge for-->
       </tbody>
    
      </table>
     </div>
    </div>

    <div class="mt-48 p-9">
     <div class="border-t pt-9 border-slate-200">
      <div class="text-sm font-light text-slate-700">
       <p>
        Kwittansi ini di keluarkan oleh Bm3
       </p>
      </div>
     </div>
    </div>
   </div>
  </article>
 </div>
</section>


</template>