import React, { useId } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Item = ({ ele }) => (
  <div className="item">
    {ele.name && <p>{`Student: ${ele.name}`}</p>}
    {ele.year && ele.class && <p>{`Year: ${ele.year}, Room: ${ele.class}`}</p>}
    {ele.title && <p>{`Title: ${ele.title}`}</p>}
    {ele.category && <p>{`Category: ${ele.category} | ${ele.rating} likes`}</p>}
    {ele.winner && <p>{`${ele.rank} ${ele.winner}`}</p>}
  </div>
);

const List = ({ data }) => {
  const id = useId();

  return (
    <div
      className={clsx('itemWrapper', {
        bg1: !data[0].winner,
        bg2: data[0].winner,
      })}
    >
      {data[0].winner && <h2 className="title">TOP 3 Winners</h2>}
      {data.map((ele, index) => (
        <Item key={`${id}-${index}`} ele={ele} />
      ))}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
