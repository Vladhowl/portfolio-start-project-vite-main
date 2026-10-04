import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Link } from "react-scroll";

const items = [
  { title: "Homes", href: "homes" },
  { title: "About", href: "about" },
  { title: "Portfolio", href: "portfolio" },
  { title: "Achievment", href: "achievment" },
  { title: "Contact", href: "contact" },
];

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <NavLink
              smooth={true} 
              duration={500}
              offset={-70} 
              spy={true}
              to={item.href}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 70px;
    flex-wrap: wrap;
  }

  @media ${Theme.media.tablet} {
    display: none;
  }

  li {
    font-size: 40px;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: aliceblue;
    &:hover {
      letter-spacing: 0.5px;
      transition: 0.2s;
      transform: scale(10%);
    }
`;
