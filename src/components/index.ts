/*
 * @Author: jack.hai
 * @Date: 2023-01-05 11:05:04
 * @LastEditTime: 2023-01-11 19:24:59
 * @Description:
 */
import SacleBox from "./SacleBox.vue";
import type { App } from "vue";
// 按需引入
export { SacleBox };

const component = [SacleBox];
const CustomComponent = {
    install(App: App<Element>) {
        component.forEach((item) => {
            App.component(item.name, item);
        });
    },
};

export default CustomComponent;
