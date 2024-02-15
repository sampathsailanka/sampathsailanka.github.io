<script>
export default {
    name: "SkillsSection",
    data() {
        return {
            width: window.innerWidth
        }
    }
}
</script>

<template>
    <div class="bg-[#1b1b1b]">
        <div class="w-11/12 py-10 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 4xl:w-5/12 mx-auto">

            <!-- skill section heading -->
            <div class="font-mono text-white text-3xl mb-5 tracking-wider">What I KNow</div>

            <!-- skill tiles -->
            <div class="flex flex-col md:flex-row md:justify-between tracking-wider">

                <!-- frontend -->
                <div class="bg-[#2b2b2d] p-5 rounded-lg my-3 md:my-0 md:mx-2 z-20 shadow-lg shadow-gray-900">

                    <div class="text-white text-xl">Frontend</div>

                    <div class="pt-3">
                        <div class="py-3">
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <div class="py-3">
                            <span>Javascript</span>
                            <span class="border-2 border-teal-500">Vue JS</span>
                        </div>

                        <div class="py-3">
                            <span class="border-2 border-pink-700">Tailwind</span>
                            <span class="border-2 border-cyan-600">React JS</span>
                        </div>
                    </div>
                </div>


                <!-- backend -->
                <div class="bg-[#2b2b2d] p-5 rounded-lg my-3 md:my-0 md:mx-2 z-20 shadow-lg shadow-gray-900">

                    <div class="text-white text-xl">Backend</div>

                    <div class="pt-3">
                        <div class="py-3">
                            <span class="border-2 border-green-500">Node JS</span>
                            <span class="border-2 border-gray-500">Express JS</span>
                        </div>
                        <div class="py-3">
                            <span class="border-2 border-yellow-600">Python</span>
                        </div>
                    </div>
                </div>

                <!-- database -->
                <div class="bg-[#2b2b2d] p-5 rounded-lg my-3 md:my-0 md:mx-2 z-20 shadow-lg shadow-gray-900">

                    <div class="text-white text-xl">Database</div>

                    <div class="pt-3">
                        <div class="py-3">
                            <span>MySQL</span>
                            <span>PostgreSQL</span>
                        </div>
                        <div class="py-3">
                            <span class="border-2 border-green-800">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- devops -->
                <div class="bg-[#2b2b2d] p-5 rounded-lg my-3 md:my-0 md:mx-2 z-20 shadow-lg shadow-gray-900">

                    <div class="text-white text-xl">Devops</div>

                    <div class="pt-3">
                        <div class="py-3">
                            <span class="border-2 border-blue-300">GIT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Experience"></div>
        </div>
    </div>
</template>

<style scoped>
span {
    color: rgb(196, 196, 196);
    background-color: #1b1b1b;
    padding: 8px;
    border-radius: 6px;
    margin: 5px;
}

/* .hc {
    max-height: 30%;
} */
</style>