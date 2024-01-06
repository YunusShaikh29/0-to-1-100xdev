import { memo } from "react";
// eslint-disable-next-line react/prop-types
const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default Header;
