<template>
    
        <div class="flex items-center justify-center bg-slate-500 ">
            <div class="px-8 py-6  text-left bg-white shadow-xl rounded-xl m-11 w-2/5">
                <h3 class="text-2xl font-bold text-center">Login to your account</h3>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <label for="" class="block">Enter Email</label>
                                    <input type="text" placeholder="Email"
                                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                        <div class="mt-4">
                            <label for="" class="block">Enter Password</label>
                                    <input type="password" placeholder="Password"
                                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                        <div class="flex justify-center">
                            <button class="px-28 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-gray-800 block">Login</button>
                        </div>
                        <div class=""> Don't Have Account?
                                <a href="#" class="text-blue-600">Sign in </a>
                                <p></p>
                                <a href="#" class="text-sm text-blue-600 hover:underline ">Forgot password?</a>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>

</template>