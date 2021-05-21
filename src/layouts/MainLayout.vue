
 <template>
  <div >
    <q-layout view="hHh lPr fFf">
      <q-header>
        <q-toolbar class="constrain">
            <q-btn
              to="/camera"
              class="large-screen-only q-mr-sm"
              round
              color="amber-7"
              icon="camera" />

          <q-separator
            class="large-screen-only"
            vertical
            spaced
             />

          <q-toolbar-title class="text-grand-hotel" text-h4 text-bold >Oye Sunshine</q-toolbar-title>
          <q-btn
            to="/"
            class="large-screen-only"
              round
              color="amber-7"
              icon="eva-home-outline" />
          
        </q-toolbar> 
       
      </q-header>

      <q-page-container class="bg-grey-5">
       <router-view/>
      </q-page-container>
 
        <q-footer class="bg-teal-9 small-screen-only">
           <q-tabs>
               <q-route-tab
                  to="/"
                  icon="eva-home-outline"
                  label="Home"
                  
               /> 
              <q-route-tab
                  to="/camera" 
                  icon="eva-camera-outline"
                  label="Camera"
                  
              />
              </q-tabs>
        </q-footer>

    
    </q-layout>
  </div>


 

</template>

<script>

export default {
    name: 'MainLayout',
    data(){
      return{

      }

    }
}

</script>

<style lang="sass">


</style>






