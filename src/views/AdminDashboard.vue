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

    <v-container fluid>
    <v-layout column>
      <v-card>
        <v-row>
          <v-col cols="8">
            <br>
            <v-card-title>
              <h1>Enregistrer mon véhicule</h1>
            </v-card-title>
            <br>
            <v-card-actions class="justify-center">
              <v-btn @click="addCar" elevation="2" large x-large class="primary">Accéder</v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="4">
            <v-img src="../assets/car.png"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout column>
        <v-card>
          <v-row>
            <v-col cols="4">
              <v-img src="../assets/visiteur.png"></v-img>
            </v-col>
            <v-col cols="8">
              <br>
              <v-card-title>
                <h1>Enregistrer le véhicule d'un invité</h1>
              </v-card-title>
              <br>
              <v-card-actions class="justify-center">
                <v-btn @click="addInvitCar" elevation="2" large x-large class="primary">Accéder</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout column>
        <v-card>
          <v-row>
            <v-col cols="8">
              <br>
              <v-card-title>
                <h1>Voir l'historique des visites</h1>
              </v-card-title>
              <br>
              <v-card-actions class="justify-center">
                <v-btn @click="addCar" elevation="2" large x-large class="primary">Accéder</v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="4">
              <v-img src="../assets/admin.png"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-layout>
    </v-container>

    <v-footer dark padless>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>SécuPark</strong> <a href="#">Vie privée</a> &middot; <a href="#">Termes</a>
      </v-card-text>
    </v-footer>

  </v-main>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
export default {
  name: 'toolabar',
  components: {
    Toolbar,
  },
  methods: {
    addInvitCar() {
      this.$router.replace('/carGuest')
    },
    addCar(){
      this.$router.replace('/NewCar')
    }
  }
}
</script>

<style scoped>

</style>