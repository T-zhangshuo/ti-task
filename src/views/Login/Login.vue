<template>
  <div class="content">
    <div class="logo">
      <img src="../../assets/logo.png">
    </div>
    <span class="title">Ti-Task</span>
    <span class="sub-title">让工作变得井井有条</span>

    <div class="input-box" style="margin-top: 16px;">
      <el-input placeholder="输入邮箱" prefix-icon="el-icon-message" v-model="account.value" clearable
                @focus="account.focus = true"
                @blur="account.focus = false"/>
      <div class="line-box">
        <div class="line" :class="{'active': account.focus}"></div>
      </div>
    </div>
    <div class="input-box" style="margin-top: 8px;">
      <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="password.value" show-password
                @focus="password.focus = true"  @blur="password.focus = false"/>
      <div class="line-box">
        <div class="line" :class="{'active': password.focus}"></div>
      </div>
    </div>
    <el-button type="primary" :loading="false" style="width: 100%;margin-top: 16px;">Login</el-button>
  </div>
</template>

<script>
import api from './api'

export default {
  name: 'Login',
  data () {
    return {
      account: {
        value: '',
        focus: false
      },
      password: {
        value: '',
        focus: false
      }
    }
  }
}
</script>

<style lang="stylus">
  .logo {
    margin-top 16px;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: row;

    img {
      width: 80px;
      height: 80px;
    }
  }

  .title {
    margin-top: 20px;
    font-size: 20px;
    color: #1a1a1a;
  }

  .sub-title {
    margin-top: 4px;
    font-size: 16px;
    color: #0CB9FE
  }

  .input-box {
    width: 100%;
    height: 30px;
    position: relative;

    input {
      border: none;
      outline: none;
      font-size: 16px;
      width: 100%;
      caret-color: #0CB9FE;
    }

    .line-box {
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background-color: #F7F7F7;

      .line {
        width: 0;
        height: 100%;
        background-color: #0CB9FE;
        transition: width 0.3s;

        &.active {
          width: 100%;
          height: 100%;
          transition: width 0.4s;
        }
      }
    }
  }
</style>
