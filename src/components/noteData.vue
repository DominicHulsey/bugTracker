<template>
  <div class="NoteData">
    <div class="row" v-for="note in notes">
      <div class=" m-2 card text-dark">
        <h5 class="card-title">
          {{note.creator}}
        </h5>
        <h5 class="card-body">
          {{note.content}}
        </h5>
        {{note.flagged}}
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

    },
    components: {}
  }
</script>


<style>

</style>