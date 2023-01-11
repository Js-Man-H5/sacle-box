<!--
 * @Author: jack.hai
 * @Date: 2022-12-24 11:42:34
 * @LastEditTime: 2023-01-11 19:24:25
 * @Description:
-->
<template>
    <div
        class="ScaleBox"
        ref="dom"
        :style="{
            width: width + 'px',
            height: height + 'px',
        }"
    >
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "SacleBox",
};
</script>
<script setup lang="ts">
import throttle from "lodash/throttle";
import { ref, onMounted, onUnmounted, withDefaults, defineProps } from "vue";
const props = withDefaults(
    defineProps<{
        width?: number;
        height?: number;
    }>(),
    {
        width: 1920,
        height: 1080,
    },
);
const scale = ref(0);
const width = ref(props.width);
const dom = ref();
const height = ref(props.height);
const getScale = () => {
    // 固定好16：9的宽高比，计算出最合适的缩放比
    const wh = window.innerHeight / height.value;
    const ww = window.innerWidth / width.value;
    //   console.log(ww < wh ? ww : wh);
    return ww < wh ? ww : wh;
};
const setScale = () => {
    // 获取到缩放比例，设置它
    scale.value = getScale();
    if (dom.value) {
        dom.value.style.setProperty("--scale", scale.value);
    }
};
const resize = throttle(() => {
    setScale();
}, 200);
onMounted(() => {
    setScale();
    window.addEventListener("resize", resize);
});
onUnmounted(() => {
    window.removeEventListener("resize", resize);
});
</script>
<style lang="less" scoped>
#ScaleBox {
    --scale: 1;
}
.ScaleBox {
    position: absolute;
    transform: scale(var(--scale)) translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    transform-origin: 0 0;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    z-index: 999;
}
</style>
