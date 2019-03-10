<template>
  <div class="bugForm">
    <div class="row h-100 d-flex justify-content-center">
      <form class="mb-1 col-8 p-3 bg-light shadow p-4" @submit.prevent='createBug'>
        <h3 class="col-6 rounded text-dark offset-3 p-1 mb-3" id="bugTitle"><i>Create New Bug</i></h3>
        <input class="shadow-sm float-left p-2 mx-1 mb-3 rounded col-6" v-model="bugForm.creator" type="text"
          placeholder="bug creator" />
        <input class="shadow-sm float-right p-2 mx-1 mb-3 rounded col-5" v-model="bugForm.title" type="text"
          placeholder="bug title" />
        <textarea class="shadow-sm float-left p-2 mx-1 mb-5 rounded col-6 h-50" v-model=" bugForm.description"
          type="text" placeholder="bug description" />
        <button class="shadow btn btn-secondary col-3 mt-4 ml-4 p-3" type="submit">Create Bug</button>
    </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'bugs',
    data() {
      return {
        bugForm: {}
      }
    },
    computed: {},
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.bugForm)
      }
    },
    components: {}
  }

</script>
<style scoped>
  #bugTitle {
    background-color: #dedede
  }
</style>