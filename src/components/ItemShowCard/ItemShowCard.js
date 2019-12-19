import React from 'react';

const withItemShowCard = ViewComponent => ({ ...props }) => {
  return (
    <ViewComponent {...props} />
  );
};

export default withItemShowCard;
