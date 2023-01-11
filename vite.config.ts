/*
 * @Author: jack.hai
 * @Date: 2023-01-05 10:29:31
 * @LastEditTime: 2023-01-05 17:50:56
 * @Description:
 */
import { fileURLToPath, URL } from "node:url";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({ insertTypesEntry: true, copyDtsFiles: false })],
    build: {
        outDir: "build/lib", //输出文件名称
        lib: {
            entry: path.resolve(__dirname, "./src/components/index.ts"), //指定组件编译入口文件
            name: "lib",
            fileName: "lib",
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ["vue"],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "Vue",
                },
            },
        },
    },

    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
