import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.FC = React.memo(() => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
      <h1>J胖書房</h1>
      </div>
      <div className={styles.right}>
        <Link to="/search">
          <i className="icon-search" />
        </Link>
        <Link to="/shelf">
          <i className="icon-shelf" />
        </Link>
      </div>
    </div>
  )
});

// Header.displayName = "Header"; // ✅ 添加 displayName

export default Header;