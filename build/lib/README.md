<!--
 * @Author: jack.hai
 * @Date: 2023-01-05 15:45:11
 * @LastEditTime: 2023-01-11 19:45:04
 * @Description: 
-->
# sacle-box

| 属性     | 注释  | 默认属性 |  类型  |
| :------- | :---: | :------: | :----: |
| `height` | 高度  |   1080   | number |
| `width`  | 宽度  |   1920   | number |

## 默认适配比例

1920:1080

## 使用方式
    

## 有问题提 issues

### vue3

```js
    // 局部引入
    import { SacleBox } from 'sacle-box'
    import 'sacle-box/style.css'
    // 全局引入
    import SacleBox from 'sacle-box'
    import 'sacle-box/style.css';
    app.use(SacleBox);


    <div>
        <SacleBox>
            <div class='container'></div>
         </SacleBox>
    </div>
    

    // 注:由于没有单独开发typeScript类型，全局注册组件后组件类型提示为any
    // 解决办法:在vue-shim.d.ts中添加
    declare module '@vue/runtime-core' {
        export interface GlobalComponents {
            SacleBox: typeof import('sacle-box')['SacleBox'],
        }
    }

```    



