import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

/* 
<BrowserRouter>
          <Menu visible={connect} onLogout={handleLogout} />
          <Routes>
            
            {connect ? ( 
              <>
                <Route path='/' element={<Home user={""} />} />
                <Route path='/account' element={<Account onDeconnexion={handleLogout} dataUser={verifyUserConnect}/>} />
                <Route path='/account' element={<Account onDeconnexion={handleLogout} dataUser={verifyUserConnect}/>} />
                <Route path='/trajets' element={<Trajets dataUser={verifyUserConnect}/>} />
                
                
                <Route path='/rechercher' element={<Rerchercher dataUser={verifyUserConnect}/>} />
                <Route path='/publish' element={<Publish dataUser={verifyUserConnect}/>} />
                <Route path='/messages' element={<Messagerie dataUser={verifyUserConnect}/>} />
                <Route path="/conversation" element={<Conversation />} />
                <Route path='/messages' element={<Messagerie dataUser={verifyUserConnect}/>} />
                <Route path="/conversation" element={<Conversation />} />
                <Route path='/*' element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route path='/' element={<Connexion setConnect={setConnect} />} />
                <Route path='/*' element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
