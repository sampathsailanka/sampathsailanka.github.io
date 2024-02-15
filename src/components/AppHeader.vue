<script>
export default {
    name: "Header",
    data() {
        return {}
    }
}
</script>

<template>
    <div id="header"></div>
    <div class="bg-black flex justify-around py-3 md:py-3 sticky top-0 z-50 opacity-95 tracking-wider">
        <div class="hidden md:block text-white md:flex md:justify-between">
            <!-- <span><a href="#"><i class="fa-solid fa-envelope fa-2xl px-3"></i></a></span> -->
            <span><a href="https://github.com/sampathsailanka" target="_blank"><i
                        class="fa-brands fa-github fa-2xl px-3"></i></a></span>
            <span><a href="https://www.linkedin.com/in/l-sai-sampath" target="_blank"><i
                        class="fa-brands fa-linkedin fa-2xl px-3"></i></a></span>
        </div>
        <div class="text-white md:hidden">
            <h1 class="font-mono font-semibold px-3 text-3xl">SM</h1>
        </div>
        <div class="hidden md:block text-white md:flex md:justify-around">

            <h1 class="px-3 text-lg"><a href="#Experience">Experience</a></h1>

            <h1 class="px-3 text-lg"><a href="#Projects">Projects</a></h1>

            <h1 class="px-3 text-lg"><a href="#ContactMe">Contact Me</a>
            </h1>
        </div>
    </div>
</template>
