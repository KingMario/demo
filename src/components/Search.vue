<template>
  <div>
    <div class="search">
    <Input v-model="searchName" placeholder="Enter the name you search" style="width: 300px" @on-enter="handleClick"></Input>

    <Button type="primary"  icon="ios-search" @click="handleClick">搜索</Button>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['setSearchName'],

  data() {
    return {
      searchName: ''
    }
  },

  methods: {
    handleClick() {
      const searchName = this.searchName && this.searchName.trim()
      if (searchName) {
        this.setSearchName(this.searchName)
        this.searchName = ''
      }
    }
  }
}
</script>

<style>

</style>
