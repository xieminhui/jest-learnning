<template>
   <div>
      <MessageList :messages="messages"></MessageList>
   </div>
</template>

<script>
import MessageList from './MessageList'

export default {
  name: 'jest',
  data () {
    return {
      messages: ['Hey John', 'Howdy Paco']
    }
  },
  components: {
    MessageList
  }
}
</script>
