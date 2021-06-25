import React from "react";
import PropTypes from "prop-types";
// import button from "./container/FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
