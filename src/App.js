import styles from './App.module.css';
import {  memo } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Center from './Center/Center';
import NoteState from './Api/Context/NoteState';

function App() {
  return (
    <NoteState>
      <div className={styles.App} >
          <Header  />
        <div className={styles.sideWithCenter}> 
          <Sidebar/>
          <Center />
        </div>
      </div>
    </NoteState>
  );
}

export default memo ( App);
