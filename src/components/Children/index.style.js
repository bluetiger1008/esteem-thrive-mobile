import styled from 'styled-components'
import bgMountain from '../../assets/images/mountain.png'

const ChildrenWraper = styled.div`
  .header {
    border-bottom: 1px solid grey;
    padding: 0 30px;
    height: 150px;
    text-align: left;
    position: relative;
    h2 {
      margin: 0;
      color: #5d5b5b;
    }
    p {
      color: #5d5b5b;
    }
    .logo {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 80px;
    }
  }
  .content {
    height: calc(100vh - 151px);
    padding: 20px 0 0 0;
    width: 100%;
    background-image: url(${bgMountain});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: bottom;
    button {
      &.btn-notify {
        width: 200px;
        height: 50px;
        border-radius: 80px;
        background-color: #ecb609;
        margin: 10px 0;
        color: white;
        font-size: 20px;
        outline: none;
        border: none;
        position: relative;
        cursor: pointer;
        font-family: 'Inter UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;

        .due-notification {
          position: absolute;
          width: 30px;
          height: 30px;
          right: 0px;
          top: -15px;
          background-color: #000;
          border-radius: 50%;
          margin: 0;
          line-height: 30px;
          border: 3px solid #fff;
        }
      }
    }
    .btn-logout {
      margin: 50px 0;
      width: 200px;
      height: 50px;
      border-radius: 80px;
      background-color: #e6532e;
      color: white;
      font-size: 20px;
      line-height: 50px;
      outline: none;
      border: none;
      position: relative;
      cursor: pointer;
      font-family: 'Inter UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }
`

export default ChildrenWraper
