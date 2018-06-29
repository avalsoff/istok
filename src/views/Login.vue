<template>
  <div class="wrapper">
    <div class="login">
      <ul class="login__languages">
        <li class="login__language">
          <a class="login__flag login__flag--ru">Русский</a>
        </li>
        <li class="login__language">
          <a class="login__flag  login__flag--en">English</a>
        </li>
      </ul>
      <form class="login__form">
        <h1 class="login__heading">Вход</h1>
        <input class="login__input" type="text" name="login" placeholder="Имя пользователя">
        <input class="login__input" type="text" name="password" placeholder="Пароль">
        <button class="login__submit" type="submit">Войти</button>
      </form>
      <span class="login__or">Или</span>
      <ul class="login__socials">
        <li class="login__social">
          <a class="login__social-icon login__social-icon--vk">VK</a>
        </li>
        <li class="login__social">
          <a class="login__social-icon login__social-icon--google">Google Plus</a>
        </li>
        <li class="login__social">
          <a class="login__social-icon login__social-icon--fb">Facebook</a>
        </li>
      </ul>
      <a class="login__skip">Пропустить этот шаг</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixins";

.wrapper {
  padding-top: .1px;
  background-color: #1C236E;
  background-repeat: no-repeat;
  background-image: url('../assets/wave-blue.svg'),
                    url('../assets/istok-white.png');
  background-position: 0 14%,
                       50% 3.5%;
  background-size: contain,
                   auto;
}

.login {
  color: #fff;
  &__languages {
    @include list-reboot();
    margin-top: 183px;
    text-align: center;
  }

  &__language {
    display: inline-block;
    vertical-align: top;
    margin: 0 12px;
  }

  &__flag {
    display: block;
    font-size: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-size: contain;
    background-repeat: no-repeat;

    &--ru {
      background-image: url('../assets/flag-russia.svg');
    }

    &--en {
      background-image: url('../assets/flag-us.svg');
    }
  }

  &__heading {
    text-align: center;
    font-family: 'Geometria';
    font-size: 28px;
    margin-top: 21px;
    margin-bottom: 30px;
  }

  &__input {
    display: block;
    text-align: center;
    border-radius: 7px;
    padding: 10px 10px 10px;
    border: none;
    background: rgba($color: #fff, $alpha: .1);
    color: rgba($color: #fff, $alpha: .3);
    font-size: 14px;
    margin: 20px auto 0;
    width: 200px;

    &::placeholder {
      color: rgba($color: #fff, $alpha: .3);
      font-size: 14px;
    }
  }

  &__submit {
    display: block;
    margin: 20px auto 0;
    padding: 10px 0 9px;
    width: 120px;
    border-radius: 20px;
    background: none;
    border: 1px solid  #fff;
    color: #fff;
    font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
    font-size: 12px;
  }

  &__or {
    margin: 25px auto 0;
    width: 200px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Geometria', Arial, Helvetica, sans-serif;
    opacity: .3;
    font-size: 10px;

    &::before,
    &::after {
      position: relative;
      top: 6px;
      content: "";
      flex-grow: 1;
      background-color: #fff;
      height: 1px;
    }

    &::before {
      margin-right: 10px;
    }
    &::after {
      margin-left: 10px;
    }
  }

  &__socials {
    @include list-reboot();
    text-align: center;
    margin-top: 8px;
  }

  &__social {
    display: inline-block;
    vertical-align: top;
    margin: 5px;
  }

  &__social-icon {
    display: block;
    font-size: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    background-size: initial;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    &--vk {
      background-image: url('../assets/vk.svg');
      background-size: 15px;
    }

    &--google {
      background-image: url('../assets/google.svg');
      background-size: 11px;
    }

    &--fb {
      background-image: url('../assets/fb.svg');
      background-size: 8px;
    }
  }

  &__skip {
    display: block;
    margin-top: 7px;
    text-align: center;
    font-size: 10px;
    font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
    opacity: 0.3;
  }
}

</style>

<script>
export default {
  methods: {
    goToDisclamer() {
      this.$router.push('disclaimer');
    }
  }
}
</script>