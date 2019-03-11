<template>
  <div class="noteForm">
    <div v-if="!bugStatus.closed">
      <form @submit.prevent='createNote'>
        <input v-model="noteForm.creator" type="text" placeholder="Enter note creator" />
        <input v-model="noteForm.content" type="text" placeholder="Enter note" />
        <select v-model="noteForm.flagged">
          <option disabled value="">Flag form</option>
          <option>pending</option>
          <option>completed</option>
          <option>rejected</option>
        </select>
        <span>Selected: {{ selected }}</span>
        </select>
        <button type="submit">Create Note</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'noteForm',
    mounted() {
      this.$store.dispatch('getNotes')
    },
    data() {
      return {
        noteForm: {}
      }
    },
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