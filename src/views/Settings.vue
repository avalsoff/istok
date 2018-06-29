<template>
  <div class="wrapper">
    <app-header heading="Настройки"></app-header>
    <h2 class="settings__heading">Основные</h2>
    <ul class="settings">
      <li class="settings__item">
        <label class="settings__toggle">
          Местные уведомления
          <input type="checkbox" name="online">
        </label>
      </li>
      <li class="settings__item">
        <label class="settings__toggle">
          Местные уведомления
          <input type="checkbox" name="online">
        </label>
      </li>
    </ul>
    <ul class="settings settings--danger">
      <li class="settings__item">
        <button @click="reload" class="settings__set">Cбросить карточки</button>
      </li>
      <li class="settings__item">
        <button class="settings__set">Выйти из аккаунта</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixins";

.wrapper {
  padding-top: .1px;
  background-color: #FBFBFC;
  background-repeat: no-repeat;
  background-image: url('../assets/istok-blue.png');
  background-position: 50% 96%;
  background-size: auto;
  font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
  font-size: get-vw(14px);
}

.settings {
  @include list-reboot();  
  background-color: #fff;
  border-top: get-vw(1px) solid rgba($color: #000, $alpha: .05);
  border-bottom: get-vw(1px) solid rgba($color: #000, $alpha: .05);

  &__heading {
    opacity: 0.3;
    font-size: get-vw(14px);
    font-family: 'Geometria', Arial, Helvetica, sans-serif;
    margin: get-vw(20px) get-vw(15px) get-vw(10px);
  }

  &__item {
    display: block;
    margin: 0 get-vw(15px);

    &:last-child .settings__toggle {
      border-bottom: none;
    }
  }

  &__toggle {
    padding: get-vw(4px) 0;
    display: flex;
    align-items: center;
    border-bottom: get-vw(1px) solid rgba($color: #000, $alpha: .05);
  }

  &__set {
    display: block;
    width: 100%;
    text-align: left;
    padding: get-vw(13px) get-vw(15px) get-vw(14px);
    border: none;
    background-color: #fff;
    font-size: get-vw(14px);
    font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
  }
}


.settings--danger {  
  background-color: #FBFBFC;
  border: none;
  .settings {
    &__item {
      margin: 0;
      margin-top: get-vw(25px);
      background-color: #fff;    
      border-bottom: get-vw(1px) solid rgba($color: #000, $alpha: .05);
      border-top: get-vw(1px) solid rgba($color: #000, $alpha: .05);
    }

    &__set {
      color: #f00;
    }
  }
}





$white: #fff;
$green: #53d76a;
$grey: #d3d3d3;

input[type="checkbox"] {
  margin-left: auto;
  margin-right: 0;
  outline: none;
  appearance: none;
  background-color: darken($white, 2%);
  border: get-vw(1px) solid $grey;
  border-radius: get-vw(26px);
  box-shadow: inset 0 0 0 get-vw(1px) $grey;
  cursor: pointer;
  height: get-vw(28px);
  position: relative;
  transition: border .25s .15s,
              box-shadow .25s .3s,
              padding .25s;
  width: get-vw(44px);
  vertical-align: top;
  
  &:after {
    background-color: $white;
    border: get-vw(1px) solid $grey;
    border-radius: get-vw(24px);
    box-shadow: inset 0 get-vw(-3px) get-vw(3px) hsla(0,0%,0%,.025),
                0 get-vw(1px) get-vw(4px) hsla(0,0%,0%,.15),
                0 get-vw(4px) get-vw(4px) hsla(0,0%,0%,.1);
    content: '';
    display: block;
    height: get-vw(24px);
    left: 0;
    position: absolute;
    right: get-vw(16px);
    top: 0;
    transition: border .25s .15s,
                left .25s .1s,
                right .15s .175s;
  }
  &:checked {
    border-color: $green;
    box-shadow: inset 0 0 0 get-vw(13px) $green;
    padding-left: get-vw(18px);
    transition: border .25s,
                box-shadow .25s,
                padding .25s .15s;
  
    &:after {
      border-color: $green;
      left: get-vw(16px);
      right: 0;
      transition: border .25s,
                  left .15s .25s,
                  right .25s .175s;
    }
  }
}
</style>

<script>
import Header from '../components/Header';

export default {
  components: {
    'app-header': Header
  },
  methods: {
    goToDisclamer() {
      this.$router.push('disclaimer');
    },
    reload() {
      localStorage.clear();
      location.reload();
    }
  },
}
</script>