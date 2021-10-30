import React from 'react';
import './style.css';
import { TrackerContainer } from './components';
import { AddModalContextProvider } from './context';
import WebFont from 'webfontloader';

export default function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Righteous', 'Roboto'],
      },
    });
  }, []);
  return (
    <AddModalContextProvider>
      <div className="Tracker">
        <TrackerContainer />
      </div>
    </AddModalContextProvider>
  );
}
