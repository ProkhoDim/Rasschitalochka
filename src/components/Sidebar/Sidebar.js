import React from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.module.css';
import TotalBalance from '../TotalBalance';

const SideBar = () => (
  <aside className={styles.sideBarBox}>
    <div>Navigation</div>
    <TotalBalance />
  </aside>
);

export default connect()(SideBar);