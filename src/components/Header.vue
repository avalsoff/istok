<template>
  <header class="header">
    <h1 class="header__heading"> {{ heading }} </h1>
    <router-link to="/menu" tag="button" class="header__menu-btn"></router-link>
  </header>
</template>

<style lang="scss" scoped>
  @import "../scss/mixins";

  .header {
    position: sticky;
    top: 0;
    background: #1C236E;
    height: get-vw(44px);

    &__heading {
      margin: 0;
      font-size: get-vw(17px);
      line-height: get-vw(45px);
      font-family: 'SF Ultralight';
      color: #fff;
      text-align: center;
    }

    &__menu-btn {
      position: absolute;
      top: get-vw(15px);
      left: get-vw(15px);
      width: get-vw(20px);
      height: get-vw(14px);
      border: none;
      background: url('../assets/menu.svg');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  
</style>

<style lang="scss" scoped>
  
</style>

<script>
export default {
  props: ['heading'],
}

</script>

