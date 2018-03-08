import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calcula from '@/components/Calculadora'
import CalculadoraCompleta from '@/components/CalculadoraCompleta'

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
    }
  ]
})
