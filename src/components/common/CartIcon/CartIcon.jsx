import { useCart } from "../../../context/CartContext";
import "./CartIcon.css";

export default function CartIcon() {
  const { cartCount } = useCart();

  return (
    <div className="cart-icon">
      🛒
      {cartCount > 0 && <span className="badge">{cartCount}</span>}
    </div>
  );
}
