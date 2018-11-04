<template>
    <div class="mx-auto w-full md:w-1/2">
        <input
            class="shadow border p-4 rounded w-full mb-4"
            type="text"
            name="text-field"
            placeholder="Type here and see Vue in action"
            v-model="message"
        />
        <p class="m-0">{{ message }}</p>
    </div>
</template>

<script>
export default {
  name: 'Fold',
  props: {
    message: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
