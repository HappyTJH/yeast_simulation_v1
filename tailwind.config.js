/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 扫描 src 文件夹下的所有 js/jsx/ts/tsx 文件
    './public/index.html',        // 扫描 public 文件夹下的 index.html 文件
  ],
  theme: {
    extend: {}, // 可在此处扩展自定义主题
  },
  plugins: [], // 如果有额外插件可以在此添加
};
