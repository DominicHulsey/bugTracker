<template>
  <div class="bugDetails ">
    <div class="row d-flex justify-content-center">
      <div class="col-6 d-flex justify-content-center mt-5">
        <div class="card p-5" :class="{'bg-secondary': !findBug.closed}">
          <h2 class="card p-2" id="bugs"><b>Bug created by:</b> {{findBug.creator}}</h2>
          <h2 class="card p-2" id="bugs"><b>Bug title:</b> {{findBug.title}}</h2>
          <h3 class="card p-2" id="bugs"><b>Bug description:</b> {{findBug.description}}</h3>
          </ul>
          <button v-if="!findBug.closed" class="bg-info" @click="statusChange(findBug._id)">Close bug</button>
        </div>
      </div>
    </div>
    <button class="bg-secondary col-2 mt-5 rounded" @click="">Make Note</button>
  </div>
</template>


<script>
  export default {
    name: 'bugDetails',
    mounted() {

    },
    data() {
      return {
      }
    },
    computed: {
      findBug() {
        return this.$store.state.bugs.find(bug => bug._id == this.$route.params.id)
      }
    },
    methods: {
      statusChange(id) {
        this.$store.dispatch('changeStatus', id)
      }
    },
    components: {
    }
  }
</script>


<style>
  #bugs {
    transition: all 0.1s linear
  }

  #bugs:hover {
    border: 1px solid blue;
  }

  h1 {
    font-weight: normal
  }

  h2 {
    font-weight: normal
  }

  h3 {
    font-weight: normal
  }
</style>