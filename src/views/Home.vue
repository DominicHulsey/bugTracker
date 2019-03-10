<template>
  <div class="home">
    <div class="container">
      <img class="mb-5" alt="Vue logo" src="../assets/logo.png">
      <bug-form></bug-form>
      <div class="row d-flex justify-content-center">
        <div class="col-6 mt-4 pb-4">
          <div :class="{'openBG': !bug.closed}" class="mt-3 text-left card p-3" v-for="bug in bugs" id="bugs">
            <router-link class="text-dark" :to="'/BugDetails/'+bug._id">
              <b>{{bug.creator}}</b><br>
              <b>Title: </b>{{bug.title}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugForm from '@/components/BugForm'
  export default {
    name: 'home',
    components: {
      BugForm
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
    }
  }
</script>
<style>
  .openBG {
    background-color: rgba(250, 90, 90, 0.845);
  }

  #bugs {
    transition: all 0.1s linear
  }

  #bugs:hover {
    box-sizing: border-box;
    border: 1px solid black;
  }

  a:hover {
    text-decoration: none
  }
</style>