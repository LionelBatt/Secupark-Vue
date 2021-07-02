<template>
  <v-main>
    <Toolbar />
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <br>
      <div class="container">
        <div class="card-custom card-custom-2">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">Résident</h2>
            <h1>Enregistrer un véhicule</h1>
            <p>Veuillez renseignez les informations concernant votre véhicule</p>
            <hr>
            <div class="alert alert-danger" role="alert">
            </div>
            <v-text-field
                v-model="car.plaque"
                :rules="PlaqueRules"
                label="Plaque minéralogique"
                required
            ></v-text-field>
            <v-text-field
                v-model="car.brand"
                :rules="carBrand"
                label="Marque du véhicule"
                required
            ></v-text-field>
            <v-select
                v-model="car.model"
                :items="items"
                :rules="[v => !!v || 'Le model du véhicule est requis']"
                label="Model du véhicule"
                required
            ></v-select>
            <v-select
                v-model="car.parking"
                :items="items2"
                :rules="Parking"
                label="Parking"
                required
            ></v-select>
            <br>
            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="insertData"
                type="submit"
            >
              Enregistrer
            </v-btn>
            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
            >
              Effacer
            </v-btn>
          </div>
        </div>
      </div>
    </v-form>
  </v-main>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import axios from "axios";
import authHeader from "@/services/auth.header";
import carInformation from "../models/carInformation";

export default {
  name: 'toolabar',
  components: {
    Toolbar,
  },
  data: () => ({
    car : new carInformation('','','','','false',''),
    loading: false,
    valid: true,
    PlaqueRules: [
      v => !!v || 'Les informations de la plaque sont requis',
    ],
    carBrand: [
      v => !!v || 'La marque du véhicule est requis',
    ],
    Parking: [
      v => !!v || 'Ce champs est requis',
    ],
    select: null,
    items: [
      'actyon',
      'adam',
      'agila',
      'altea',
      'alto',
      'amarok',
      'ampera',
      'antara',
      'astra',
      'auris',
      'avensis',
      'aveo',
      'aygo',
      'berlingo',
      'bravo',
      'brava',
      'caddy',
      'camaro',
      'captiva',
      'carrera',
      'cayenne',
      'cayman',
      'cerebra',
      'ceed',
      'citigo',
      'civic',
      'charade',
      'chimera',
      'chevy',
      'clio',
      'colorado',
      'colt',
      'copen',
      'corsa',
      'cosmo',
      'croma',
      'cuore',
      'cruze',
      'cygnet',
      'delta',
      'doblo',
      'dokker',
      'ducato',
      'duster',
      'elise',
      'evalia',
      'evora',
      'exeo',
      'exige',
      'fabia',
      'fiesta',
      'flavia',
      'fluence',
      'focus',
      'forester',
      'fiorino',
      'gallardo',
      'genesis',
      'golf',
      'guilietta',
      'ibiza',
      'idea',
      'impala',
      'impreza',
      'infiniti',
      'insignia',
      'jazz',
      'jetta',
      'jimny',
      'jumpy',
      'juke',
      'ka',
      'kalina',
      'kangoo',
      'kizashi',
      'korando',
      'kayron',
      'koleos',
      'kuga',
      'laguna',
      'leaf',
      'legacy',
      'leon',
      'lodgy',
      'logan',
      'malibu',
      'materia',
      'mégane',
      'meriva',
      'micra',
      'mito',
      'modus',
      'mokka',
      'mondeo',
      'movano',
      'mulsanne',
      'murano',
      'musa',
      'navara',
      'orlando',
      'octavia',
      'pajero',
      'panda',
      'panamera',
      'passat',
      'phaeton',
      'picanto',
      'pixo',
      'polo',
      'priora',
      'prius',
      'punto',
      'qashqai',
      'qubo',
      'rexton',
      'rio',
      'rodius',
      'safrane',
      'sandero',
      'scenic',
      'scudo',
      'sedici',
      'sharan',
      'sirion',
      'sorento',
      'soul',
      'splash',
      'spark',
      'swift',
      'tahoe',
      'targa',
      'terios',
      'tepee',
      'tigra',
      'toledo',
      'touran',
      'tourneo',
      'trevis',
      'trezia',
      'ulysse',
      'vantage',
      'venga',
      'veloster',
      'verso',
      'viano',
      'vitara',
      'vito',
      'vivaro',
      'volt',
      'voyager',
      'wingo',
      'yeti',
      'yaris',
      'ypsilon',
      'zafira',
      'zoé',
    ],
    items2:[
      'Courbevoie Coeur de ville',
      'Courbevoie Victor Hugo',
      'La Défense Grande Arche',
      'Epsi Paris la Défense',
    ],
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    insertData() {
      console.log(this.car)
      axios.post('https://fractalepasswordkeeper.herokuapp.com/api/secupark/new-car', this.car,{headers: authHeader()})
      this.$router.push('./UserDashboard');
    },
  },
}
</script>

<style scoped>
</style>