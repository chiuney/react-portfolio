import styled from 'styled-components';
import Qiita from '../../pages/icon/Qiita-logo.png'

export const SUl = styled.ul`
  display: flex;
`

export const SA = styled.a`
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 6px 0 0 15px;
  position: relative;
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