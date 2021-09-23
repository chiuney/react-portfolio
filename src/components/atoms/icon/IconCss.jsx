import styled from 'styled-components';
import Qiita from '../../pages/icon/Qiita-logo.png'

export const SUl = styled.ul`
  margin: 0 auto 0 0;
  display: flex;
`

export const SA = styled.a`
width: 40px;
height: 40px;
margin: 0 0 0 12px;
mask: no-repeat center/70%;
-webkit-mask: no-repeat center/70%;
display: inline-block;
mask-image: url(${Qiita});
`

export const SLi = styled.li`
  list-style: none;
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  `