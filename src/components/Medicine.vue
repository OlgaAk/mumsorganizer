<template>
<v-container   >
<v-layout row  >
    <v-flex  xs12 sm8 md6>
      <form @submit.prevent="onCreatePill"> 
    <v-card>
      <v-card-title class="headline font-weight-regular grey  white--text">Добавьте лекарство</v-card-title>
        <v-card-text>
        <v-text-field v-model="title" 
          placeholder="Название" required
        ></v-text-field>
        <v-text-field v-model="amount"
          placeholder="Доза" required
          ></v-text-field>
        <v-text-field v-model="timesDay"
          placeholder="Количество раз в день" required
        ></v-text-field>
        <v-text-field v-model="days"
          placeholder="Количество дней" required
        ></v-text-field>
        <v-layout align-end justify-end>
      <v-btn
      fab
      color="light-green darken-4"
      dark
      type="submit"
    >
      <v-icon>add</v-icon>
    </v-btn>
        </v-layout>
        </v-card-text>
     </v-card>
     </form>
    </v-flex>
</v-layout>
<v-layout row  >
    <v-flex class="mt-4 ">
      <v-list>
        <v-subheader > Список лекарств: </v-subheader>
        
          <v-list-tile
            v-for="pill in pills"
            :key="pill.title"
          >
         
            <v-list-tile-content>
              <v-list-tile-title> {{pill.title}}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
      </v-list>
     </v-flex>
</v-layout>
<v-layout  row>
   <v-flex v-for="i in week" :key="`day-${i}`" xs2>
        <v-card class="light-green lighten-5">
          <v-card-text :class="{'red lighten-4' : i == checkDayOfWeek}">{{i}}</v-card-text>
        </v-card>
      </v-flex>
</v-layout>
<v-layout  row>
   <v-flex v-for="i in week" :key="`day-${i}`" xs2>
        <v-card class="light-green lighten-5">
         
          <v-card-text class="">{{i}}</v-card-text>
           <v-card-text  class="corner-ribbon"></v-card-text >
           <v-card-text  class="corner-ribbon-2"></v-card-text >
            <v-card-text  class="corner-ribbon-3"></v-card-text >
        </v-card>
      </v-flex>
</v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Medicine',
  data: () => ({
        title: '',
        amount : '',
        timesDay : null,
        days : null,
        dateAdded: new Date(),
        week: ["Mon", "Tue", "Wed", "Thu", "Fri","Sat", "Sun"]
  }),
  methods: {
 onCreatePill () {
        if (!this.formIsValid) {
          return
        }
        const pillData = {
          title: this.title,
          amount : this.amount,
          timesDay : this.timesDay,
          days : this.days,
          dateAdded: new Date(),
        }
        this.$store.dispatch('createPill', pillData);
        console.log({pillData})
        
      }
  },
  computed: {
    pills() {
      return this.$store.getters.loadedPills
    },
    checkDayOfWeek(){
      return this.dateAdded.toDateString().slice(0,3)
    },
    formIsValid () {
        return this.title !== '' &&
        this.amount !== ''  &&
        this.timesDay !== null &&
        this.days !== null
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .medicine {

  }

  .corner-ribbon{
  width: 25px;
  background: rgb(225, 238, 51);
  position: absolute;
  bottom: 5px;
  right: -4px;
  text-align: center;
  line-height: 1px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  padding:4px
}
  .corner-ribbon-2{
  width: 12px;
  background: blue;
  position: absolute;
  bottom: 1px;
  right: -4px;
  text-align: center;
  line-height: 1px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  padding:3px
}

  .corner-ribbon-3{
  width: 40px;
  background: orange;
  position: absolute;
  bottom: 10px;
  right: -4px;
  text-align: center;
  line-height: 1px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  padding:4px
}
</style>
