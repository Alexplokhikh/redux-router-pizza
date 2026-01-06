import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Redux-Router-Pizza</Link>

      <SearchOrder />

      <p>hello</p>
    </header>
  );
}
export default Header;
