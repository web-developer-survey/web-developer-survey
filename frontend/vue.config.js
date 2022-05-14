const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false, //eslint 끄기
  devServer: { //api 설정
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
});
