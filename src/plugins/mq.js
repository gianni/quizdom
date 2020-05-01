import Vue from 'vue'
import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
  breakpoints: { 
    sm: 450,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm'
})