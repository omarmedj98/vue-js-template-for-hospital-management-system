<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="cyan darken-1"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>MY prescription</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
      >
        <template v-for="(item, index) in users">
          <v-list-item :key="item.recordId">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.recordId"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.description"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.comments"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.time"></v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';

  export default {
    mixins: [actionsMixin],

    data: () => ({
      selected:[5],
      users:[],
      items: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          title: 'Ali Connors',
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          subtitle: "Wish I could come, but I'm out of town this weekend.",
          title: 'me, Scrott, Jennifer',
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra Adams',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: 'Trevor Hansen',
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: 'Britta Holt',
        },
      ],
    }),
   beforeMount(){
    this.getName();

  },

   methods :{
      async getName(){
      const headers = { 'X-Access-Token': cookieValue };
      const res = await fetch('http://localhost:3000/api/org.lms.ehr.Prescription',{headers});
      const data = await res.json();
      this.users= data;
      
    },
   }
  
  
  
  
  
  }














  
</script>