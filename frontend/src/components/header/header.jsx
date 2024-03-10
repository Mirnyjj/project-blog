import { styled } from 'styled-components'
import { Logo, ControlPanel } from './components';

const Dicription = styled.div`
  font-style: italic;
  
`;

const HeaderConteiner = ({className}) => (
    <header className={className}>
      <Logo />
      <Dicription>
        Веб-технологии<br />Написание кода<br />Разбор ошибок
      </Dicription>
      <ControlPanel />
    </header>
  );

  export const Header = styled(HeaderConteiner)`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    width: 1000px;
    height: 120px;
    padding: 20px 40px;
    box-shadow: 0 0px 8px #000;
    background-color: #fff;
    z-index: 10;
`