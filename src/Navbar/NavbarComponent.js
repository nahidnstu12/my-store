import React,{useContext} from 'react';
import ThemeContext from '../ThemeContex';
import {Link} from 'react-router-dom';

const Navbar = ({ setKeyword }) => {
	const handleChange = (e) => {
		// alert(setKeyword(e.target.value));
		setKeyword(e.target.value.toLowerCase());
	}
	const {dark,toggleMode} = useContext(ThemeContext);
	return (
		<>
		
		<div className="nav-bar row">
			<div className="col-10">
			<h3 className="d-inline">My Shop </h3>
			<input name="search" className="search-box ml-3 px-4" placeholder="Type title or brand name" onChange={handleChange} />
			</div>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/checkout">Checkout</Link>
			</div>
			<div className="d-inline-flex justify-content-end col">
			<input type="checkbox" onClick={toggleMode} className=" "/>{dark ? "dark":"lite"}
			</div>
		</div>
		</>
	)
}

export default Navbar;