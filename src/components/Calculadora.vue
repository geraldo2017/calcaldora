<template>
	<div class="principal">
		<main class="secund">
		  <section>
			<input v-model.number="value1" type="number">
			<input v-model.number="value2" type="number">
			<p> {{ result }} </p>                     
		  </section>
		  <section>
			<button @click="calc('soma')"> + </button>
			<button @click="calc('subtraçao')"> - </button>
			<button @click="calc('multiplicaçao')"> * </button>
			<button @click="calc('divisao')"> / </button>
		  </section>
	    </main>
	</div>	
</template>

<script>
   export default{
   	name:'',
   	data(){
   		return{
   			value1:'',
   			value2:'',
   			result:0
   		}
   	},
   	methods:{
   		calc(operator){
	   		if(operator === 'soma'){
	   			this.result = this.value1 + this.value2
	   		}else if (operator === 'subtraçao'){
	            this.result = this.value1 - this.value2
	   		}else if (operator === 'multiplicaçao'){
	   			this.result = this.value1 * this.value2
	   		}else{
	   			if(this.value2 == '' || this.value2 == 0){
	   				alert('Preencha todos os valores')
	   			}else{
	   				this.result = this.value1 / this.value2
	   			}
	   		}
	   	}
	}
}
</script>

<style>
	.principal{
		width: 100%;
		background: #008000 url(../assets/bglemon.jpg) no-repeat top left;
		background-size: 100%;
		/*background-color: #008000;*/
		padding: 20%;
		/*margin: 200px;*/
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.secund{
		background-color: #fff;
		height: 300px;

		weight: 100;

	}
</style>
