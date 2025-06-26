<template>
<header class="w-full bg-white ">
    <div class="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-gray-900 flex items-center gap-1">
            <span>Krist</span>
        </div>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex ml-4 space-x-6 text-gray-700 text-sm font-medium">
            <a href="#" class="hover:text-black">Home</a>
            <div class="relative group">
                <button class="hover:text-black flex items-center gap-1">
                    Shop
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 7l4.5 4.5L14.5 7h-9z" />
                    </svg>
                </button>
                <!-- Dropdown -->
                <div class="absolute hidden group-hover:block mt-2 bg-white shadow-md rounded-md py-2 w-32 z-20">
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">Men</a>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">Women</a>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">Kids</a>
                </div>
            </div>
            <a href="#" class="hover:text-black">Our Story</a>
            <a href="#" class="hover:text-black">Blog</a>
            <a href="#" class="hover:text-black">Contact Us</a>
        </nav>

        <!-- Right Side Icons + Login -->
        <div class="hidden md:flex items-center px-2 gap-4">
            <i class="fas fa-search cursor-pointer text-gray-600 hover:text-black"></i>
            <i class="far fa-heart cursor-pointer text-gray-600 hover:text-black"></i>
            <i class="fas fa-shopping-cart cursor-pointer text-gray-600 hover:text-black"></i>
            <button class="px-4 py-2 cursor-pointer text-sm bg-black text-white rounded hover:bg-gray-800">Login</button>
        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden cursor-pointer text-2xl" @click="toggleMenu">
            <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden px-6 pb-4 space-y-3 text-sm text-gray-700">
        <a href="#" class="block cursor-pointer">Home</a>
        <a href="#" class="block cursor-pointer">Shop</a>
        <a href="#" class="block cursor-pointer">Our Story</a>
        <a href="#" class="block cursor-pointer">Blog</a>
        <a href="#" class="block cursor-pointer">Contact Us</a>
        <div class="flex gap-4 mt-3">
            <i class="fas fa-search cursor-pointer"></i>
            <i class="far fa-heart cursor-pointer"></i>
            <i class="fas fa-shopping-cart cursor-pointer"></i>
        </div>
        <button class="mt-2 px-4 py-2 cursor-pointer w-full bg-black text-white rounded hover:bg-gray-800">
            Login
        </button>
    </div>
</header>

<div class="px-6">
    <section class="relative bg-gray-100 h-[750px] md:h-[750px] lg:h-[545px] flex flex-col lg:flex-row items-center px-8 py-16">
        <!-- Left Content -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
            <p class="text-lg text-gray-600">Classic Exclusive</p>
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">Women’s Collection</h1>
            <p class="text-md text-gray-500 mt-4 mb-6">UPTO 40% OFF</p>
            <button class="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition">
                Shop Now →
            </button>
        </div>

        <!-- Right Image with Frame -->
        <div class="w-full lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center">
            <div class="relative z-10">
                <img src="../../public/Home1.png" alt="Woman Fashion" class="w-[300px] sm:w-[350px] lg:w-[425px] object-cover" />
                <!-- White Frame -->
                <div class="absolute top-0 left-0 w-full h-full border-[12px] border-white z-[-1] translate-x-6 translate-y-6"></div>
            </div>
        </div>
    </section>
</div>

<section class="py-10 bg-white px-4 md:px-20">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-900">Shop by Categories</h2>
        <div class="flex gap-2">
            <button class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200">
                <i class="fas fa-arrow-left text-sm"></i>
            </button>
            <button class="w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800">
                <i class="fas fa-arrow-right text-sm"></i>
            </button>
        </div>
    </div>

    <!-- Category Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(category, index) in categories" :key="index" class="relative rounded-lg overflow-hidden shadow-sm">
            <img :src="category.image" :alt="category.title" class="w-full h-[300px] object-cover" />
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 text-sm font-medium py-2 w-[200px]  text-center rounded-md shadow-md  ">
                {{ category.title }}
            </div>
        </div>
    </div>
</section>

<section class="py-12 px-4 md:px-20 bg-white">
    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-10">Our Bestseller</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div v-for="(item, index) in products" :key="index" class="flex flex-col items-center text-center space-y-2 ">
            <!-- Product Image -->
            <div class="w-full h-[220px] bg-gray-50 rounded-md overflow-hidden flex items-center justify-center hover:shadow-2xl transition-all duration-700">
                <img :src="item.image" :alt="item.title" class="object-contain h-full" />
            </div>

            <!-- Product Info -->
            <div>
                <h3 class="text-sm font-semibold text-gray-900">{{ item.brand }}</h3>
                <p class="text-sm text-gray-600">{{ item.title }}</p>
                <p class="mt-1 text-sm">
                    <span class="font-medium text-black">${{ item.price }}</span>
                    <span class="line-through text-gray-400 ml-2">${{ item.originalPrice }}</span>
                </p>
            </div>
        </div>
    </div>
</section>

<section class="px-4 md:px-20 py-16 bg-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Left Content -->
        <div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Deals of the Month</h2>
            <p class="text-sm text-black-900 mb-6 text-justify">
                It is a long established fact that a reader will be distracted by the readable content
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters
            </p>

            <!-- Countdown Boxes -->
            <div class="flex gap-4 mb-6">
                <div v-for="(time, index) in timer" :key="index" class="text-center border border-gray-200 rounded-md px-4 py-2">
                    <p class="text-xl font-bold text-black">{{ time.value }}</p>
                    <p class="text-sm text-gray-500">{{ time.label }}</p>
                </div>
            </div>

            <!-- Button -->
            <button class="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                View All Products →
            </button>
        </div>

        <!-- Right Image -->
        <div>
            <img src="https://cdn.create.vista.com/downloads/7926667e-0f41-43d7-a92a-d6521041fc7f_360.jpeg" alt="Fashion Deal" class="w-full lg:h-[350px] sm:h-[300px] sm:w-[450px] rounded-md" />
        </div>
    </div>
</section>

<section class="py-10 bg-gray-50 px-4 mt-4 md:px-20">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-900">What our Customer say's</h2>
        <div class="flex gap-2">
            <button class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200">
                <i class="fas fa-arrow-left text-sm"></i>
            </button>
            <button class="w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800">
                <i class="fas fa-arrow-right text-sm"></i>
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="bg-white shadow-lg rounded-xl p-6"
      >
        <!-- Stars -->
        <div class="flex mb-3">
          <template v-for="n in 5" :key="n">
            <svg
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
              />
            </svg>
          </template>
        </div>

        <!-- Review Text -->
        <p class="text-sm text-gray-600 mb-4">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum.
        </p>

        <!-- User Info -->
        <div class="flex items-center gap-3 mt-4">
          <img
            :src="testimonial.image"
            alt="avatar"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p class="text-sm font-semibold text-gray-900">{{ testimonial.name }}</p>
            <p class="text-xs text-gray-400">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>

</section>

</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            menuOpen: false,

            // new method 
            categories: [{
                    title: "Casual Wear",
                    image: "https://i.pinimg.com/236x/99/a0/99/99a099fdaf9a58d6459a9875aa848b46.jpg",
                },
                {
                    title: "Western Wear",
                    image: "https://i.pinimg.com/1200x/f4/c1/52/f4c15267680389b611e9a33b860c4809.jpg",
                },
                {
                    title: "Ethnic Wear",
                    image: "https://imgmediagumlet.lbb.in/media/2020/06/5ef111be60063d75baefca54_1592857022413.jpg",
                },
                {
                    title: "Kids Wear",
                    image: "https://i.pinimg.com/736x/c1/0c/24/c10c24cdaa1bf4ab435e6d0e9de35d1f.jpg",
                },
            ],

            // new method 
            products: [{
                    brand: "Roadstar",
                    title: "Printed Cotton T-Shirt",
                    price: 38,
                    originalPrice: 40,
                    image: "https://images.jdmagicbox.com/quickquotes/images_main/printed-cotton-mens-oversize-t-shirt-black-mtleko5l.jpg",
                },
                {
                    brand: "Allen Solly",
                    title: "Women Textured Handheld Bag",
                    price: 80,
                    originalPrice: 100,
                    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/383590959/DI/TX/GI/211601385/whatsapp-image-2024-02-03-at-4-52-24-pm-4-500x500.jpeg",
                },
                {
                    brand: "Louis Philippe Sport",
                    title: "Polo Collar T-Shirt",
                    price: 50,
                    originalPrice: 65,
                    image: "https://thebanyantee.com/cdn/shop/files/custom-black.jpg?v=1715144718",
                },
                {
                    brand: "Adidas",
                    title: "Men adi-dash Running Shoes",
                    price: 60,
                    originalPrice: 75,
                    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/20071776/2023/5/5/cb66ae5d-97c5-43b2-b3f3-bdbc84069ab31683266559832-ADIDAS-Men-Woven-Design-Adi-Dash-Running-Shoes-4051683266559-1.jpg",
                },
                {
                    brand: "Trendyol",
                    title: "Floral Embroidered Maxi Dress",
                    price: 35,
                    originalPrice: 45,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaeINRNlQhh8nK4oPWs3VIlBqtWUUAfEVZQ&s",
                },
                {
                    brand: "YK Disney",
                    title: "Girls Pink Moana Printed Dress",
                    price: 80,
                    originalPrice: 100,
                    image: "https://www.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dw59f7b91d/images/aw24/kwblomcrn6120aw24pnk_1.jpg",
                },
                {
                    brand: "US Polo",
                    title: "Tailored Cotton Casual Shirt",
                    price: 40,
                    originalPrice: 50,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyocLbvRegILAdbZ4l5_4R4jbU-Ld6I8l7Wg&s",
                },
                {
                    brand: "Zyla",
                    title: "Women Sandals",
                    price: 35,
                    originalPrice: 40,
                    image: "https://assets.ajio.com/medias/sys_master/root/20241003/dCPF/66fe42d7260f9c41e84e284e/-473Wx593H-700405744-beige-MODEL.jpg",
                },
            ],

            // new method 
            timer: [{
                    value: 120,
                    label: "Days"
                },
                {
                    value: 18,
                    label: "Hours"
                },
                {
                    value: 15,
                    label: "Mins"
                },
                {
                    value: 10,
                    label: "Secs"
                },
            ],

            // new method 
            testimonials: [
        {
          name: "Leslie Alexander",
          role: "Model",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Jacob Jones",
          role: "Co-Founder",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Jenny Wilson",
          role: "Fashion Designer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
      ],

        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>
