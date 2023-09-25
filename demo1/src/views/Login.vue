<template>
  <div class="body">
      <div class="stars">
          <div v-for="index in starsCount" :key="index" class="star" ref="star">
          </div>
      </div>
      <div class="box">
          <transition name="toRight">
              <div class="cover" v-show="slideControl" :key="key1">
                  <h1 class="first">
                      WELCOME
                  </h1>
                  <div class="second">
                      <el-avatar :src="avatarUrl.avatarUrl" :size="windowHeight * 0.2" fit="fill">
                      </el-avatar>
                  </div>
                  <h3 class="third">My dear!
                  </h3>
              </div>
          </transition>

          <div class="right">
              <h1 class="first">Register</h1>
              <div class="second">
                  <el-input v-model="registerUser" placeholder="Account" class="user"></el-input>
                  <el-input placeholder="Password" v-model="registerPassword" show-password class="password"></el-input>
                  <el-input placeholder="Confirm" v-model="confirmPassword" show-password class="password"></el-input>
              </div>
              <div class="third">
                  <el-button type="primary" round @click="registerButton">Register </el-button>
                  <el-button type="text" style="color: white;" @click="changeState">Have one?Click to login</el-button>
              </div>
          </div>
          <div class="right">
              <transition name="toLeft">
                  <div class="cover" v-if="slideControl2">
                      <h1 class="first">
                          JOIN US!
                      </h1>

                      <div class="second">
                          <el-avatar :src="secondUrl.avatarUrl" :size="windowHeight * 0.2" fit="fill">
                          </el-avatar>
                      </div>
                      <h3 class="third">Welcome to our family!</h3>
                  </div>
              </transition>
              <h1 class="first">Login</h1>
              <div class="second">
                  <el-input v-model="user" placeholder="Account" class="user"></el-input>
                  <el-input placeholder="Password" v-model="password" show-password class="password"></el-input>
              </div>
              <div class="third">
                  <el-button type="primary" round @click="loginButton">Login</el-button>
                  <el-button type="text" style="color: white;" @click="changeState">Don't have one?Click to
                      register</el-button>
              </div>
          </div>
      </div>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
      return {
          starsCount: 3000, //星星数量
          distance: 800,//间距
          // 图像存储地址
          avatarUrl: { avatarUrl: require("@/assets/avatar.png") },
          secondUrl: { avatarUrl: require("@/assets/second.jpg") },
          // 当前窗口宽与高
          windowHeight: 0,
          windowWidth: 0,
          user: '',
          password: '',
          registerUser: '',
          registerPassword: '',
          confirmPassword: '',
          showControl: true,
          slideControl: true,
          slideControl2: false,
          key1: 0,

      };
  },
  //动态展示
  mounted() {
      let starArr = this.$refs.star
      starArr.forEach(item => {
          let speed = 0.2 + (Math.random() * 1);
          let thisDistance = this.distance + (Math.random() * 300);
          item.style.transformOrigin = `0 0 ${thisDistance}px`;
          item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`;
      })
  },
  created() {
      this.getWindowSize();
      window.addEventListener('resize', this.getWindowSize);

  },
  beforeDestroy() {
      window.removeEventListener('resize', this.getWindowSize);
  },
  computed: {
      windowSize() {
          return `Width: ${this.windowWidth}, Height: ${this.windowHeight}`;
      }
  },
  methods: {
      getWindowSize() {
          this.windowWidth = window.innerWidth;
          this.windowHeight = window.innerHeight;
      },
      changeState() {
          if (this.slideControl) {
              this.slideControl = !this.slideControl
              setTimeout(() => {
                  this.slideControl2 = !this.slideControl2
              }, 1000);
          }
          else {
              this.slideControl2 = !this.slideControl2
              setTimeout(() => {
                  this.slideControl = !this.slideControl
              }, 1000);
          }

      },

      loginButton() {
          var that = this
          const submitInfo = {
              user: this.user,
              password: this.password
          }
          if (this.user === '') {
              that.$message.warning("用户不能为空！");

          }
          else if (this.password === '') {
              that.$message.warning("密码不能为空！");


          }

          else {
              axios.post('http://localhost:8081/loginProve', submitInfo).then(function (resp) {
                  let proveCode = resp.data

                  if (proveCode === 444) {
                      that.$message.error("用户不存在！");
                  }
                  else if (proveCode === 445) {
                      that.$message.error("密码错误！");
                  }
                  else {
                      that.$message.success("Welcome," + submitInfo.user);
                      that.$router.push("/home")
                  }

              })
          }

          // this.$router.push('/home')
      },
      registerButton() {
          var that = this
          const submitInfo = {
              user: this.registerUser,
              password: this.registerPassword,
          }
          var confirmPassword = this.confirmPassword
          if (this.registerUser === '') {
              that.$message.warning("用户不能为空！");

          }
          else if (this.registerPassword === '') {
              that.$message.warning("密码不能为空！");


          }
          else if (this.confirmPassword === '') {
              that.$message.warning("确认密码不能为空！");

          }
          else {
              axios.post('http://localhost:8081/register', submitInfo).then(function (resp) {
                  let proveCode = resp.data

                  if (confirmPassword != submitInfo.password) {
                      that.$message.error("两次密码不一致！");
                  }
                  else if (proveCode === 0) {
                      that.$message.error("用户名已存在！");
                  }
                  else {
                      that.$message.success("Welcome," + submitInfo.user);
                      setTimeout(() => {
                          that.showControl = !that.showControl
                      }, 500);
                  }

              })
          }


          // this.$router.push('/home')
      }
  }
}
</script>
  
<style lang="css" scoped>
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: radial-gradient(200% 100% at bottom center,
          #caca51,
          #7cb9f1,
          #1b2947);
  background: radial-gradient(200% 105% at top center,
          #1e3055 10%,
          #4267b5 40%,
          #90b1f9 65%,
          #91b3d6);
  background-attachment: fixed;
  overflow: hidden;
}

/* 动画效果 */
@keyframes rotate {
  0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }

  100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}


.stars {
  /* 观察者与z=0的距离 */
  transform: perspective(500px);
  /* 子元素再空间中还是平面中 */
  transform-style: preserve-3d;
  position: absolute;
  /* 观察者位置 */
  perspective-origin: 50% 100%;
  left: 45%;
  /* 动画指定 */
  animation: rotate 90s infinite linear;
  bottom: 0;
}

.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}

.box {
  height: 60vh;
  width: 70vw;
  display: flex;

  /* 垂直水平居中 */
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* justify-content: center;  
  position: relative;
  align-items: center; */
  /* 圆角 */
  border-radius: 5%;

  box-shadow: 18px 18px 18px rgba(0, 0, 0, 0.3);
  transition: all 0.1s;


  .left {
      /* a表示透明度 这也可以避免透明度传递 */
      background: rgba(195, 250, 248, 0.1);
      height: 60vh;
      width: 35vw;
      position: relative;
      /* 透明度调整 */
      /* 这样会导致子容器继承父容器的透明度 */
      /* filter: opacity(0.3); */
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      border-radius: 5%;
      /* 水平居中 */
      justify-content: center;
      /* 垂直居中 */
      align-items: center;

      .first {
          position: relative;
          width: 100%;
          color: white;
          text-shadow: 6px 4px 3px #111;
          height: 10vh;

      }

      .second {
          position: relative;
          width: 100%;

          .user {
              width: 60%;
              margin-bottom: 2%;
          }

          .password {

              width: 60%;
              margin-bottom: 2%;


          }
      }

      .third {
          position: relative;
          width: 100%;
      }

  }

}

.right {

  background: rgba(67, 237, 231, 0.1);
  height: 100%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  border-radius: 5%;

  .first {
      position: relative;
      width: 100%;
      color: white;
      text-shadow: 6px 4px 3px #111;
      height: 10vh;

  }

  .second {
      position: relative;
      width: 100%;

      .user {
          width: 60%;
          margin-bottom: 2%;
      }

      .password {

          width: 60%;
          margin-bottom: 2%;


      }
  }

  .third {
      position: relative;
      width: 100%;
  }

}



.cover {
  position: fixed;
  height: 100%;
  width: 50%;
  border-radius: 5%;
  background: linear-gradient(#5483e7, #93b5ff, #73a6da);
  z-index: 10000;

  .first {
      position: relative;
      width: 100%;
      color: white;
      text-shadow: 6px 4px 3px #111;
      text-align: center;

  }

  .second {
      position: relative;
      width: 100%;
      height: 40%;
      text-align: center;
      margin-top: 10%;
      margin-bottom: 10%;

  }

  .third {
      position: relative;
      width: 100%;
      color: white;
      text-shadow: 2px 2px 1px #465678;
      text-align: center;

  }

}

.box:hover {
  transform: translateY(5) scale(1.03, 1.03);
  box-shadow: 10px 30px 30px rgba(0, 0, 0, 0.3);
}

.toRight-enter-active,
.toRight-leave-active {
  transition: all 1s ease;
}

.toRight-enter-from,
.toRight-leave-to {
  transform: translateX(100%);
}

.toLeft-enter-active,
.toLeft-leave-active {
  transition: all 1s ease;
}

.toLeft-enter-from,
.toLeft-leave-to {
  transform: translateX(-100%);
}
</style>
  