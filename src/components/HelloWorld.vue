<template>
  <div class="hello">
    <button @click="commit">发送</button>
    {{ info }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  data: () => {
    return {
      info: {}
    }
  },
  methods: {
    commit: function () {
      axios
          .post('/apis/hello')
          .then(response => {
            this.info = response.data.name
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
