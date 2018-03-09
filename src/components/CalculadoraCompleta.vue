<template>
	<div class="principal">
		<main class="menu">
		  <section>
			<p>{{ Visor }}</p>                     
		  </section>
		  <section class="teclado" >
			<button class="tecla" @click=""> c </button>
			<button class="tecla" @click="">+/-</button>
			<button class="tecla" @click=""> % </button>
			<button class="tecla" @click="setOp('/')"> / </button>
			<button class="tecla" @click="write('7')"> 7 </button>
			<button class="tecla" @click="write('8')"> 8 </button>
			<button class="tecla" @click="write('9')"> 9 </button>
			<button class="tecla" @click="setOp('*')"> * </button>
			<button class="tecla" @click="write('4')"> 4 </button>
			<button class="tecla" @click="write('5')"> 5 </button>
			<button class="tecla" @click="write('6')"> 6 </button>
			<button class="tecla" @click="setOp('-')"> - </button>
			<button class="tecla" @click="write('1')"> 1 </button>
			<button class="tecla" @click="write('2')"> 2 </button>
			<button class="tecla" @click="write('3')"> 3 </button>
			<button class="tecla" @click="setOp('+')"> + </button>
			<button class="tecla" @click="write('0')"> 0 </button>
			<button class="tecla" @click="write(' ')">   </button>
			<button class="tecla" @click=""> , </button>
			<button class="tecla" @click=""> = </button>
		  </section>
	    </main>
	</div>	
</template>
<script>
export default{
   	name:'',
   	data(){
   		return{
   			Value1:'',
   			Value2:'',
   			Operator:'',
   			Visor:0
   		}
   	},
   		methods:{
   			write(number){
   				if(this.Operator === ''){
   					this.Value1 = this.Value1 + number
   					this.Visor = this.Value1
   				}else{
   					this.Value2 = this.Value2 + number
   					this.Visor = this.Value2

   				}
   			},
   			setOp(Operator){
   				this.Operator = Operator
   			}

   		}
}
</script>
<style>
.principal{
	width: 100%;
	height: 100vh;
	background: #FF00FF;
	background-size: 100%;
    padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu{
	width: 300px;
	height: 63.3vh;
	background-color: #FFF;
	justify-content: space-around;

}
.teclado{
	display: flex;
	flex-wrap: wrap;
	align-content:;
	align-items: flex-end;
}
.tecla{
	width: 75px;
	height: 80px;
	font-size: 20px;
	margin:;
	padding:; 
	border-style: solid;
}
	
</style>
