import React from 'react';

import Header from '@/pages/home/components/header';
import { useRequest } from '@/hooks/useRequest';
import api from '@/pages/home/api';
import { IHomeData } from '@/pages/home/types';

import styles from './index.module.scss';

const Home: React.FC = () => {
  const { data, error } = useRequest<IHomeData>({ url: api.getHomeData });
  if (error) {
    return <div>error</div>
  }

  if (!data) {
    return <div></div>
  }

  return (
    <div className={styles.home}>
      <Header />
    </div>
  )
};
export default Home;