import * as React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { motion } from "framer-motion";
const ExpandingCards = ({ data }) => {
  const [activeId, setActiveId] = React.useState(3);

  const onClick = (id) => setActiveId(id);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={fadeInFromLeft}
      initial="hidden"
      whileInView={"visible"}
      className="container w-full px-20 md:px-16 my-10 bg-transparent"
    >
      {data.map((card) => (
        <motion.div
          variants={childVariant}
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          style={{ backgroundImage: `url(${card.url})` }}
        ></motion.div>
      ))}
    </motion.div>
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
