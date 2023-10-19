import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import ArtistPage from '../src/pages/ArtistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
