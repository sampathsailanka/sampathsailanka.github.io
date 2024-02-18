<script>
export default {
    name: "ScrollButton",
    data() {
        return {
            scroll: true,
            idValue: "#header",
        }
    },
    methods: {
        scroller() {
            this.scroll = !this.scroll
            if (this.idValue === "#header") {
                this.idValue = "#footer"
            } else {
                this.idValue = "#header";
            }
        }
    }
}
</script>

<template>
    <button class="hidden xl:block" v-on:click="scroller">
        <a :href="idValue">
            <div
                class="w-10 h-10 bg-cyan-600 rounded-full fixed bottom-5 right-5 flex justify-center items-center z-50 shadow-lg">
                <div v-if="scroll">
                    <i class="fa-solid fa-arrow-down fa-xl" style="color: #ffffff;"></i>
                </div>
                <div v-else>
                    <i class="fa-solid fa-arrow-up fa-xl" style="color: #ffffff;"></i>
                </div>
            </div>
        </a>
    </button>
</template>