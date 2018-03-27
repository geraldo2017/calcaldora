<template>
		<div class="principal">
			<section>
				<h1 class="cabecalho">Preencha o CEP</h1>
			</section>
			<section>
				<p>CEP:</p><input v-model="cep" type="number" name="CEP" @keyup.enter="getData()">
				<p>Rua:</p><input v-model="rua" type="letter" name="Rua">
				<p>Cidade:</p><input v-model="cidade" type="letter" name="Cidade">
				<p>UF:</p><input v-model="uf" type="letter" name="UF">
			</section>
			<button>Enviar</button>
		</div>
	
</template>
<script>
import axios from 'axios';
export default {
	name: '',
	data () {
	    return {
	    	cep: '',
	    	rua: '',
	    	cidade: '',
	    	uf: '',
	    	dados:[]
	    }
	},
    methods:{
    	getData(){
    		axios.get('http://viacep.com.br/ws/'+this.cep+'/json/')
		    .then(response => {
		      this.rua = response.data.logradouro
		      this.cidade = response.data.localidade
		      this.uf = response.data.uf
		    })		
    	}
    }
}	
</script>
<style>
.principal{
	width: 100%;
	height: 100vh;
	background: #808080;
	background-size: 100%;
	margin: 0;
    padding: 5px;
    flex-direction: column;
	display: flex;
	flex-wrap: wrap;
	justify-content:center;
	align-items:center;

    }
.cabecalho{
	color: #fff; 
}
</style>