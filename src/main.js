import restaurantfood from '../icons_assets/restauranfood.jpg';
import GreekSalad from '../icons_assets/greek salad.jpg';
import LemonDessert from '../icons_assets/lemon dessert.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';

const MainComponent = () => {
    return (
      <><div className="my-component">
        <div className="write-up">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>

          <p>
            We are family owned Mediterranean Restaurant
            focused on Traditional recipes served with a modern twist
          </p>
          <button>Reserve a Table</button>
        </div>
        <img src={restaurantfood} alt='restaurantFood' />
      </div>
      <div className="week-specials">
          <h1>This week specials</h1>
          <button>Online Menu</button>
        </div>
        
        <div className="card-row">
          <div className="card">
            <img src={GreekSalad} alt="Greek-Salad" />
            <div className="title">
              <h4>Greek Salad</h4>
              <p> $12.99</p>
            </div>
            <article>The famous greek salad of cripsy lectucce
              pepper, olives and our Chicago style feta cheese
              garnished with crunchy garlic and rosemary  croutons.
            </article>

            <div className="order">
              <h4>Order a Delivery</h4>
              <p> $12.99</p>
            </div>
          </div>

          <div className="card">
            <img src={Bruchetta} alt="Bruchetta" />
            <div className="title">
              <h4>ruchetta</h4>
              <p> $5.99</p>
            </div>
            <article> Our Bruchetta is made from grilled bread that had been smeared with garlic
              and seasoned with salt and Olive oil.
            </article>

            <div className="order">
              <h4>Order a Delivery</h4>
              <p> $12.99</p>
            </div>
          </div>

          <div className="card">
            <img src={LemonDessert} alt="Lemon Dessert" />
            <div className="title">
              <h4>Lemon Dessert</h4>
              <p> $5.00</p>
            </div>
            <article> This comes straight from grandma's recipe book, every last ingredient
              has been sourced and is as authentic as can been imagined.
            </article>

            <div className="order">
              <h4>Order a Delivery</h4>
              <p> $12.99</p>
            </div>
          </div>
        </div>
        </>
      
    );
  };

  export default MainComponent;