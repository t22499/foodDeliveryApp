<script lang="ts" setup>
import { ref } from 'vue';

const loginWay = ref(true);
</script>

<template>
  <div class="login">
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_login">硅谷外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
            <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form>
            <!-- 手机登录 -->
            <div :class="{on: loginWay}">
              <section class="login_message">
                <input type="tel" placeholder="手机号">
              </section>
              <section class="login_verification">
                <input type="tel" placeholder="验证码">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <!-- 密码登录 -->
            <div :class="{on: !loginWay}">
              <section class="login_message">
                <input type="tel" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" placeholder="密码">
              </section>
              <section class="login_verification">
                <input type="tel" placeholder="验证码">
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <!-- 返回 -->
        <router-link to="/" class="go_back">
          <van-icon name="arrow-left" class="van_left"/>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.login{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: #fff;
  .loginContainer{
    width: 100%;
    height: 100%;
    .loginInner{
      height: 80%;
      margin: 0 35px;
      padding-top: 60px;
      .go_back{//返回
        position: absolute;
        top: 5px;
        left: 5px;
        height: 30px;
        width: 30px;
        .van_left {
          color: #999;
          font-size: 20px;
        }
      }
      .login_header{
        margin: 0;
        border: 0;
        padding: 0;
        font-size: 100%;
        .login_login{
          font-size: 40px;
          font-weight: bold;
          text-align: center;
          color: #02a774;
        }
        .login_header_title{//标题
          padding-top: 40px;
          text-align: center;
          >a{
            color: #333;
            font-size: 14px;
            padding-bottom: 4px;
            &.on{
              color: #02a774;
              // font-weight: 700;
              border-bottom: 2px solid #02a774;
            }
            &:last-child{
            margin-left:40px;
            }
          }
        }
      }
      .login_content{
        >form>div{
          display: none;
          >section{
            position: relative;
            margin-top: 16px;
            font-size: 14px;
            height: 48px;
            >input{
              width: 100%;
              height: 100%;
              padding-left: 10px;
              outline: auto;
              border: 1px solid #ddd;
              border-radius: 4px;
              font: 400 14px Arial;
              color: #ddd;
            }
          }
          &.on{
            display: block;
          }
        }
        .login_submit{
          width: 100%;
          height: 42px;
          background-color: #4cd96f;
          color: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          margin-top: 20px;
        }
        .about_us{
          display: block;
          text-align: center;
        }
      }

    }
  }
}
</style>