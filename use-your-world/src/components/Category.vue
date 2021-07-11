<template>
  <div class="component" @click="test">
    <img :src="item + '.jpg'" />
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    data: Object,
    item: Object,
    key: Object,
    isCategorySelected: Object,
  },
  methods: {
    // empty
    test() {
      this.$emit('clicked', this.item);
    }
  },
  computed: {
    // empty
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
  }

  .component {
    width: 20%;
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
