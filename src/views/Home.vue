<template>
  <v-main>
    <Toolbar />
    <section>
      <v-parallax src="../assets/parking.jpg" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">SécuPark</h1>
          <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Votre parking n'a jamais été aussi sûr !</div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
          column
          wrap
          class="my-5"
          align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="featurette-heading">SecuPark<span class="text-muted"> C'est quoi ?</span></h2>
            <p class="lead" >Une solution pour une <strong  style="font-size: 25px">gestion automatisée</strong> de votre <strong style="font-size: 25px">parking de résidence et d'entreprises</strong>.</p>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <v-divider></v-divider>
    <br>

    <section>
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="4">
            <div class="subheading">
              <v-card class="elevation-0 transparent">
                <v-img
                    src="../assets/surv.svg"
                    aspect-ratio="1.7"
                ></v-img>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Des cameras</div>
                </v-card-title>
                <v-card-text>
                  Nos caméras sont disposés à l'entrée de votre parking afin d'identifier les véhicules qui souhaites entrer. En comparant votre véhicule avec la base de données, le système laisse passé le véhicule ou non.
                </v-card-text>
              </v-card>
            </div>
            <br>
            <div class="subheading">
              <v-card class="elevation-0 transparent">
                <v-img
                    src="../assets/undraw_security_o890.svg"
                    aspect-ratio="1.7"
                ></v-img>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Confiance</div>
                </v-card-title>
                <v-card-text>
                  En cas d'intrusion dans votre parking, notre système identifie le véhicule comme étant étrangé. Chaque visite est enregitré dans un historique de visite uniquement accesible par un administrateur.
                </v-card-text>
              </v-card>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="subheading">
              <v-card class="elevation-0 transparent">
                <v-img
                    src="../assets/usersDraw.png"
                    aspect-ratio="1.7"
                ></v-img>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Un enregistrement facile et rapide</div>
                </v-card-title>
                <v-card-text>
                  Chaque utilisateur disposant d'un compte, peut enregistrer son véhicule ou celui d'un invité facile à l'aide d'un simple clic.
                </v-card-text>
              </v-card>
            </div>
            <br>
            <div class="subheading">
              <div class="subheading">
                <v-card class="elevation-0 transparent">
                  <v-img
                      src="../assets/undraw_Firmware_jw6u.svg"
                      aspect-ratio="1.7"
                  ></v-img>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Principe de fonctionnement</div>
                  </v-card-title>
                  <v-card-text>
                    L'Intelligence Aritificielle de notre système vérifie dans un premier temps si la photo capturée contient une voiture, puis extrait le numéro de la plaque minéralogique. Une fois le numéro extrait, le résultat est comparé avec la base de données.
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-divider></v-divider>
    <br>

    <!--section>
      <v-parallax src="../assets/code2.png" height="380">
        <v-layout column align-center justify-center>
          <div class="headline text-darken-1 text-xs-center">L'Intelligence Aritificielle de notre système vérifie dans un premier temps si la photo capturée contient une voiture, puis extrait le numéro de plaque minéralogique </div>
          <em>Une fois le numéro extrait,le resultat est comparé avec la base de données</em>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            Plus d'information
          </v-btn>
        </v-layout>
      </v-parallax>
    </section-->

    <v-parallax
        dark
        height="350"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2s4sNNcKBtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </v-col>
      </v-row>
    </v-parallax>

    <br>
    <v-divider></v-divider>
    <br>


    <section>
      <v-container>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline"><h2>L'équipe</h2></div>
        </v-card-title>
        <br>
        <v-row no-gutters>
          <template v-for="person in persons">
            <v-col :key="person">
              <v-card
                  class="pa-2 elevation-0 transparent"
                  outlined
                  tile
              >
                <v-img class="bd-placeholder-img rounded-circle" width="140" height="140" :src="person.img" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"/>
                <rect width="100%" height="100%" fill="#777"/>
                <text x="50%" y="50%" fill="#777" dy=".3em"></text>
                <h3>{{ person.name }}</h3>
                <h4>{{ person.rule }}</h4>
              </v-card>
            </v-col>
            <v-responsive
                v-if="person === 4"
                :key="`width-${person}`"
                width="100%"
            ></v-responsive>
          </template>
        </v-row>
      </v-container>
    </section>

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
  data: function () {
    return {
      persons:[
        {name : 'FILIPE Yoan', rule: 'CEO', img: require('@/assets/yoan.png')},
        {name : 'DADOU Emile', rule: 'CTO', img: require('@/assets/emile.png')},
        {name : 'BATT Lionel', rule: 'Développeur', img: require('@/assets/lionel.png')},
        {name : 'FLORENTIN Lucas', rule: 'Développeur', img: require('@/assets/lucas.png')}
      ]
    }
  }
}
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
