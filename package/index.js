/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/*
 * @Author: jack.hai
 * @Date: 2023-01-05 14:29:35
 * @LastEditTime: 2023-01-05 16:20:16
 * @Description:
 */

const fs = import("fs");
const path = import("path");
const copyFile = async () => {
    const data = await fs;
    const filePath = await path;
    const getFilePath = data.default.readdirSync(filePath.resolve(__dirname));
    getFilePath.forEach((item) => {
        if (item !== 'index.js') {
            data.default.copyFileSync(filePath.resolve(__dirname, item), filePath.resolve(__dirname, '../build/lib', item));
        }
    })
};
copyFile();
