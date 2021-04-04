import React, { useEffect, useReducer, useState, useContext } from 'react';
import { FaStar } from "react-icons/fa";

const createStar = (length) => [...Array(length)];

function Star({selected = false, onSelect}) {
  return (
    <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
  );
}

function StarRating({totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return createStar(totalStars).map((_, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>);
}