<template>
  <div class="modal-wrap" v-if="isOpen" @click="close">
    <div class="modal" @click.stop>
      <div>
        <slot name="main"></slot>
      </div>
      <div class="modal__footer">
        <slot name="footer" :close="close" :confirm="confirm">
          <default-button @click="close">Отмена</default-button>
          &nbsp;
          <default-button @click="confirm">Ok</default-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from './DefaultButton.vue';

export default {
  components: { DefaultButton },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },

  unmounted() {
    document.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    },

    close() {
      this.$emit('close');
    },

    confirm() {
      this.$emit('confirm');
    },
  },
};
</script>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 100;
}

.modal {
  background: #1A1D24;
  top: 50%;
  padding: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 101;
  display: flex;
  flex-direction: column;
}

.modal__footer {
  display: flex;
  align-items: center;
  margin-top: auto;
}
</style>
