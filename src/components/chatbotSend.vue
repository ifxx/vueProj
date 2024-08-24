<template>
<div id="app">
  <form @submit.prevent="sendRequest">
    <div class="inputBox">
      <input class="inputTextBox" placeholder="Input text"  type="text" id="inputContent" v-model="inputContent" required />
      <button class="inputButton" type="submit">Enter</button>

    </div>
  </form>
  <div v-if="loading" class="loading">loading...</div>
  <div v-if="responseMessage" class="response">
    <Vuemarkdown :source="markdownText"/>
    <!-- <p>{{ responseMessage.choices[0].message.content }}</p> -->
  </div>
  </div>
</template>

<script>
import axios from "axios";
import Vuemarkdown from 'vue3-markdown-it';

export default {
 components: {
  Vuemarkdown
},
name: "App",
props: {
  token: {
    type: String,
    required: true,
  }
},
data() {
  return {
    inputContent: "",
    loading: false,
    responseMessage: null,
    markdownText: null
  };
},
methods: {
  sendRequest() {
    this.loading = true;
    const options = {
      method: 'POST',
      url: 'v2/inference/deployments/d35d860435a747d0/chat/completions',
      params: { 'api-version': '2023-05-15' },
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      data: {
        messages: [
          {
            role: "user",
            content: this.inputContent
          }
        ]
      }
    };

    axios.request(options)
      .then((response) => {
        this.responseMessage = response.data;
        this.markdownText = response.data.choices[0].message.content
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        this.responseMessage = "请求失败，请检查输入或稍后重试。";
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
}
</script>

<style scoped>
.loading {
color: #3b8070;
display: flex;
justify-content: center;
}

.inputBox{
  display: flex;        
  justify-content: center; 
  margin-top: 100px;   
}


.response {
  font-family: 'Arial', sans-serif; 
  font-size: 16px;
  line-height: 1.6; 
  background-color: #f5f5f5; 
  color: #333; 
  margin: 20px auto;
  padding: 20px; 
  width: 60%; 
  box-sizing: border-box; 
}

.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6 {
  font-size: 1.5em; 

  color: #333; 

  margin-bottom: 10px; 
}

.markdown-content p {
  font-size: 1em; 
  
  margin-bottom: 15px; 
}

.markdown-content code {
 
  background-color: #eaeaea; 
  
  border: 1px solid #ccc; 
  
  padding: 2px 5px; 
}

.markdown-content pre {

  background-color: #f5f5f5; 
  
  border: 1px solid #ddd; 
  
  padding: 10px; 
  
  margin: 20px 0; 
  
  font-size: 14px; 
 
  overflow-x: auto; 
}

.markdown-content a {
  color: #007bff; 
  
  &:hover {
    color: #0056b3; 
  }
}

.markdown-content ul, .markdown-content ol {

  margin-bottom: 10px; 
}

.markdown-content img {

  max-width: 100%; 
  
  height: auto;
}

button {
  display: inline-block;
  margin-left: 10px;
  padding: 8px 12px;
  color: #fff;
  background-color: #337ab7;
  border: 1px solid #2e6da4;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #286090;
}

button:active {
  background-color: #204d74;
  box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
}

input[type="text"] {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 500px;
}
</style>