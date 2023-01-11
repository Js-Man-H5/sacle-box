/*
 * @Author: jack.hai
 * @Date: 2023-01-10 11:36:58
 * @LastEditTime: 2023-01-10 11:37:42
 * @Description:
 */
import { SacleBox } from "./src/components/index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        SacleBox: typeof SacleBox;
    }
}
