
<template>

  <transition name="fade">
    <div v-if="visible" class="toast" :class="type">
      <span>{{ message }}</span>
      <button @click="hideToast">✖</button>
    </div>
  </transition>

</template>




<script>

export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showToast() {
      this.visible = true;
    },
    hideToast() {
      this.visible = false;
    },
  },
  watch: {
    message() {
      this.showToast();
    },
  },
};

</script>



<style scoped lang="scss">

.toast {
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #DB00FF;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.toast.info {
  background-color: #000000;
}

.toast.success {
  background-color: #000000;
}

.toast.error {
  background-color: #000000;
}

.toast button {
  background: none;
  border: none;
  color: #000000;
  font-size: 1.2em;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>