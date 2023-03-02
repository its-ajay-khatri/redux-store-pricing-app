import './App.css';
import Signup from './component/signup';
import Pricing from './component/pricing';
import Main from './component/main'
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Signup/>} />
          <Route exact path="/pricing" element={<Pricing/>} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </>
  );
}

export default App;
