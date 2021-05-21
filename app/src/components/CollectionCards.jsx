import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';
import CollectionCard from './CollectionCard';

//Material UI Imports
import { Grid } from '@material-ui/core';

function CollectionCards({ data }) {
    const { search, setSearch } = useContext(DataContext);
    return (
        <Grid container spacing={2}>
            {data
                ? data
                      .filter(coll => coll.tag.name.includes(search))
                      .map(coll => {
                          return (
                              <Grid key={coll._id} item xs={12} sm={4}>
                                  <CollectionCard data={coll} />
                              </Grid>
                          );
                      })
                : 'No data'}
        </Grid>
    );
}

export default CollectionCards;
