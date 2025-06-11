<template>
<div class="">
  <div class="min-h-screen flex items-center justify-center bg-white-100 box-border">
    <div class="flex w-full max-w-6xl bg-white shadow-lg overflow-hidden rounded-lg">
        <!-- Left Image Side -->
        <div class="w-1/2 overflow-hidden hidden md:block">
            <img src="/Signup.png" alt="Signup Visual" class="object-cover p-24 scale-150" />
        </div>

        <!-- Right Form Side -->
        <div class="w-full md:w-1/2 p-10">
            <h1 class="text-3xl font-bold mb-4 mx-4 text-left">FASCO</h1>
            <br/>
            <h2 class="text-xl font-semibold mb-6 mx-4  text-left">Create Account</h2>

            <!-- Social Signup Buttons -->
            <div class="flex justify-center space-x-20 mb-6 mr-6">
                <button class="flex items-center px-4 py-2 border rounded text-sm">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" class="h-5 mr-2" />
                    Sign up with Google
                </button>
                <button class="flex items-center px-4 py-2 border rounded text-sm">
                    <img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" class="h-5 mr-2" />
                    Sign up with Email
                </button>
            </div>

            <div class="text-center text-gray-500 mb-3 mr-3">— OR —</div>

            <!-- Form Fields -->
            <form class="space-y-1 ">
                <div class="flex space-x-4">
                    <div>
                      <input type="text" placeholder="First Name" class="  px-4 py-2 rounded" />
                      <div class="w-full h-[0.5px] bg-gray-400 my-4 ml-4"></div>
                    </div>
                    <div class="ml-5">
                      <input type="text" placeholder="Last Name" class="  px-4 py-2 rounded" />
                      <div class="w-full h-[0.5px] bg-gray-400 my-4 ml-4"></div>
                    </div>
                </div>
                <div class="flex space-x-4">
                  <div>
                    <input type="email" placeholder="Email Address" class=" px-4 py-2 rounded" />
                    <div class="w-full h-[0.5px] bg-gray-400 my-4 ml-4"></div>
                  </div>
                  <div class="ml-5">
                    <input type="tel" placeholder="Contact" class="  px-4 py-2 rounded" />
                    <div class="w-full h-[0.5px] bg-gray-400 my-4 ml-4"></div>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div>
                    <input type="password" placeholder="Password" class=" px-4 py-2 rounded" />
                    <div class="w-full h-[0.5px] bg-gray-400 my-4 ml-4"></div>
                  </div>
                  <div class="ml-5">
                    <input type="password" placeholder="Confirm Password" class="  px-4 py-2 rounded" />
                    <div class="w-full h-[0.5px] bg-gray-400 my-4 ml-4"></div>
                  </div>
                </div>

                <button type="submit" class="w-full  bg-black text-white py-2 rounded shadow hover:bg-gray-800">
                    Create Account
                </button>
            </form>

            <p class="text-center text-sm mt-4">
                Already have an account?
                <a href="#" class="text-blue-500 hover:underline">Login</a>
            </p>

            <br/><br/>
            <p class="text-xs text-gray-800 text-right mt-4">FASCO Terms & Conditions</p>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'Signup',
}
</script>
