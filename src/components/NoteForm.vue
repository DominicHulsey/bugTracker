<template>
  <div class="noteForm">
    <div v-if="!bugStatus.closed">
      <div class="card col-3 border-0 d-flex align-items-center">
        <img class="card-img noteForm d-flex" src="../assets/createNote.png" />
        <div class="card-img-overlay noteForm h-100 d-flex align-items-center justify-content-center">
          <form @submit.prevent='createNote'>
            <input class="rounded my-2" v-model="noteForm.creator" type="text" placeholder="Enter note creator" />
            <input class="rounded my-2" v-model="noteForm.content" type="text" placeholder="Enter note" />
            <select class="my-2" v-model=" noteForm.flagged">
              <option value="" disabled selected>flag form</option>
              <option>pending</option>
              <option>completed</option>
              <option>rejected</option>
              <span>Selected: {{ selected }}</span>
            </select>
            <button class="btn btn-secondary rounded" type="submit">Create Note</button>
          </form>
        </div>
      </div>
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
  .noteForm {
    max-height: 400px;
    width: auto;
    font-family: 'Itim', cursive;
  }
</style>