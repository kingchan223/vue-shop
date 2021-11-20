const target = "http://localhost:8090/";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
      },
    },
  },
};
