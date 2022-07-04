import React from 'react';

import '../styles/menu.css';

function Menu({ classMenu }: { classMenu: string }) {
	return <div className={`menu ${classMenu}`}>Menu</div>;
}

export default Menu;
