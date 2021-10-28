import React from 'react';
import './style.css';
import { TrackerContainer } from './components';
import { AddModalContextProvider } from './context';

export default function App() {
  return (
    <AddModalContextProvider>
      <div className="Tracker">
        <TrackerContainer />
      </div>
    </AddModalContextProvider>
  );
}
