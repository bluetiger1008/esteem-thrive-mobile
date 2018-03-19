import styled from 'styled-components';
import bgLogin from '../../assets/images/login.png';

const LoginWrapper = styled.div`
  height: 100vh;
  .header {
    height: 100px;
    background-color: #000;
    color: #fff;
    .logo {
      height: 80px;
      width: auto;
    }
  }
  .authContainer {
    height: calc(100vh - 100px);
    background-image: url(${bgLogin});
    background-size: cover;
    background-position: center;
    form {
      width: 100%;
      .form-group {
        align-items: center;
        .form-input {
          width: 250px;
          height: 40px;
          border: 1px solid #fff;
          background-color: rgba(0,0,0,0.8);
          color: #fff;
          padding: 0 10px;
          margin: 10px 0;
          font-size: 16px;
          outline: none;
        }
      }
      .btn-login {
        background: #41b3f0;
        background-image: linear-gradient(to bottom, #41b3f0, #0b73c2);
        border: none;
        width: 200px;
        height: 50px;
        color: white;
        font-size: 20px;
        margin-top: 100px;
        outline: none;
        &:hover {
          background: #3cb0fd;
          background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        }
      }
    }
  }
`;

export default LoginWrapper;