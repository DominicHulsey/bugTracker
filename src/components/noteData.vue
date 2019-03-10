<template>
  <div class="NoteData">
    <h1>sup homie</h1>
    <div v-for="note in notes">
      <div class="card text-dark">
        <div class="card-title">
          {{note.creator}}
        </div>
        <div class="card-body">
          {{note.content}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'NoteData',
    computed: {
      notes() {
        return this.$store.state.notes.filter(note => note.bug == this.$route.params.id)
      }
    },
    methods: {

    },
    components: {}
  }
</script>


<style>

</style>