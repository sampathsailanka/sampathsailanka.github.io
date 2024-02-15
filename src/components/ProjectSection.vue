<script>
export default {
    name: "ProjectSection",
    data() { },
}
</script>

<template>
    <div class="bg-[#1b1b1b]">

        <div class="w-11/12 py-10 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 4xl:w-5/12 mx-auto">

            <!-- project section heading -->
            <div class="font-mono text-white text-3xl mb-5 tracking-wider">Projects</div>


            <div class="grid md:grid-cols-2 gap-5 text-white tracking-wider">

                <!-- Project display - 1 -->
                <div class="bg-[#302f2b] flex flex-col border-[#302f2b]-3 p-4 rounded-md z-20 shadow-lg shadow-gray-950">
                    <div class="flex items-center py-2">
                        <span><i class="fa-solid fa-book fa-xl" style="color: #63E6BE;"></i></span>
                        <header class="pl-2 text-2xl">E-Commerce API</header>
                    </div>

                    <!-- description for project -->
                    <span class="text-gray-300 py-2">Developed a robust RESTful e-commerce API backend, facilitating
                        efficient management of products, orders, and user data while ensuring reliable performance.</span>

                    <!-- languages used -->
                    <span class="text-gray-300 py-2 flex items-center mx-2">
                        <!-- <div class="w-3 h-3 mx-3 ml-0 bg-yellow-500 rounded-full"></div>
                        Javascript -->

                        <div class="w-3 h-3 ml-0 mx-3 bg-green-500 rounded-full"></div>
                        Node JS
                        <div class="w-3 h-3 mx-3 bg-green-800 rounded-full"></div>
                        MongoDB
                    </span>

                    <!-- live presentation -->
                    <div class="text-gray-400 py-2">
                        <a href="https://e-commerce-zs1a.onrender.com/" target="_blank">
                            <button
                                class="bg-[#363532] border-[#1d1d1d]-3 p-2 rounded-md mx-3 z-10 shadow-md shadow-yellow-600 active:scale-95 active:transition-all">
                                Live Demo
                                <span class="padding-left">
                                    <i class="fa-solid fa-globe"></i>
                                </span>
                                <span class="padding-left">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/sampathsailanka/E-Commerce" target="_blank">
                            <button
                                class="bg-[#363532] border-[#1d1d1d]-3 p-2 rounded-md mx-3 z-10 shadow-md shadow-yellow-600 active:scale-95 active:transition-all">
                                Github
                                <span class="padding-left">
                                    <i class="fa-brands fa-github"></i>
                                </span>
                                <span class="padding-left">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>


                <!-- Project display - 2 -->
                <!-- <div class="bg-[#302f2b] flex flex-col border-[#302f2b]-3 p-4 rounded-md z-20 shadow-lg shadow-gray-950">
                    <div class="flex items-center py-2">
                        <span><i class="fa-solid fa-book fa-xl" style="color: #63E6BE;"></i></span>
                        <header class="pl-2 text-2xl">Music Player</header>
                    </div>

                    
                    <span class="text-gray-300 py-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</span>

                    
                    <span class="text-gray-300 py-2 flex items-center mx-2">
                        <div class="w-3 h-3 ml-0 mx-3 bg-teal-500 rounded-full"></div>
                        Vue JS

                        <div class="w-3 h-3 mx-3 bg-yellow-400 rounded-full"></div>
                        Firebase
                    </span>

                    
                    <div class="text-gray-400 py-2">
                        <button
                            class="bg-[#363532] border-[#1d1d1d]-3 p-2 rounded-md mx-3 z-10 shadow-md shadow-yellow-600 active:scale-95 active:transition-all">
                            Live Demo
                            <span class="padding-left">
                                <i class="fa-solid fa-globe"></i>
                            </span>
                            <span class="padding-left">
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>

                        <button
                            class="bg-[#363532] border-[#1d1d1d]-3 p-2 rounded-md mx-3 z-10 shadow-md shadow-yellow-600 active:scale-95 active:transition-all">
                            Github
                            <span class="padding-left">
                                <i class="fa-brands fa-github"></i>
                            </span>
                            <span class="padding-left">
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </div> -->

                <!-- Project display - 3 -->
                <div class="bg-[#302f2b] flex flex-col border-[#302f2b]-3 p-4 rounded-md z-20 shadow-lg shadow-gray-950">
                    <div class="flex items-center py-2">
                        <span><i class="fa-solid fa-book fa-xl" style="color: #63E6BE;"></i></span>
                        <header class="pl-2 text-2xl">JobJunction Website</header>
                    </div>

                    <!-- description for project -->
                    <span class="text-gray-300 py-2">Developed a JobJunction website showcasing available job listings and
                        notifications, simplifying the job discovery process for users. <br>
                        user: sam@sm.com | pass: 123456
                    </span>

                    <!-- languages used -->
                    <span class="text-gray-300 py-2 flex items-center mx-2">
                        <div class="w-3 h-3 ml-0 mx-3 bg-cyan-700 rounded-full"></div>
                        React JS

                        <div class="w-3 h-3 mx-3 bg-green-500 rounded-full"></div>
                        Node JS

                        <div class="w-3 h-3 mx-3 bg-green-800 rounded-full"></div>
                        MongoDB
                    </span>

                    <!-- live presentation -->
                    <div class="text-gray-400 py-2">
                        <a href="https://jobjunction-d1fm.onrender.com" target="_blank">
                            <button
                                class="bg-[#363532] border-[#1d1d1d]-3 p-2 rounded-md mx-3 z-10 shadow-md shadow-yellow-600 active:scale-95 active:transition-all">
                                Live Demo
                                <span class="padding-left">
                                    <i class="fa-solid fa-globe"></i>
                                </span>
                                <span class="padding-left">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </button>
                        </a>

                        <a href="https://github.com/sampathsailanka/Jobster-API" target="_blank">
                            <button
                                class="bg-[#363532] border-[#1d1d1d]-3 p-2 rounded-md mx-3 z-10 shadow-md shadow-yellow-600 active:scale-95 active:transition-all">
                                Github
                                <span class="padding-left">
                                    <i class="fa-brands fa-github"></i>
                                </span>
                                <span class="padding-left">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.padding-left {
    padding-left: 7px;
}
</style>