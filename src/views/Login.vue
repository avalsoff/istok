<template>
<div class="login">
  <a @click="goToDisclamer" class="skip">Пропустить</a>
  <form class="login-form" action="">
    <div class="field-wrapper">
      <label for="login">Имя пользователя</label>
      <input type="text" name="login" id="login">
    </div>
    <div class="field-wrapper">
      <label for="password">Пароль</label>
      <input type="password" name="password" id="password">
    </div>
    <button class="login-btn" type="submit">Войти</button>
  </form>

  <span class="line">Или</span>
  <div class="or">
    <ul class="socials">
      <li class="social">
        <a href="#" class="social-link vk">
          VK
        </a>
      </li>
      <li class="social">
        <a href="#" class="social-link google">
          Google
        </a>
      </li>
      <li class="social">
        <a href="#" class="social-link facebook">
          Facebook
        </a>
      </li>
    </ul>
  </div>
  <div class="logo">
    <img class="logo-img" src="../assets/logo.png" alt="Тренинг центр - Исток">
  </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  // data: function () {

  // },
  methods: {
    goToDisclamer: function () {
      this.$router.push('disclaimer');
    }
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: relative;
  overflow: hidden;
  height: 100vh;
  /* vh */
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  /* border: 1px solid #000; */
  padding: 10px 20px;
}

.login::after {
  content: "";
  top: 55%;
  position: absolute;
  width: 2000px;
  height: 1000px;
  background-color: #1F236D;
  transform: rotate(-10deg) translateX(-40%);
}

.login-form {
  margin-top: 15%;
}

.field-wrapper label,
.field-wrapper input {
  margin-top: 10px;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 20px;
  border-radius: 50px;
}

.field-wrapper label {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 22px;
}

.field-wrapper input {
  padding: 10px 10px;
}

.login-btn {
  cursor: pointer;
  margin-top: 25px;
  width: 100%;  
  padding: 13px 10px;
  border-radius: 25px; 
  background-color: #1F236D;
  color: #fff;
  font-size: 20px;
  border: none;
}

.line {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  display: block;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.line::before,
.line::after {
  position: relative;
  top: 8px;
  content: "";
  flex-grow: 1;
  height: 3px;
  background-color: #1F236D;
  margin-left: 10px;
}

.line::before {
  margin-right: 10px;
  margin-left: 0;
}

.or {
  margin-top: 20px;
}

.socials {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.social {
  display: inline-block;
  vertical-align: top;
  margin: 0 5px;
}

.social-link {
  display: block;
  width: 50px;
  height: 50px;
  font-size: 0;
  border-radius: 50%;
  background-size: contain;
}

.social-link.google {  
  background-image: url("../assets/google-plus.svg");
}

.social-link.facebook {
  background-image: url("../assets/facebook.svg");
}

.social-link.vk {
  background-image: url("../assets/vk.svg");
}

.skip {
  cursor: pointer;
  position: absolute;
  text-transform: uppercase;
  right: 42px;
}

.skip::after {
  position: absolute;
  right: -25px;
  top: 3px;
  display: block;
  content:"";
  width: 15px;
  height: 20px;
  background-image: url("../assets/arrow-right-2.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.logo {
  overflow: hidden;
  z-index: 99;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
}

.logo-img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 500px) {  
.logo {
    top: 82%;
    width: 300px;
  }

  .login::after {
    top: 57%;
  }
}

@media only screen and (max-width: 380px) {  
  .logo {
    top: 88%;
    width: 210px;
  }

  .login::after {
    top: 57%;
  }
}
</style>