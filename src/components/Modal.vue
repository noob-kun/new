<template>
  <div class=" px-32 py-6">
         <!-- modol buttton -->
         <div>
            <div class="px-48 pb-6">
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
                                       <div class="relative z-0">
                                       <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                       <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Plese enter Your title here</label>
                                       </div>
                                       <!-- <input type="text"
                                          class="form-control block
                                                      w-full
                                                      px-3
                                                      py-1.5 
                                                      text-gray-700
                                                      bg-white bg-clip-padding
                                                     
                                                      rounded
                                                      m-0
                                                      outline-dotted
                                                      "
                                                      
                                          id="CourseName" v-model="CourseName" placeholder="Plese Enter Your title Here"> -->
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
                           <div class="mb-2 absolute left-5 top-16">
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
                           <div class="w-full mb-10 bg-gray-200 rounded-full">
                              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full" v-on:click="width" style="width: 0%"> 0%</div>
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
</template>

<script>

</script>