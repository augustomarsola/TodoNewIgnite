import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logotipo Todo List Improved" />
    </Container>
  );
}
