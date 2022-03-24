<template>
  <button>
    <slot> </slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  background-color: #7A7A7A;
  padding: 12px 20px;
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
}
</style>
