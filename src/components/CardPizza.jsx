const CardPizza = ({name, price, ingredients, img}) => {
    return (
        <div className="card">
            <section>
                <img className="card_image" src={img} alt={name}></img>
                <p className="card_name">{name}</p>
            </section>
            <hr/>
            <section className="card_ing">
                <p className="tittle">Ingredientes:</p>
                <p className="items">🍕 {ingredients.join(", ")}.</p>
            </section>
            <hr/>
            <section>
                <p className="price">Precio: ${price}</p>
                <div className="card_buttons">
                    <button className="button_a">Ver Más 👀</button>
                    <button className="button_b">Añadir 🛒</button>
                </div>
            </section>
        </div>
    );
}

export default CardPizza;