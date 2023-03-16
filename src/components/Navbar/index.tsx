import { useState } from "react";
import * as Styles from "./styles";

export function Navbar() {
  const [selectedItem, setSelectedItem] = useState<number>(0); // inicia com o primeiro item selecionado

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <Styles.NavContainer>
      <Styles.Nav>
        <Styles.NavItem
          selected={selectedItem === 0}
          onClick={() => handleItemClick(0)}
        >
          Home
        </Styles.NavItem>
        <Styles.NavItem
          selected={selectedItem === 1}
          onClick={() => handleItemClick(1)}
        >
          Menu
        </Styles.NavItem>
        <Styles.NavItem
          selected={selectedItem === 2}
          onClick={() => handleItemClick(2)}
        >
          Recompensas
        </Styles.NavItem>
        <Styles.NavItem
          selected={selectedItem === 3}
          onClick={() => handleItemClick(3)}
        >
          Gift Cards
        </Styles.NavItem>
        <Styles.NavItem
          selected={selectedItem === 4}
          onClick={() => handleItemClick(4)}
        >
          Lojas
        </Styles.NavItem>
      </Styles.Nav>
    </Styles.NavContainer>
  );
}
