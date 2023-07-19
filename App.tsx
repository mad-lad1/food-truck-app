import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import GetStartedScreen from './Screens/GetStartedScreen';
import HeaderComponent from './components/HeaderComponent';

const App: React.FC = () => {  
  return (
    <>
   <HeaderComponent title={"Hello World"} /> 
      <GetStartedScreen />
    </>
  )
}



export default App;
