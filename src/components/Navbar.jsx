const Navbar = () => {
    const total = 2500;
    const token = false;
    
    return (
        <section className="nav_bar">
            <div className="nav">
                <h3>Pizzería Mamma Mia!</h3>
                <button className="button_nav">🍕 Home</button>
                {token ? <button className="button_nav">🔓 Profile</button> : <button className="button_nav">🔐 Login</button>}
                {token ? <button className="button_nav">🔒 Logout</button> : <button className="button_nav">🔐 Register</button>}
            </div>
            <div className="cart">
                <button className="button_nav">🛒 Total: ${total.toLocaleString()}</button>
            </div>
        </section>
    );
}

export default Navbar;