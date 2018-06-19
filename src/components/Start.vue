<template>
  <div class="start">
    <h1 class="greet">Добро пожаловать!</h1>
    <p class="choose">Выберите язык:</p>
    <ul class="languages">
      <li class="language">
        <button class="language-btn">
          Русский
        </button>
      </li>
      <li class="language">
        <button class="language-btn">
          English
        </button>
      </li>
      <li class="language">
        <button class="language-btn">
          Japan
        </button>
      </li>
      <li class="language">
        <button class="language-btn">
          Korean
        </button>
      </li>
    </ul>
    <div class="logo">
      <img class="logo-img" src="../assets/logo.png" alt="Тренинг центр - Исток">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greet {
  margin-top: 5%;
  text-align: center;
  font-size: 50px;
  color: #1F236D;
}

.languages {
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  padding: 0;
  list-style-type: none;
}

.language {
  display: block;
}

.language-btn {
  width: 100%;
  padding: 20px;
  margin-top: 8px;
  color: #fff;
  border: none;
  font-size: 25px;
  font-weight: bold;
  background-color: #1F236D;
}

.choose {
  text-align: center;
  font-size: 28px;
}

.start {
  position: relative;
  overflow: hidden;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  /* border: 1px solid #000; */
}

.start::after {
  content: "";
  top: 60%;
  position: absolute;
  width: 2000px;
  height: 1000px;
  background-color: #1F236D;
  transform: rotate(-10deg);
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

@media only screen and (max-width: 768px) {
  .start::after {
    top: 65%;
  }

  .logo {
    top: 84%;
    width: 350px;
  }
}

@media only screen and (max-width: 460px) {
  .greet {
    font-size: 35px;
  }

  .choose {
    font-size: 20px;
  }

  .language-btn {
    padding: 10px;
    margin-top: 4px;
  }

  .start::after {
    top: 55%;
  }

  .logo {
    top: 85%;
    width: 220px;
  }
}
</style>
