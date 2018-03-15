<template>
  <section class="Por">
    <ul>
      <li v-for="resposta in respostas">
        <p>Name:<strong>{{resposta.name}}</strong></p>
        <p> Email:{{resposta.email}}</p>
      </li>
    </ul>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  name: 'hello',
  data () {
    return {
      respostas: [],
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/users`)
    .then(response => {
      this.respostas = response.data
    })
  }
}
</script>
<style>
.Por{
    display: flex;
	justify-content: center;
	align-items: center;
	}
</style>