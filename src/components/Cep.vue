<template>
		<div class="principal">
			<section>
				<h1>Preencha o seu CEP</h1>
			</section>
			<section>
				<p>CEP:</p><input v-model="CEP" type="number" name="CEP" @keyup.enter="getData">
				<p>Rua:</p><input v-model="Rua" type="letter" name="Rua">
				<P>Cidade:</p><input v-model="Cidade" type="letter" name="Cidade">
				<p>UF:</p><input v-model="UF" type="letter" name="UF">
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

    }
</style>