<template>
  <v-main>
    <Table/>
  </v-main>
</template>

<script>
import Table from '../components/dataTable';
export default {
  name: 'App',

  components: {
    Table,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>