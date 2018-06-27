<template>
  <div v-on:click.self="close" class="overlay">    
    <transition name="slide">
      <div class="menu">
        <h3 class="menu__heading">Меню</h3>
        <ul class="menu__items">
          <li class="menu__item">
            <a class="menu__link">Настройки</a>
          </li>
          <li class="menu__item">
            <a class="menu__link">О нас</a>
          </li>
          <li class="menu__item menu__item--bottom">
            <a class="menu__link">Выйти</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform .15s;
  }
  .slide-enter {
    transform: translateX(0);
  }
  .slide-leave-to {  
    transform: translateX(-100%);
  }

  .overlay {
    position: fixed;
    z-index: 100;
    min-width: 1000px;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid #000;
  }

  .menu {
    transform: translateX(-110%);
    position: absolute;
    background: #ffffff;
    min-width: 280px;
    height: 600px;
  }

  .menu__items {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu__heading {
    text-align: center;
    font-size: 25px;
    margin: 0;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .menu__item {
    display: block;
  }

  .menu__link {
    display: block;
    font-size: 20px;
    cursor: pointer;
    border-top: 1px solid #000;
    padding: 10px 15px;    
  }

  .menu__item:last-child {
    border-bottom: 1px solid #000;
  }


</style>


<script>

export default {
  methods: {
    close() {
      this.$emit('close');
    }
  }
}

</script>

