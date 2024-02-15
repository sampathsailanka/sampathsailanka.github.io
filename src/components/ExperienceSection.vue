<template>
    <div class="bg-[#2e364a]" ref="timeline">
        <!-- Experience section heading -->
        <div class="w-11/12 py-10 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 4xl:w-5/12 mx-auto">
            <div class="font-mono text-white text-3xl mb-5 tracking-wider">Work Experience</div>
        </div>

        <div class="pb-20">
            <div class="timeline tracking-wider">
                <!--  container-1  -->
                <div class="container left-container">
                    <img src="../assets/images/k61sv6h4.png" class="rounded-full absolute w-10 h-10 bg-white right-0 top-8">
                    <div class="text-box p-8 bg-white rounded-lg relative z-20 drop-shadow-2xl">
                        <h2 class="font-semibold text-2xl">Jr. Software Developer</h2>
                        <h2 class="font-semibold text-base">WizardTales GMBH, Ratingen, Germany</h2>
                        <small class="font-semibold text-base">December 2023 - Present</small>
                        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi, impedit itaque
                            necessitatibus laboriosam voluptatibus reiciendis in dicta doloremque rem.</p> -->
                        <span class="left-container-arrow z-20 drop-shadow-2xl"></span>
                    </div>
                </div>

                <!--  container-2  -->
                <div class="container right-container">
                    <img src="../assets/images/k61sv6h4.png" class="rounded-full absolute w-10 h-10 bg-white right-0 top-8">
                    <div class="text-box p-8 bg-white rounded-lg relative z-20 drop-shadow-2xl">
                        <h2 class="font-semibold text-2xl">Jr. Software Developer Intern</h2>
                        <h2 class="font-semibold text-base">WizardTales GMBH, Ratingen, Germany</h2>
                        <small class="font-semibold text-base">August 2023 - December 2023</small>
                        <ul class="list-disc pl-4">
                            <li>Developed front-end pages for Recommini website.</li>
                            <li>Added & Re-designed some UI changes in the OpenCode website.</li>
                            <li>Developed a front-end page for OpenCode website.</li>
                        </ul>
                        <span class="right-container-arrow z-20 drop-shadow-2xl"></span>
                    </div>
                </div>

                <!--  container-3  -->
                <div class="container left-container">
                    <img src="../assets/images/xalzmnn8.png" class="rounded-full w-10 h-10 absolute bg-white right-0 top-8">
                    <div class="text-box p-8 bg-white rounded-lg relative z-20 drop-shadow-2xl">
                        <h2 class="font-semibold text-2xl">Intern</h2>
                        <h2 class="font-semibold text-base">AICTE-IDEALAB, VIIT, Visakhapatnam</h2>
                        <small class="font-semibold text-base">January 2023 - April 2023 </small>
                        <ul class="list-disc pl-4">
                            <li>Experienced with CO2 Laser Cutting Machine operations and expanded expertise in its
                                functionalities.
                            </li>
                            <li>Crafted presentation mementos for Yuvatarang 2023.</li>
                        </ul>
                        <span class="left-container-arrow z-20 drop-shadow-2xl"></span>
                    </div>
                </div>
                <div id="Projects"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ExperienceSection',
}
</script>

<style scoped>
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 100px auto;
    margin-top: 0;
    margin-bottom: 0;
    z-index: 1;
}


.container {
    padding: 10px 50px;
    position: relative;
    width: 50%;
    animation: movedown 1s linear forwards;
    opacity: 0;
}

@keyframes movedown {
    0% {
        opacity: 0;

        transform: translateY(-30px);
    }

    100% {
        opacity: 1;

        transform: translateY(0px);
    }
}

.container:nth-child(1) {
    animation-delay: 0s;
}

.container:nth-child(2) {
    animation-delay: 2s;
}

.container:nth-child(3) {
    animation-delay: 4s;
}

.container:nth-child(4) {
    animation-delay: 4s;
}

.text-box {
    padding: 20px 30px;
    background: #edf2f4;
    position: relative;
    border-radius: 6px;
    font-size: 15px;
}

.left-container {
    left: 0;
}

.right-container {
    right: -50%;
}

.container img {
    position: absolute;
    background-color: #edf2f4;
    /* width: 40px; */
    border-radius: 50%;
    right: -20px;
    top: 32px;
    z-index: 10;
}

.right-container img {
    left: -20px;
}

.timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: #edf2f4;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
    animation: moveline 6s linear forwards;
}

@keyframes moveline {
    0% {
        height: 0;
    }

    100% {
        height: 90%;
    }
}

.text-box h2 {
    font-weight: 600;
}

.text-box small {
    display: inline-block;
    margin-bottom: 15px;
}

.left-container-arrow {
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #edf2f4;
    right: -13px;
}

.right-container-arrow {
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #edf2f4;
    left: -13px;
}

@media screen and (max-width: 600px) {
    .timeline {
        margin: 50px auto;
    }

    .timeline::after {
        left: 31px;
    }

    .container {
        width: 100%;
        padding-left: 80px;
        padding-right: 25px;
    }

    .text-box {
        font-size: 13px;
    }

    .text-box small {
        margin-bottom: 10px;
    }

    .right-container {
        left: 0;
    }

    .left-container img,
    .right-container img {
        left: 10px;
    }

    .left-container-arrow,
    .right-container-arrow {
        border-right: 15px solid #edf2f4;
        border-left: 0;
        left: -15px;
    }
}
</style>
  