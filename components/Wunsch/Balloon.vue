<template>
    <div class="balloon-container">
        <div ref="balloon" class="balloon" :style="{left: position + '%'}">
            <img src="~assets/Wunsch/balloon.png" alt="balloon" />
            <div class="balloon-bubble">
                <h6>I am a Social Media Expert!</h6>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
const position = ref(Math.random() * 60);
const balloon = ref<HTMLElement | null>(null);

function animateBalloon() {
    position.value = Math.random() * 60;
    if (balloon.value) {
        balloon.value.classList.remove('animate');
        setTimeout(() => balloon.value!.classList.add('animate'), 0);
        setTimeout(() => balloon.value!.classList.remove('animate'), 20000);
    }
}

defineExpose({
    animateBalloon
});
</script>


<style lang="less" scoped>
.balloon-container {
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 280vh;
    overflow: hidden;
    pointer-events: none;

    .balloon {
        z-index: 5;
        position: absolute;
        bottom: -300vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
        img {
            width: 300px;
            height: 300px;
            background-color: white;
        }
        .balloon-bubble {
            position: absolute;
            top: 20px;
            width: 200px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--crust);
            padding: 10px;
            border-radius: 100px;
            h6 {
                font-family: 'Comic Sans';
                margin: 0;
                color: white;
                text-align: center;
            }
        }
    }
}

.animate {
    animation: float 20s linear, wind 20s ease-in-out;
}

@keyframes float {
    0% {
        bottom: -50vh;
    }
    100% {
        bottom: 300vh;
    }
}

@keyframes wind {
    0% {
        transform: translateX(0);
    }
    10% {
        transform: translateX(50px);
    }
    20% {
        transform: translateX(0);
    }
    30% {
        transform: translateX(50px);
    }
    40% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(50px);
    }
    60% {
        transform: translateX(0);
    }
    70% {
        transform: translateX(50px);
    }
    80% {
        transform: translateX(0);
    }
    90% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>