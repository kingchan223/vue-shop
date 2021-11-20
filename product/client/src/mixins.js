import axios from "axios";

export default {
  methods: {
    async $api(url, data) {
      return (
        await axios({
          methods: "get",
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
