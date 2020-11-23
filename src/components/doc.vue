<template>
 <v-container fluid  class="my-5 pa-5">

     <h1>give a prescreption</h1>
  
  <ValidationObserver ref="observer">
    <form class="pa-5" >
      
      <ValidationProvider name="Class" >
       
        <v-select
          v-model="post.$class"
          :items="options"
       
          label="Select"
          data-vv-name="select"
        
        ></v-select>
      </ValidationProvider>
      <ValidationProvider  name="recordid">
       <v-text-field
          v-model="post.recordId"
          :counter="10"
          :error-messages="errors"
          label="prescreptionID"
          required
        ></v-text-field>
      </ValidationProvider>
        <ValidationProvider  name="time">
       <v-text-field
          v-model="post.time"
          :counter="10"
          :error-messages="errors"
          label="time"
          required
        ></v-text-field>
      </ValidationProvider>
        <ValidationProvider  name="comments">
       <v-text-field
          v-model="post.comments"
          :counter="10"
          :error-messages="errors"
          label="comments"
          required
        ></v-text-field>
         </ValidationProvider>
           <ValidationProvider  name="description">
       <v-text-field
          v-model="post.description"
          :counter="10"
          :error-messages="errors"
          label="descirption"
          required
        ></v-text-field>
      </ValidationProvider>
        <ValidationProvider  name="drug">
       <v-text-field
          v-model="post.drug"
          :counter="10"
          :error-messages="errors"
          label="drug"
          required
        ></v-text-field>
      </ValidationProvider>
        <ValidationProvider  name="pharma">
       <v-text-field
          v-model="post.pharma"
          :counter="10"
          :error-messages="errors"
          label="pharma"
          required
        ></v-text-field>
      </ValidationProvider>
       <ValidationProvider  name="nurse">
       <v-text-field
          v-model="post.nurse"
          :counter="10"
          :error-messages="errors"
          label="nurse"
          required
        ></v-text-field>
      </ValidationProvider>
        <ValidationProvider  name="doctor">
          <v-select
          v-model="post.doctor"
          :items="options2"
       
          label="doctor"
          data-vv-name="select"
        
        ></v-select>
      </ValidationProvider>
      <ValidationProvider  name="patient" >
            <v-select
          v-model="post.patient"
          :items="options1"
       
          label="Patient"
          data-vv-name="select"
        
        ></v-select>
      </ValidationProvider>
      <ValidationProvider  name="meds" rules="required|email">
        <v-text-field
          v-model="post.meds"
          :error-messages="errors"
          label="meds"
          required
        ></v-text-field>
      </ValidationProvider>
     
      

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </ValidationObserver>
  

 </v-container>
</template>

<script>


 
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';

  export default {

  mixins: [actionsMixin],
    components: {
  
    },
    data: () => ({
      action: cookieValue,
      post: {},
      data: {},
      name: '',
      email: '',
      select: null,
      options: [
     { value: 'org.lms.ehr.CreatePrescription', text: 'Create Prescription' },
        ],
      options1: [
          { value: 'org.lms.ehr.Patient#medj', text: 'Medj' },
  ],
       options2: [
          { value: 'org.lms.ehr.Doctor#omar', text: 'omar' },
  ],
      checkbox: null,
    }),

    methods: {
      async submit () {
        const headers = {'X-Access-Token': cookieValue,
      "Content-Type": "application/json"
     

      };
      const { data } = await fetch(
        "http://localhost:3000/api/org.lms.ehr.CreatePrescription",{
          method: "POST",
          body:JSON.stringify(this.post),
          headers:headers
        },
      );
      this.data = data;
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },


    













    },
  }
</script>