<template>
   
    <v-alert
      :value="true"
      color="error"
      icon="warning"
      outline
      dismissible=""
      @input="onClose"
    >
      {{text}}
    </v-alert>
  
</template>

<script>
export default {
    props: ['text'],
    methods: {
        onClose() {
            console.log('closing')
            this.$store.dispatch('clearError')
        }
    }
}
</script>
