<script>
export default {
    name: "Personal",
}
</script>

<template>
    <!-- <div class="bg-[#10130e]"> -->
    <div class="bg-[#1b1b1b]">
        <!-- <div class="bg-[#181818]"> -->
        <div class="w-11/12 py-10 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 4xl:w-5/12 mx-auto">

            <!-- Myself section heading -->
            <div class="font-mono text-white text-3xl mb-5 tracking-wider">Myself</div>

            <div class="flex flex-col-reverse md:flex md:flex-row justify-between text-white gap-10 tracking-wider">
                <div class="flex flex-1 flex-col">

                    <!-- name -->
                    <div class="font-mono text-white text-2xl py-0 md:text-3xl md:py-10">
                        Lanka Sai Sampath
                    </div>

                    <!-- introduction -->
                    <div class="text-gray-300 py-5 md:py-0">
                        <p class="py-2 text-justify">
                            Hola, I'm Sampath, currently working as a <span class="text-yellow-500">software
                                developer</span>.
                            Like a shinobi
                            mastering the art of programming,
                            I am deeply passionate about Computer Science and Programming. Currently, I wield my skills in
                            crafting both front-end and back-end applications, merging creativity with technical prowess.
                        </p>

                        <p class="py-2 text-justify">
                            Beyond the screen, I find solace in the realm of PC gaming, where I immerse myself in virtual
                            worlds, honing my problem-solving abilities and strategic thinking.
                            <!-- I am driven by a relentless
                            passion for software development, eager to tackle new challenges and
                            push the boundaries of what's possible. -->
                        </p>

                        <p class="py-2 text-justify">
                            <!-- Despite my unconventional path into software development,  -->
                            I've embraced software development
                            with unwavering passion, constantly seeking new knowledge and eager to push boundaries in this
                            dynamic field.
                        </p>
                    </div>

                    <!-- social media -->
                    <div class="flex mt-5 justify-evenly items-center">
                        <a href="https://www.linkedin.com/in/l-sai-sampath" target="_blank">
                            <div class="z-10 active:scale-95 active:transition-all">
                                <div class="rounded-md bg-[#222a1c] p-5">
                                    <i class="fa-brands fa-linkedin-in fa-2xl" style="color: #ffffff;"></i>
                                </div>
                            </div>
                        </a>

                        <!-- <div class="bg-[#9bff4f]"></div> -->

                        <a href="https://github.com/sampathsailanka" target="_blank">
                            <div class="rounded-md bg-[#222a1c] p-5 z-20">
                                <i class="fa-brands fa-github fa-2xl"></i>
                            </div>
                        </a>

                        <a href="https://www.hackerrank.com/profile/sampathsm" target="_blank">
                            <div class="rounded-md bg-[#222a1c] p-5 z-20">
                                <i class="fa-brands fa-hackerrank fa-2xl" style="color: #ffffff;"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="relative top-0 left-0">
                    <img class="hw rounded relative top-0 left-0 z-20" src="../assets/images/3.jpg" alt="">
                    <div class="hw animation rounded bg-green-800 absolute top-2 left-2 md:top-2 md:left-2 z-10 blur-bg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hw {
    height: 420px;
    width: 340px;
}

.blur-bg {
    filter: blur(10px);
}

.animation {
    animation: glowEffect 1.6s infinite alternate;
}

@keyframes glowEffect {
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
        background-color: rgb(21 128 61);
    }
}

@media (min-width: 768px) {
    .hw {
        height: 500px;
        width: 400px;
    }
}
</style>