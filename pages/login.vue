<template>
  <div>
    <main class="login-main">
      <div class="left-col">
        <div class="header">
          <h1 class="text-2xl font-bold">登陆</h1>
          <p>登陆你的账号，开始你的前端学习，练习，分享你的知识。</p>
        </div>
        <div class="label-input">
          <label for="email">输入你的邮箱</label>
          <input type="email" name="email" required />
        </div>
        <div class="forgot-next">
          <a href="#">忘记密码?</a>
          <button type="submit" class="min-w-[80px]">
            登陆 <Icon name="lucide:arrow-right"></Icon>
          </button>
        </div>
        <hr />
        <p class="or">或者使用以下登陆</p>
        <div class="buttons">
          <button>Google</button>
          <button>FaceBook</button>
        </div>
        <p class="tips">
          你还没有账号?
          <a class="cursor-pointer" @click="navigateTo('/register')">注册</a>
        </p>
      </div>
      <div class="right-col">
        <button class="close-button" @click="navigateTo('/challenges')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
        <img
          src="https://images.pexels.com/photos/5712961/pexels-photo-5712961.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
          alt="sample-image"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "login",
});
</script>

<style>
.login-main {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  max-width: 700px;
}

.right-col {
  flex-basis: 60%;
  max-width: 40%;
  position: relative;
}

.right-col .close-button {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.right-col .close-button:hover {
  opacity: 1;
}

.right-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 10px 10px 0;
}

.left-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
  min-width: 400px;
}

.left-col .header h1 {
  font-family: Merriweather, sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;
}

.left-col .label-input {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.left-col .label-input input {
  font-size: 1rem;
  height: 2.8rem;
  padding: 1rem;
  border-radius: 5px;
  outline-color: oklch(0.424 0.093 230);
  border: 1px solid #ddd;
}

.left-col .forgot-next {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-col .forgot-next a {
  color: oklch(0.424 0.093 230);
}

.left-col .forgot-next a:hover {
  color: oklch(0.524 0.093 230);
}

.left-col .forgot-next button {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1rem;
  background: oklch(0.424 0.093 230);
  color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.left-col .forgot-next button:hover {
  background-color: oklch(0.51 0.12 230.03);
}

.left-col .or {
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  color: gray;
}

.left-col .buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.left-col .buttons button {
  flex: 1;
  height: 2.4rem;
  border: 1px solid oklch(0.424 0.093 230);
  background: transparent;
  border-radius: 5px;
  color: oklch(0.424 0.093 230);
  cursor: pointer;
  transition: all 0.3s ease;
}

.left-col .buttons button:hover {
  background: oklch(0.424 0.093 230);
  color: #fff;
}

.left-col .tips {
  display: flex;
  justify-content: center;
}

.left-col .tips a {
  color: oklch(0.424 0.093 230);
  padding-left: 0.4rem;
  transition: all 0.3s ease;
}

.left-col .tips a:hover {
  color: oklch(0.524 0.093 230);
}

@media screen and (max-width: 500px) {
  .right-col {
    display: none;
  }
}
</style>
