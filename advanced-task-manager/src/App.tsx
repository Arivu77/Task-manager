import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import CalendarPage from './pages/CalendarPage';
import PomodoroPage from './pages/PomodoroPage';
import ProgressionPage from './pages/ProgressionPage';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/tailwind.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Switch>
              <Route path="/" exact component={DashboardPage} />
              <Route path="/tasks" component={TasksPage} />
              <Route path="/calendar" component={CalendarPage} />
              <Route path="/pomodoro" component={PomodoroPage} />
              <Route path="/progression" component={ProgressionPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;