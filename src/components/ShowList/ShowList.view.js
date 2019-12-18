import React from 'react';
import {AutoSizer, List} from 'react-virtualized';
import 'react-virtualized/styles.css'

import ItemShowCard from "../ItemShowCard";

const ShowList = ({ items, dimensions: { height } }) => {
  return (
    <>
      <AutoSizer>
        {({ width }) => {
          return (
            <List
              width={width}
              height={height}
              rowCount={items.length}
              rowHeight={180}
              rowRenderer={({ key, index, style }) => {
                return (
                  <div key={key} style={style}>
                    <ItemShowCard {...items[index]} />
                  </div>
                )
              }}
            />
          );
        }}
      </AutoSizer>
    </>
  )
};

export default ShowList;
