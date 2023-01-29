import React from 'react';
import styled from 'styled-components';

const RecentCityLi = styled.li`
  list-style: none;
  margin-top: 1rem;
  text-align: left;
  padding: 1rem;
  width: 90%;
  background-color: #1e213a;
  color: #e7e7eb89;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 60%;
    height: 3px;
    border-radius: 100vh;
    background-color: #61647563;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &::before {
    content: '';
    display: block;
    width: 8px;
    border: 2px solid #d3c24a;
    aspect-ratio: 1;
    border-radius: 100vh;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;

const RecentCityItem = ({ city }) => {
  const capitalizedCity = `${city.slice(0, 1).toUpperCase()}${city
    .substring(1, city.length)
    .toLowerCase()}`;

  return <RecentCityLi>{capitalizedCity}</RecentCityLi>;
};

export default RecentCityItem;
