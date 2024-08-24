 <template>
    <div class="input-and-buttons">
      <button  @click="generate" class="generate-button">Generate</button>
    </div>
    <ChatbotSend v-if="TokenFromAuth" :token="TokenFromAuth"/>
  </template>
  
  <script>
  import authService from '../services/authService';
  import ChatbotSend from './chatbotSend.vue';

  const clientId = process.env.VUE_APP_CLIENT_ID;
  const authUrl = process.env.VUE_APP_AUTH_URL;
  const cra = process.env.VUE_APP_CRA;
  const crb = process.env.VUE_APP_CRB;
  const clientSecret = cra+"$"+crb;

  async function fetchAccessToken() {
    try {
      const accessToken = await authService.getAccessToken(clientId, clientSecret, authUrl);
      return accessToken;
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  }
  
  export default {
    components:{
        ChatbotSend
    },
    data() {
      return {
        TokenFromAuth:null,
      }
    },
    methods: {
      async generate(){
        try{
          this.TokenFromAuth=await fetchAccessToken();
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }

  }
  
  };
  </script>
  
  <style scoped>
  /* .input-and-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .generate-button {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  }
   */
  /* .input-send-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  input {
    flex-grow: 1;
    margin-right: 10px;
  }
  
  .send-button {
    margin-left: 10px;
  } */
  </style>