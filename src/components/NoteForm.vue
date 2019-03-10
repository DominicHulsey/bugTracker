<template>
  <div class="noteForm">
    <div :v-show="!bugStatus.closed" <form @submit.prevent='createNote'>
      <input v-model="noteForm.creator" type="text" placeholder="Enter note creator"></input>
      <input v-model="noteForm.content" type="text" placeholder="Enter note"></input>
      <button type="submit">Create Note</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'notes',
    computed: {
      bugStatus() {
        return this.$store.state.bugs.find(bug => bug._id == this.$route.params.id)
      }
    },
    data() {
      return {
        noteForm: {}
      }
    },
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.noteForm)
      }
    },
    components: {}
  }

</script>
<style>

</style>