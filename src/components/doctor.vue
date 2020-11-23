<template>

  <v-card class="ma-10 pa-5">
    <v-card-title>
      My patient
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
     :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="patient"
    show-expand
    class="elevation-1"
     >
     <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">

    <table>
  <tr>
    <th>Medical_record_id:</th>
    <td :colspan="headers.length" >{{item.record_id}}</td>
  </tr>
  <tr>
    <th>Description:</th>  
    <td :colspan="headers.length" >{{item.description}}</td>      
  </tr>  
  <tr>
    <th>Allergies:</th>
    <td :colspan="headers.length">{{item.Allergies}}</td>
  </tr>
  <tr>
    <th>smoking:</th>
    <td :colspan="headers.length">{{item.smoking}}</td>
  </tr>
  <tr>
    <th>authorized:</th>
    <td :colspan="headers.length">{{item.authorized}}</td>
  </tr>
    <tr>
    <th>Prescription:</th>
    <td :colspan="headers.length">{{item.prescription}}</td>
  </tr>
    <tr>
    <th>Appointment:</th>
    <td :colspan="headers.length">{{item.app}}</td>
  </tr>
</table>

    </template>
    
    
    </v-data-table>
    

  </v-card>
</template>

<script>
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';
export default {
  name:'App',
   mixins: [actionsMixin],
  data() {
    return {  
          expanded: [],
      singleExpand: false,
    headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'patientId',
          },
          { text: 'First Name', value: 'patient_First_Name' },
          { text: 'Last Name', value: 'patient_Last_Name' },
        
        ],
      users: []
    }
  },

 beforeMount(){
    this.getName();
  },



  methods :{
      async getName(){
      const headers = { 'X-Access-Token': cookieValue };
      const res = await fetch('http://localhost:3000/api/org.lms.ehr.MedicalRecords',{headers});
      const data = await res.json();
      this.users= data;
    },

    
  }

}
</script>
<style></style>