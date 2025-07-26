import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SocketProvider } from './context/socketContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { GameHub } from './pages/GameHub';
import { TriviaPage } from './pages/games/TriviaPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

function App() {
  return (
    <SocketProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameHub />} />
            <Route path="/games/trivia" element={<TriviaPage />} />
            <Route 
              path="/tournaments" 
              element={
                <PlaceholderPage 
                  title="Tournaments" 
                  description="Compete in exciting tournaments and climb the leaderboards! This feature is coming soon with prize pools and seasonal competitions."
                />
              } 
            />
            <Route 
              path="/leaderboard" 
              element={
                <PlaceholderPage 
                  title="Leaderboard" 
                  description="View global rankings and see how you stack up against other players. Detailed statistics and achievements coming soon!"
                />
              } 
            />
            <Route 
              path="/community" 
              element={
                <PlaceholderPage 
                  title="Community" 
                  description="Connect with fellow gamers, join discussions, and share your gaming experiences. Social features are in development!"
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <PlaceholderPage 
                  title="Profile" 
                  description="Customize your gaming profile, track your achievements, and showcase your favorite games. Profile system coming soon!"
                />
              } 
            />
            <Route 
              path="/settings" 
              element={
                <PlaceholderPage 
                  title="Settings" 
                  description="Personalize your GameForge experience with custom themes, notifications, and privacy controls."
                />
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </SocketProvider>
  );
}

export default App;
