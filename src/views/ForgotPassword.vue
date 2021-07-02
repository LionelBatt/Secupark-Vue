<template>
  <v-main>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <div class="container">
        <div class="card-custom card-custom-2">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">Mot de passe oublié</h2>
            <h1></h1>
            <p>Veuillez renseignez l'addresse email utilisé lors de la creation de votre compte</p>
            <hr>
            <div class="alert alert-danger" role="alert">
            </div>
            <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="email"
                required
            ></v-text-field>
          <br>
            <v-btn
                color="success"
                class="mr-4"
                type="submit"
                @click="ForgotPassword"
            >
              Validé
            </v-btn>
            <v-btn
                color="primary"
                class="mr-4"
                type="submit"
                @click="goHome"
            >
              Accueil
            </v-btn>
          </div>
        </div>
      </div>
    </v-form>
  </v-main>
</template>
<script>
import axios from 'axios';
export default {
name: 'ForgotPassword',
data() {
return {
form: {
  email: '',
},
  emailRules: [
    v => !!v || 'Ce champs est requis',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
//user: new User(''),
message: '',
send_mail: false,
  };
},
computed: {
loggedIn() {
return this.$store.state.auth.status.loggedIn;
  }
},
mounted() {
if (this.loggedIn) {
this.$router.push('/UserDashboard');
  }
},
  methods: {
    goHome () {
      this.$router.replace('/')
    },
  ForgotPassword() {
  axios.post('http://localhost:8080/api/secupark/forgot-password', this.form);
  this.send_mail= true;
  this.$router.push('./login');
    }
  }
};
</script>
<style>
.custom {
  background-image: url("../assets/parking.jpg");
}
</style>