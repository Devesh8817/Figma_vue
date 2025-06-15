<template>
<div class="flex h-screen">
    <!-- Left Image Section -->
    <div class="w-1/2 hidden overflow-hidden md:block relative flex-col ">
        <img src="../../public/Signup.jpg" alt="Signup" class=" object-cover items-center w-[860px] h-[1024px]" />
        <!-- Logo on image -->
        <div class="absolute top-6 left-6 flex items-center space-x-2">
            <h1 class="text-black text-2xl font-bold px-8 py-8">Krist</h1>
        </div>
    </div>

    <!-- Right Login Form -->
    <div class="w-full md:w-1/2 flex items-center justify-center px-4">
        <div class="max-w-md w-full space-y-8">

            <!-- Welcome Message -->
            <div>
                <h2 class="mt-6 text-2xl font-bold text-gray-900">
                    Create New Account
                </h2>
                <p class="mt-2 text-sm text-gray-500">Please enter details</p>
            </div>

            <!-- Form -->
            <form class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm space-y-4">
                    <label for="First Name" class="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                    <input type="F_name" id="F_name" name="F_name" placeholder="Enter your First Name" class="w-full px-4 py-2 border border-black-900 rounded-lg focus:outline-none ring ring-black-500" />

                    <label for="Last Name" class="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="L_name" id="L_name" name="L_name" placeholder="Enter your Last Name" class="w-full px-4 py-2 border border-black-900 rounded-lg focus:outline-none ring ring-black-500" />

                    <label for="email" class="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full px-4 py-2 border border-black-900 rounded-lg focus:outline-none ring ring-black-500" />

                    <label for="password" class="block text-xs font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" class="w-full px-4 py-2 border border-black-900 rounded-md focus:outline-none ring ring-black-500" /> </div>

                <div class="flex items-center justify-between text-sm">
                    <label class="flex items-center space-x-2 text-black font-medium">
                        <input type="checkbox" class="form-checkbox " />
                        <span>I agree to the <b>Terms & Conditions</b> </span>
                    </label>
                </div>

                <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg bg-black text-white hover:bg-gray-800 cursor-pointer">
                        Signup
                    </button>
                </div>

                <div class="mt-6 text-center text-sm text-gray-600">
                    Already have an account? Please
                    <a href="/Login" class="font-semibold text-blue-600 hover:text-blue-800">
                        Login
                    </a>
                </div>
            </form>

        </div>
    </div>
</div>
</template>
