<script>
export default {
    name: "LandingSection",
    data() {
        return {
            greeting: "Sampath Sai Lanka",
        }
    }
}
</script>

<template>
    <div class="bg-[#243b4a] h-sm md:h-md flex flex-col justify-center items-center md:h-screen tracking-wider">

        <!-- <img class="loader" src="../assets/images/konaha.png" alt=""> -->
        <div>
            <img src="../assets/images/1.jpg" class="hidden md:block md:h-60 3xl:h-96 rounded-full" alt="Sampath's Picture">


            <img src="../assets/images/2.jpg" class="h-72 md:hidden rounded-md mb-4" alt="Sampath's Picture">
        </div>

        <div class="text-white text-sm md:text-lg mt-3">
            Hello, I'm
            <span class="font-mono text-white text-2xl font-semibold md:text-4xl md:py-3">{{ greeting }}</span>
        </div>

        <!-- <div class="text-white md:text-lg py-3 md:py-3">A frontend developer
            specialised in <i class="fa-brands fa-vuejs fa-2xl"></i> and <i class="fa-brands fa-react fa-2xl"></i>.
        </div> -->

        <div class="text-white md:text-lg py-3 md:py-3">A Full Stack Web Developer
        </div>


        <div class="font-mono text-white md:text-lg py-1 md:py-1">
            Gamer <i class="fa-solid fa-headset fa-lg" style="color: #ffffff;"></i> <i
                class="fa-sharp fa-solid fa-gamepad fa-rotate-by fa-lg"
                style="color: #ffffff; --fa-rotate-angle: 145deg;"></i>
        </div>
    </div>
</template>

<style scoped>
.loader {
    position: absolute;
    top: 46%;
    /* Adjust as needed */
    /* left: 50%; */
    /* Adjust as needed */
    width: 20px;
    /* Adjust as needed */
    height: 20px;
    /* Adjust as needed */
    /* animation: rotater 1s linear infinite; */
    animation: orbitAround 10s linear infinite;
}

@keyframes orbitAround {
    0% {
        transform: translate(-20%, -30%) rotate(0deg) translate(140px) rotate(0deg);
        /* Start position */
    }

    100% {
        transform: translate(-20%, -30%) rotate(360deg) translate(140px) rotate(-360deg);
        /* End position */
    }
}


@keyframes rotater {
    to {
        transform: rotate(360deg);
    }
}
</style>