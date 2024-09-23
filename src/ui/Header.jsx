import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import PizzaSlice from '../images/pizza-slice.png'

function Header() {
  return (
    <header className="text-white bg-pizza flex items-center justify-between border-b border-stone-200 bg-scarlet px-4 py-3 font-sans uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
      <span className='sm:flex sm:justify-between'><img className='px-3' src={PizzaSlice} alt="Pizza Slice" />Piatto Delizioso</span>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
