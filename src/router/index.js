import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calcula from '@/components/Calculadora'
import CalculadoraCompleta from '@/components/CalculadoraCompleta'
import UsandoAPI from '@/components/UsandoAPI'
import Cep from '@/components/Cep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/Calcula',
    	name: 'Calcula',
    	component: Calcula

    },
    {
      path: '/Calculadora',
      name: '/CalculadoraCompleta',
      component: CalculadoraCompleta
    },
    {
      path: '/Api',
      name: '/UsandoAPI',
      component: UsandoAPI
    },
    {
      path: '/Cep',
      name: '/Cep',
      component: Cep
    }
  ]
})
