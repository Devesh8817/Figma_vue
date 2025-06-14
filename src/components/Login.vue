<template>
<div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="bg-white shadow-md rounded-lg flex overflow-hidden w-full max-w-5xl">
        <!-- Left Side Image -->
        <div class="w-1/2 hidden md:block flex-col">
            <img src="../../public/Signin.png" alt="Fashion" class="object-cover w-full h-full" />
        </div>

        <!-- Right Side Form -->
        <div class="w-full md:w-1/2 p-12">
            <h1 class="text-3xl font-bold ml-1 text-gray-800 mb-2">FASCO</h1>
            <p class="text-lg text-gray-600 ml-1 mb-6">Sign In To FASCO</p>

            <!-- Social Buttons -->
            <div class="flex gap-12 ml-1 mb-6">
                <button class="flex items-center gap-1.5 border px-2 py-2 rounded border-blue-400 hover:bg-gray-100 transition text-sm">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
                    Sign up with Google
                </button>
                <button class="flex items-center gap-1.5 border px-2 py-2 rounded border-blue-400 hover:bg-gray-100 transition text-sm">
                    <img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" alt="Email" class="w-5 h-5" />
                    Sign up with Email
                </button>
            </div>

           <div class="text-center text-gray-500 mt-10 mb-3 mr-3">— OR —</div>

            <!-- Form Inputs -->
            <form>
                <div class="mb-4">
                    <input type="email" placeholder="Email" class="w-95 border-b border-gray-400 focus:outline-none focus:border-black py-2" />
                </div>
                <div class="mb-6">
                    <input type="password" placeholder="Password" class="w-95 border-b border-gray-400 focus:outline-none focus:border-black py-2" />
                </div>

                <!-- Buttons -->
                <button type="submit" class="w-90 ml-4 bg-black text-white py-2 rounded-lg cursor-pointer shadow hover:opacity-85 transition">
                    Sign in
                </button>

                <button type="button" class="w-90 ml-4 border mt-3 text-blue-500 border-blue-600 py-2 rounded-lg hover:bg-blue-100 cursor-pointer transition">
                    Register Now
                </button>
            </form>

            <!-- Footer -->
            <div class="text-sm text-right pr-10 mt-3 text-blue-600">
                <a href="#" class="hover:underline">Forgot Password?</a>
            </div>
            <div class="text-right text-sm mt-20 text-black-900">
                <span>FASCO Terms & Conditions</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',

}
</script>
