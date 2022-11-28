<template>
   <dropdown/>
   <div class="p-14">
      <div class=" px-36 py-6">
         <!-- modol buttton -->
         <div>
            <div class="px-40 pb-6">
               <button type="button"
                  class="inline-block px-6  py-2.5 mb-2 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl">+ Upload a File</button>
            </div>
         </div>
         <!-- modol -->
         <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
               <div
                  class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div
                     class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">

                     <button type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <!-- main div -->
                  <div>
                  <form action="" v-on:submit.prevent="submit">
                  <div class="flex relative justify-center items-center modal-body space-x-2  ">
                     <div class=" ">
                        <div class="">
                           <!-- form -->
                           <div class="absolute top-3 left-6 w-96">
                              <div class="">
                                 <form>
                                    <div class="form-group">
                                       <input type="text"
                                          class="form-control block
                                                      w-full
                                                      px-3
                                                      py-1.5 
                                                      text-gray-700
                                                      bg-white bg-clip-padding
                                                      border border-solid border-gray-300
                                                      rounded
                                                      m-0
                                                      outline-[0px]"
                                                      
                                          id="CourseName" v-model="CourseName" placeholder="Plese Enter Your title Here">
                                    </div>
                                 </form>
                              </div>
                           </div>
                           <!-- select -->
                           <div class=" absolute right-6 top-3 ">
                              <div class="">
                                 <div class="mb-3 ">
                                    <select class="form-select appearance-none
                                          block
                                          w-46
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding bg-no-repeat
                                          border border-solid border-gray-300
                                          rounded
                                          transition
                                          ease-in-out
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       aria-label="Default select example" v-model="Category">
                                       <option selected>Category</option>
                                       <option value="1">Weekly Magazine</option>
                                       <option value="2">Daily quiz Compilation</option>
                                       <option value="3">Current Affairs PDF</option>
                                       <option value="4">Create a new category</option>
                                    </select>
                                 </div>
                              </div>

                           </div>
                           <!-- date -->
                           <div class="mb-2 absolute left-6 top-14">
                              <Datepicker v-model="date"></Datepicker>
                           </div>
                           <!-- file input -->
                           
                           <div class="max-w-xl">
                              <label
                                 class="flex justify-center w-full h-32 transition mt-32 px-32 py-52 mb-1 bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                 <span class="flex items-center space-x-2">
                                    
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                       stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 
                                    0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                    </span>
                                    <span class="font-medium text-gray-600">
                                       Click to Upload File
                                       <span class="text-blue-600 underline"></span>
                                    </span>
                                 </span>
                                 <input type="file" name="file_upload" class="hidden ">
                              </label>
                           </div>
                           <div class="w-full bg-gray-200 rounded-full">
                              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full" style="width: 25%"> 25%</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                     <button type="button"
                        class="inline-block px-6 py-2.5 bg-gray-200 text-black font-medium 
                        text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 
                        hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0  
                         active:shadow-lg transition duration-150 ease-in-out mr-1" >
                        Confirm
                     </button>
                     <button type="button"
                        class="inline-block px-6 py-2.5 bg-gray-200 text-black font-medium text-xs 
                        leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg 
                        focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg 
                        transition duration-150 ease-in-out"
                        data-bs-dismiss="modal">
                        Close
                     </button>

                  </div>
                  </form>
               </div>
               </div>
            </div>
         </div>
      </div>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
         <!-- <div
            class=" flex flex-col bg-white px-6 py-64 items-center w-auto  border-2 border-dashed border-[#C7C7C7] rounded">
            <span class="text-2xl mb-2 text-black font-semibold">Oops !!</span>
            <p class="mb-2 font-light">No Downloads Added Yet</p>
            <p class="mb-2 ">Lets Start <span class=" text-[#3E68FF]">+upload New File</span></p>
         </div> -->
      </div>
      <div>
         <!-- recent uploads categories -->
         <div class="flex flex-row items-center px-8 py-6">
            <div class=" px-10 pb-6 " >
               <div class="text-xl p-1 m-1 font-bold ">Recent Uploads</div>
                  <button type="button"
                  class="inline-block px-6  py-2.5 ml-2 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-left float-left">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  </span>Daily Megazine 12 Sep-17 Sep 2022 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                  </button> 
                  <button type="button"
                  class="inline-block px-6 clear-both  py-2.5 ml-2 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-left float-left">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  </span>Daily Megazine 12 Sep-17 Sep 2022 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                  </button> 
                                    <button type="button"
                                    class="inline-block px-6 clear-both  py-2.5 ml-2 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-left float-left">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  </span>Daily Megazine 12 Sep-17 Sep 2022 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                  </button> 
                                    <button type="button"
                                    class="inline-block px-6  clear-both  py-2.5 ml-2 mt-4 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-left float-left">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  </span>Daily Megazine 12 Sep-17 Sep 2022  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                  </button> 
            </div>
         </div>
         <div class="flex flex-row items-center px-12 py-6 pl-3">
            <div class=" px-12 py-6" >
               <div class="text-xl p-1 m-1 font-bold ">Categories</div>
                  <button type="button"
                  class="inline-block px-6  py-2 ml-8 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 float-left">
  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
</svg>

                  </span>Weekly Magazine 
                  </button> 
                  <button type="button"
                  class="inline-block px-6 clear-both  py-2 ml-8 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 float-left">
  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
</svg>

                  </span>Daily Quiz Compilation
                  </button> 
                                    <button type="button"
                                    class="inline-block px-6 clear-both  py-2 ml-8 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 float-left">
  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
</svg>

                  </span>Current Affairs PDF 
                  </button> 
                                    <button type="button"
                                    class="inline-block px-6  clear-both  py-2 ml-8 mt-4 bg-[#D9D9D9] text-black font-semibold text-2xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg hover:text-white"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalXl"><span class="pl-"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 float-left">
  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
</svg>

                  </span>The Editorial PDF 
                  </button> 
            </div>
         </div>
         
      </div>
   </div>
   
</template>



<script>
import { useVuelidate } from '@vuelidate/core'
import dropdown from '../components/dropdown.vue'
import { required } from '@vuelidate/validators'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
   components: { Datepicker },
   data() {
      return {
         date: null,
      };
   },
   name: 'UploadCourseForm',
   data:function() {
      return {
         CourseName:'',
         Category:'',
         confirm:'',
      }
   },
   validations: {
      CourseName: {required},
      Category: {required},
      confirm: {required},
   },
   methods: {
      submit: function() {
         this.$v.$touch();
         if (this.$v.$pendding || this.$v.$error) return;

         alert('Data Submit')

      }
   }
}

</script>