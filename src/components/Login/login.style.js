import styled from 'styled-components';
import rocketBoy from '../../assets/images/rocket_boy.jpg';

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
    background-image: url(${rocketBoy});
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
        background-color: #0000f3;
        width: 200px;
        height: 50px;
        color: white;
        font-size: 20px;
        margin-top: 100px;
      }
    }
  }
`;

export default LoginWrapper;