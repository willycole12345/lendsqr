import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Login, UserView } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users/:userid" element={<UserView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
