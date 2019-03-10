<template>
  <div class="home">
    <div class="container">
      <!-- <img class="mb-5 vueLogo" alt="Vue logo" src="../assets/logo.png"> -->
      <h1 class="mb-4"><u><i>Bug Squasher</i></u></h1>
      <bug-form></bug-form>
      <div class="row d-flex justify-content-center">
        <table class="table mt-4 pb-4 border border-dark">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bug Creator</th>
              <th scope="col">Bug Title</th>
              <th scope="col">Bug Status</th>
              <th scope="col">Time Created</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="{'openBG': !bug.closed}" v-for="(bug, index) in bugs" id="bugs">
              <!-- <router-link class="text-dark" :to="'/BugDetails/'+bug._id"> -->
              <th scope="row">{{index + 1}}</th>
              <td>{{bug.creator}}</td>
              <td>{{bug.title}}</td>
              <td v-if="!bug.closed">Open</td>
              <td v-else>Closed</td>
              <!-- </router-link> -->
            </tr>
          </tbody>
        </table>
      </div>

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
    },
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

  .vueLogo {
    max-height: 50px;
    width: auto;
  }
</style>