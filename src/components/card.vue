<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
        Prescreption
        </div>
        <v-list-item-title class="headline mb-1">
        Give a Prescreption
        </v-list-item-title>
        <v-list-item-subtitle>Define a therapie</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="30"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      to="/doc"
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';


export default {
  mixins: [actionsMixin],
  data: () =>({
    action: cookieValue,
    data: {},
  
  }),
  
beforeMount(){
    this.getName();
    
  },

methods:{ 
  
 
  async getName(){
      const headers = { 'X-Access-Token': cookieValue };
      const res = await fetch('http://localhost:3000/api/org.lms.ehr.MedicalRecords',{headers});
      const data = await res.json();
      this.data = data;
     
    
   
   
    },
    
}

}
</script>
