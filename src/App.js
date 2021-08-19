import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const favFood = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/c5/a4/14/pepperoni-lovers.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "chicken",
    image:
      "https://www.seriouseats.com/thmb/LJQ1jFVrlJbSb23MmK5iwHUr_EY=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: "beef",
    image:
      "https://lh3.googleusercontent.com/proxy/stASV4Cg2j_2usf14fVLd_kF2EGenPbB1WkkyQ7VZSCjlq_TgYf-6euZemAUJxQoKxxMRCiOhY8qYSw4WCfGQaCUJJMFfbYPkj2KrINyN1vDXKW2klBoxZliI2Y0CkJnwqaaL4Ycd7-Q_2uAMittZhfRpp8EfXUigoSWNxbXfkykt4xGUD50lFP50hY84uCfDxllUQ",
    rating: 3,
  },
];

function App() {
  return (
    <div>
      {favFood.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
