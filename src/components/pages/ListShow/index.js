import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";

import {requestShowsList, getCacheExpiresIn} from "../../../modules/shows";
import { getRequestsByActionType } from '../../../modules/global';
import MainLayout from "../../layouts/MainLayout";
import ShowList from "../../ShowList";
import ItemShowCardSkeleton from "../../ItemShowCard/ItemShowCardSkeleton";

import styles from './styles.module.css';

export default () => {
  const dispatch = useDispatch();
  const expiredIn = useSelector(getCacheExpiresIn);
  const isLoading = (
    useSelector(getRequestsByActionType(requestShowsList.FETCH))
  ).length > 0;

  useEffect(() => {
    if (!expiredIn || dayjs(expiredIn).isAfter(dayjs())) {
      dispatch(requestShowsList());
    }
  },
    [dispatch]
  );

  return (
    <MainLayout>
      {isLoading ? (
        <div className={styles.ListShowLoaderContainer}>
          <div>
            <ItemShowCardSkeleton />
            <ItemShowCardSkeleton />
            <ItemShowCardSkeleton />
          </div>
        </div>
      ) : <ShowList/>}
    </MainLayout>
  );
}
