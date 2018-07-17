<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="center amber-text text-darken-4">Login</h2>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn amber darken-4">Login</button>
      </div>
      <div class="field center">
        Made with <span style="color: #e25555;">&#9829;</span> by I Putu Deta Utama Putra
        <p><a target="_newtab" href="https://web.facebook.com/putudeta11">Facebook</a> - <a arget="_newtab" href="https://github.com/detautama">Github</a> - <a arget="_newtab" href="https://www.linkedin.com/in/deta-u-8bb1a7107">LinkedIn</a></p>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login () {
      if(this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          this.$router.push({ name:'GMap' })
        })
        .catch(err => {
          this.feedback = err.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>

<style>
  .login {
    max-width: 400px;
    margin-top: 60px;
  }

  .login h2 {
    font-size: 2.4em;
  }

  .login .field {
    margin-bottom: 16px;
  }
</style>


