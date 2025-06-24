<template>
<div class="relative h-screen w-screen overflow-hidden">
    <!-- Background Image with Blur -->
    <img
      src="../../public/Blur_image.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover blur-md"
    />

    <!-- Overlay (dark) -->
    <div class="absolute inset-0 bg-black/30"></div>
    <!-- Modal box on blurred background -->
    <div class="relative z-10 flex items-center justify-center h-full">
        <div class="bg-white p-8 rounded-lg shadow-lg w-[350px] text-center">

            <!-- Success Tick Icon -->
            <div class="flex items-center justify-center mb-6">
                <div class="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
                    <div class="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                        <div class="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                            <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                <!-- Tick Icon -->
                                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Message -->
            <h2 class="text-xl font-semibold mb-2">
                Password Changed Successfully
            </h2>
            <p class="text-sm text-gray-600 mb-6">
                Your password has been updated successfully
            </p>

            <!-- Button -->
            <button class="w-full cursor-pointer bg-black text-white py-3 rounded-md hover:bg-gray-800 transition" @click="goToLogin">
                Back to Login
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Pass_change_page',
    methods: {
        goToLogin() {
            this.$router.push('/Login');
            // alert("Redirect to login page");
        }
    }

}
</script>
