<script>

import Modal from '../components/Modal.vue'
import NoDownload from '../components/NoDownload.vue'
import BreadCrumbs from '../components/BreadCrumbs.vue'
// import dropdown from '../components/dropdown.vue'
import RecentCat from '../components/RecentCat.vue'
import { useVuelidate } from '@vuelidate/core'
import dropdown from '../components/dropdown.vue'
import { required } from '@vuelidate/validators'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
   components: { Datepicker , Modal,NoDownload ,BreadCrumbs,RecentCat},
   data() {
      return {
         date: null,
      };
   },
   name: 'UploadCourseForm',
   data: function () {
      return {
         CourseName: '',
         Category: '',
         confirm: '',
      }
   },
   validations: {
      CourseName: { required },
      Category: { required },
      confirm: { required },
   },
   methods: {
      submit: function () {
         this.$v.$touch();
         if (this.$v.$pendding || this.$v.$error) return;

         alert('Data Submit')

      }
   }
}

</script>

<template>

   <navigation />
   <dropdown />
   <div class="p-14">
      <Modal />

      <!-- <NoDownload /> -->

      <RecentCat />

      <div>
         <!-- <BreadCrumbs /> -->

         <!-- <div class="flex flex-row items-center px-8 py-6">

            <div class=" px-10 pb-6 ">

               <button type="button"
                  class="inline-block px-6  py-2.5 ml-2 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10 text-left float-left">
                        <path stroke-linecap="round" stroke-linejoin="round"
                           d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                     </svg>
                  </span>Daily Megazine 2021
               </button>
               <button type="button"
                  class="inline-block px-6 clear-both  py-2.5 ml-2 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10 text-left float-left">
                        <path stroke-linecap="round" stroke-linejoin="round"
                           d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                     </svg>
                  </span>Daily Megazine 2022
               </button>

            </div>
         </div>
         <div class="flex flex-row items-center px-12 py-6 pl-3">
            <div class=" px-12 py-6">
               <div class="text-xl p-1 m-1 font-bold ">Categories</div>
               <button type="button"
                  class="inline-block px-6  py-2 ml-8 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-10 h-10 float-left">
                        <path
                           d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                     </svg>

                  </span>Weekly Magazine
               </button>
               <button type="button"
                  class="inline-block px-6 clear-both  py-2 ml-8 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-10 h-10 float-left">
                        <path
                           d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                     </svg>

                  </span>Daily Quiz Compilation
               </button>
               <button type="button"
                  class="inline-block px-6 clear-both  py-2 ml-8 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-10 h-10 float-left">
                        <path
                           d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                     </svg>

                  </span>Current Affairs PDF
               </button>
               <button type="button"
                  class="inline-block px-6  clear-both  py-2 ml-8 mt-4 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-10 h-10 float-left">
                        <path
                           d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                     </svg>

                  </span>The Editorial PDF
               </button>
            </div>
         </div> -->
      </div>
   </div>

</template>



