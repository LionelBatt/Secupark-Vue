<template>
  <v-main>
    <Toolbar />
    <v-parallax dark src="../assets/admin.png">
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="text-h1  mb-4 deep-purple--text" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">
            Espace Administrateur
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-divider></v-divider>
    <br>
    <v-data-table
        :headers="headers"
        :items="history"
        class="elevation-1"
    >
      <template v-slot:item.Model="{ item }">
        <v-chip
            :color="getColor(item.Model)"
            dark
        >
          {{ item.Model }}
        </v-chip>
      </template>
    </v-data-table>

    <v-footer dark padless>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>SécuPark</strong> <a href="#">Vie privée</a> &middot; <a href="#">Termes</a>
      </v-card-text>
    </v-footer>
  </v-main>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import axios from "axios";
import authHeader from "../services/auth.header";
export default {
  name: 'dataTable',
  components: {
    Toolbar,
  },
  data: () => {
    return {
      history: [],
      loading: true,
      headers: [
        { text: "Numéro de plaque", value: "plaque" },
        { text: "Marque voiture", value: "brand" },
        { text: "Model", value: "model" },
        { text: "? Visteurs", value: "is_visitor" },
        { text: "Nom du visiteur", value: "owner" },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.readDataFromAPI();
      },
    },
    deep: true,
  },
  methods: {
    //Reading data from API method.
    readDataFromAPI() {
      this.loading = true;
      axios.get('https://fractalepasswordkeeper.herokuapp.com/api/secupark/history',{headers: authHeader()})
          .then((response) => {
            //Then injecting the result to datatable parameters.
            this.loading = false;
            this.history = response.data;
          });
    },
  },
  //this will trigger in the onReady State
  mounted() {
    this.readDataFromAPI();
  },
};
</script>

<style scoped>

</style>