import logo from '../../assets/logo.svg';
import { Container, Content } from './styled';

export const Header = () => {
 return(<Container>
     <Content>
     <img src={logo} alt="Financial Control Logo" />
     <button type="button">Nova Transação</button>
     </Content>
 </Container>

 );
}