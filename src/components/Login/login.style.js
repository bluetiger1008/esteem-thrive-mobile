import styled from 'styled-components'
import bgLogin from '../../assets/images/login.png'

const LoginWrapper = styled.div`
  height: 100vh;
  .header {
    height: 100px;
    background-image: linear-gradient(-225deg, #243b55, #141e30);
    color: #fff;
    .logo {
      height: 50px;
      width: auto;
    }
  }
  .authContainer {
    height: calc(100vh - 100px);
    background-image: url(${bgLogin});
    background-size: cover;
    background-position: center;
    form {
      margin: -100px 0 0 0;
      width: 100%;
      .form-group {
        align-items: center;
        .form-input {
          width: 100%;
          max-width: 80%;
          margin: 0 0 10px 0;
          background-color: white;
          -webkit-appearance: none;
          font-size: 16px;
          padding: 10px;
          width: 100%;
          border-radius: 4px;
          color: #2b303a;
          border: 1px solid #cccccc;
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

          &:focus {
            outline: 0;
            border: 1px solid #2b303a;
          }
        }
      }
      .btn-login {
        margin: 20px auto 0 auto;
        padding: 10px 60px;
        border-radius: 4px;
        box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.05);
        background-image: linear-gradient(-225deg, #00a8ff 0%, #0097e6 100%);
        cursor: pointer;
        transition: transform 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        border: 0;
        outline: 0;
        font-family: 'Inter UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 21px;
        font-weight: 500;
        color: #fafafa;
        user-select: none;
        text-align: center;
      }
    }
  }
`

export default LoginWrapper
