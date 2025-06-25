<template>
  <div class="flex min-h-screen flex-col sm:flex-row">
    <!-- Left Image -->
    <div class="w-1/2 h-screen ">
      <img
        src="../../public/OtpPage.jpg"
        alt="OTP Visual"
        class="object-cover w-full h-full"
      />
    </div>

    <!-- Right Form -->
    <div class="w-1/2 flex items-center justify-center bg-white px-10 ">
      <div class="max-w-md w-full">
        <button @click="backButton" class="flex cursor-pointer items-center text-gray-500 mb-4 hover:text-black">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <h2 class="text-2xl font-semibold mb-2">Enter OTP</h2>
        <p class="text-sm text-gray-500 mb-6">
          We have shared a code to your registered email address<br />
          <span class="text-black font-medium">roberfox@example.com</span>
        </p>

        <!-- OTP Boxes -->
        <div class="flex space-x-3 mb-6">
          <input type="text" maxlength="1" class="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="text" maxlength="1" class="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="text" maxlength="1" class="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="text" maxlength="1" class="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="text" maxlength="1" class="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="text" maxlength="1" class="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        <button class="w-full cursor-pointer py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300" @click="ChnagePassword"> 
          Verify
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'OtpPage',
    methods:{
        backButton(){
            this.$router.push('/ForgotPassword');
        },
        ChnagePassword(){
          this.$router.push('/Pass_change_page')
        }
    }
}
</script>
