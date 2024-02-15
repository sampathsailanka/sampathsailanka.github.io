<script>
import emailjs from '@emailjs/browser';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import qy from "./qy";

export default {
    name: "ContactMe",
    data() {
        return {
            name: "",
            email: "",
            message: "",
        }
    },
    methods: {
        sendEmail() {
            emailjs
                .sendForm(qy.serviceId, qy.templateId, this.$refs.form, {
                    publicKey: qy.publicKey,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        toast.success("Your Form Has been Sent Successfully! Dattebayo!!!", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                        });
                        this.name = ""
                        this.email = ""
                        this.message = ""
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        toast.error("Your submission has Failed... Please try again later!!!", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                        });
                    },
                );
        },
    },
};
</script>

<template>
    <div id="ContactMe" class="bg-[#243b4a]">
        <div class="w-11/12 py-10 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 4xl:w-5/12 mx-auto">
            <h1 class="font-mono text-white text-3xl mb-5 tracking-wider">Reach out to me</h1>
            <div class="flex flex-col tracking-wider">
                <div
                    class="bg-[#4d5b65] border-[#4d5b65] md:w-9/12 lg:w-8/12 xl:w-8/12 2xl:w-7/12 3xl:w-7/12 4xl:w-7/12 mx-auto rounded-md z-20 shadow-lg shadow-gray-950 p-4 md:p-7">
                    <div class="flex justify-between items-center">
                        <h1 class="font-mono text-white text-3xl mb-2">Contact</h1>
                        <span><i class="fa-solid fa-envelope fa-rotate-by fa-2xl"
                                style="color: #ffffff; --fa-rotate-angle: 25deg;"></i></span>
                    </div>

                    <form ref="form" @submit.prevent="sendEmail">

                        <div class="flex flex-col">
                            <label for="name" class="text-white text-lg my-2">Name</label>
                            <input type="text" class="bg-[#364652] text-white focus:outline-none rounded h-9 pl-5" id="name"
                                name="from_name" placeholder="Enter your name" v-model="name" required>
                        </div>

                        <div class="flex flex-col">
                            <label for="email" class="text-white text-lg my-2">Email</label>
                            <input type="email" class="bg-[#364652] text-white focus:outline-none rounded h-9 pl-5"
                                name="reply_to" id="email" placeholder="Enter your email" v-model="email" required>
                        </div>

                        <div class="flex flex-col">
                            <label for="message" class="text-white text-lg my-2">Message</label>
                            <textarea name="message"
                                class="bg-[#364652] text-white h-32 focus:outline-none rounded pl-5 pt-5" id="message"
                                cols="30" rows="10" placeholder="Message" v-model="message" required></textarea>
                        </div>

                        <!-- <input type="submit" value="Submit"
                            class="w-32 my-4 bg-[#364652] border-[#364652] text-white py-2 px-4 rounded z-10 shadow-xl shadow-[#243b4a] active:scale-95 active:transition-all"> -->

                        <button type="submit" value="Submit"
                            class="w-32 my-4 bg-[#364652] border-[#364652] text-white text-xl py-2 px-4 rounded z-10 shadow-xl shadow-[#243b4a] active:scale-95 active:transition-all">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>