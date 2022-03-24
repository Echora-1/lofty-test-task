<template>
  <div class="layout">
    <nav>
      <div class="nav-container container">
        <default-button class="sign-up-btn" @click.native="openSignUpModal">
          sign up
        </default-button>
      </div>
    </nav>
    <main class="container">
      <slot></slot>
    </main>
    <default-modal
      :isOpen="isSignUpModalOpen"
      @close="closeSignUpModal"
      @confirm="confirmSignUpModal"
    >
      <template #main>
        <div class="sing-up-form">
          <default-input placeholder="USERNAME" v-model="username"/>
          <default-input placeholder="PASSWORD" v-model="password"/>
        </div>
      </template>
      <template #footer="{ confirm }">
        <default-button class="send-btn" @click.native="confirm">
          send
        </default-button>
      </template>
    </default-modal>
  </div>
</template>

<script>
import signUp from '../api';
import DefaultButton from '../components/DefaultButton.vue';
import DefaultModal from '../components/DefaultModal.vue';
import DefaultInput from '../components/DefaultInput.vue';

export default {
  components: { DefaultInput, DefaultModal, DefaultButton },
  data() {
    return {
      isSignUpModalOpen: false,
      username: '',
      password: '',
    };
  },

  methods: {
    openSignUpModal() {
      this.isSignUpModalOpen = true;
    },

    closeSignUpModal() {
      this.isSignUpModalOpen = false;
      this.resetFields();
    },

    async confirmSignUpModal() {
      try {
        await signUp({ username: this.username, password: this.password });
      } catch (err) {
        console.log(`Sign up error: ${err}`);
      }

      this.closeSignUpModal();
    },

    resetFields() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background: #1A1D24;
  min-height: 100vh;
  width: 100vw;
}

nav {
  width: 100%;
  padding: 10px 0;
  background: #393E48;
}

.nav-container {
  display: flex;
  align-items: center;
}

.sign-up-btn {
  margin-left: auto;
}

.sing-up-form {
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
}

.send-btn{
  margin: 20px auto 0;
  background: #F4CC3E;
  color: #171717;
}

</style>
