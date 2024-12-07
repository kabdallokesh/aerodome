import * as React from "react";
import PropTypes from "prop-types";
import "./style.css";

const ExpandingCards = ({ data }) => {
  const [activeId, setActiveId] = React.useState(3);

  const onClick = (id) => setActiveId(id);

  return (
    <div className="container w-full px-20 md:px-16 my-10 bg-transparent">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          style={{ backgroundImage: `url(${card.url})` }}
        ></div>
      ))}
    </div>
  );
};

ExpandingCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpandingCards;
