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
            <p>Entrez votre nouveau mot de passe</p>
            <hr>
            <div class="alert alert-danger" role="alert">
            </div>
            <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="email"
                required
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                :rules="passrule"
                label="mot de passe"
                required
            ></v-text-field>
            <v-text-field
                v-model="form.ConfirmPassword"
                :rules="passrule"
                label="confirmation mot de passe"
                required
            ></v-text-field>
          <br>
            <v-btn
                color="success"
                class="mr-4"
                type="submit"
                @click="ResetPassword"
            >
              Validé
            </v-btn>
          </div>
        </div>
      </div>
    </v-form>
  </v-main>
</template>
<script>
import axios from 'axios';
const querystring = require('querystring');
export default {
  name: 'resetPassword',
  data() {
    return {
      form: {
        email: '',
        password:'',
        ConfirmPassword:''
      },
      passrule: [
        v => !!v || 'Mot de passe requis',
        v => (v && v.length <= 4) || 'le mot de passe doit fair au moins 8 caractère',
      ],
      emailRules: [
        v => !!v || 'Ce champs est requis',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      loading: false,
      message: '',
      error_msg: false,
    };
  },
  methods: {
    ResetPassword(){
      const query = querystring.stringify({
        "token": this.$route.query.token
      });
      if(this.form.password === this.form.ConfirmPassword){
        // eslint-disable-next-line no-console
        console.log(this.form.password, this.form.ConfirmPassword)
        axios.post('https://fractalepasswordkeeper.herokuapp.com/api/secupark/reset-passwords?' + query + '&email='+ this.form.email ,this.form);
        // eslint-disable-next-line no-console
        //console.log(this.response.data)
        this.$router.push('/login');
      }
    }
    //PAS TOUCHER
    // eslint-disable-next-line no-console
    //console.log("email : "+this.form);
    //UserService.postForgetPassword(this.form);
    //}
  }
};
</script>

<style>
.custom {
  background-image: url("../assets/parking.jpg");
}
</style>