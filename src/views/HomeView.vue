<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() { // Функция, возвращающая объект с данными компонента
    return {
      message: 'Hello, Vue!'
    }
  },
  watch: { // Наблюдатели за изменениями данных
    message(newValue, oldValue) {
      console.log(`Message changed from ${oldValue} to ${newValue}`)
    }
  },
  created() { // Хуки жизненного цикла
    console.log('Component created')
  },
  mounted() {
    console.log('Component mounted')
  },
  computed: { // Вычисляемые свойства
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: { // Методы компонента
    greet() {
      alert(this.message)
    }
  }
}
</script>


