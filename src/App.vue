<template>

<AuthToken/>
</template>

<script>

import AuthToken  from './components/AuthToken.vue';

export default {
  name: 'App',
  components: {
    AuthToken
  }
}
</script>

<style>
/* 基本样式 */
body {
  font-family: Arial, sans-serif;
}

/* 输入框样式 */
input[type="text"] {
  width: 200px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  border-color: #66afe9;
  outline: none;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .5);
}

/* 按钮样式 */
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
</style>
