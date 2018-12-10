<template>
  <div class="medicine">

    <v-card>
      <v-card-title class="headline font-weight-regular grey  white--text">Добавьте лекарство</v-card-title>
        <v-card-text>
        <v-text-field v-model="pill.title" 
          placeholder="Название"
        ></v-text-field>
        <v-text-field v-model="pill.amount"
          placeholder="Доза"
        ></v-text-field>
        <v-text-field v-model="pill.timesDay"
          placeholder="Раз в день"
        ></v-text-field>
        <v-text-field v-model="pill.days"
          placeholder="Количество дней"
        ></v-text-field>
        <v-layout align-end justify-end>
                <v-btn @click="savePillInfo">Добавить</v-btn>
        </v-layout>
        </v-card-text>
     </v-card>
  <p>Список лекарств:</p>
  <v-list>
          <v-list-tile
            v-for="pill in pills"
            :key="pill.title"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="pill.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
    </v-list>
  

  </div>
</template>

<script>
export default {
  name: 'Medicine',
  props: {
    msg: String
  },
  data: () => ({
    pills : [],
    pill: {
      title : '',
      amount : '',
      timesDay : '',
      days : ''
    }    
  }),
  methods: {
    savePillInfo() {
      this.pills.push(this.pill);
      console.log(this.pills);
      this.pill = {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .medicine {

  }
</style>
