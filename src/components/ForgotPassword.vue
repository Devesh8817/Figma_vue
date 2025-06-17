<template>
<div class="min-h-screen flex grid-cols-1 md:grid-cols-2">
    <!-- Left Image Section -->
    <div class="hidden md:block w-[670px] h-[1024px] object-cover ">
        <div class="w-[680px] h-[1024px] overflow-hidden">
            <img src="../../public/ForgotPassword.jpg" alt="Fashion" class="items-center bg-cover overflow-hidden object-contain" />
        </div>
    </div>

    <!-- Right Form Section -->
    <div class="flex items-center p-8">
        <div class="max-w-md w-full">
            <!-- Back Button -->
            <button @click="backbutton" class="flex items-center cursor-pointer text-sm text-gray-500 mb-4 hover:underline">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </button>

            <!-- Heading -->
            <h2 class="text-2xl font-bold mb-2">Forgot Password</h2>
            <p class="text-gray-500 mb-6">
                Enter your registered email address, we’ll send you a code to reset your password.
            </p>

            <!-- Email Input -->
            <label class="block mb-4">
                <span class="text-sm text-gray-700">Email Address</span>
                <input type="email" placeholder="roberto@example.com" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
            </label>

            <!-- Send OTP Button -->
            <button class="w-full cursor-pointer bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Send OTP
            </button>
        </div>
    </div>
</div>





</template>

<script>
export default {
    name: 'ForgotPassword',
    methods: {
        backbutton() {
            this.$router.push('/Login');
        }
    }
};
</script>
