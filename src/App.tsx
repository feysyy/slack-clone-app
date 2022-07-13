import React from 'react';
import LoginScreen from './pages/LoginScreen';
import SignUpModal from './components/SignUpModal';
import { Routes, Route } from 'react-router-dom'
import "./sass/app.scss"

function App() {
  return (
    <section>
       <Routes>
        <Route path="/" element={ <LoginScreen />} />
        <Route path="/sign-up-page" element={ <SignUpModal />} />
     </Routes>
    </section>
  );
}

export default App;
