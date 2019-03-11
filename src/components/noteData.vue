<template>
  <div class="NoteData">
    <div class="row d-flex justify-content-center">
      <div class="card mt-4 border-0 m-3 text-center noteStyle" v-for="note in notes">
        <img class="card-img noteStyle" src="../assets/post-it.png" />
        <div class="card-img-overlay noteStyle rounded text-dark">
          <h5 class="mt-5 text-left">
            <b>Creator: </b> {{note.creator}}
          </h5>
          <h5 class="mt-3 text-left">
            <b>Note: </b> {{note.content}}
          </h5>
          <h5 class="mt-3 text-left">
            <b>Status: </b> {{note.flagged}}
          </h5>
          <button class="btn btn-danger mt-3 p-1" @click="deleteNote(note._id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'noteData',
    computed: {
      notes() {
        return this.$store.state.notes.filter(note => {
          return note.bug == this.$route.params.id
        })
      }
    },
    methods: {
      deleteNote(id) {
        this.$store.dispatch('deleteNote', id)
      }
    },
    components: {}
  }
</script>


<style>
  .noteStyle {
    max-height: 250px;
    width: auto;
    font-family: 'Itim', cursive;
  }
</style>