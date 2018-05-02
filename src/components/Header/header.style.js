import styled from 'styled-components'

const HeaderWrapper = styled.div`
  .header {
    border-bottom: 1px solid grey;
    padding: 0 30px;
    height: 80px;
    text-align: center;
    position: relative;
    p {
      margin: 0;
      color: black;
      font-size: 20px;
    }
    .btn-back {
      position: absolute;
      color: black;
      left: 30px;
      top: 25px;
    }
  }
`

export default HeaderWrapper
