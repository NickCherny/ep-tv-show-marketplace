import React from 'react';
import {AutoSizer, List} from 'react-virtualized';
import 'react-virtualized/styles.css'

import ItemShowCard from "../ItemShowCard";

const ShowList = ({ items }) => {
  return (
    <>
      <AutoSizer>
        {({ width }) => {
          return (
            <List
              width={width}
              height={document.documentElement.clientHeight}
              rowCount={items.length}
              rowHeight={document.documentElement.clientHeight}
              rowRenderer={({ key, index, style }) => {
                console.log(items);
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
