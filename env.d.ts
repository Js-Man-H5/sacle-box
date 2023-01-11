/*
 * @Author: jack.hai
 * @Date: 2023-01-05 10:29:31
 * @LastEditTime: 2023-01-05 10:49:55
 * @Description:
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
