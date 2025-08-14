# Advanced Task Manager

## Overview
The Advanced Task Manager is a modern web application designed to help users manage their tasks efficiently. It features a vibrant and colorful interface built with React and Tailwind CSS, incorporating a variety of functionalities such as a Progression Manager, Advanced Calendar, and Pomodoro Timer.

## Features

### 1. Task Management
- Add, edit, and delete tasks with details such as title, description, priority, deadline, and category.
- Mark tasks as complete with real-time progress bar updates.
- Attach files or links to tasks.
- Color-coded status indicators for easy identification.

### 2. Progression Manager
- Visualize overall and category-wise task completion with progress bars and pie charts.
- Access daily, weekly, and monthly statistics using colorful charts (Chart.js/Recharts).
- Animated completion percentage counter for an engaging experience.

### 3. Advanced Calendar
- View tasks in monthly, weekly, and daily formats with drag-and-drop functionality.
- Gradient highlights for upcoming tasks and red for overdue tasks.
- Support for recurring tasks (daily, weekly, monthly).
- Smooth animations when navigating between months and weeks.

### 4. Pomodoro Technique
- A colorful Pomodoro timer with an animated countdown ring.
- Default settings: 25 minutes work, 5 minutes short break, and 15 minutes long break (customizable).
- Progress tracking in the statistics dashboard.
- Play, pause, and reset buttons with a 3D neon-style design.
- Background color changes based on timer state (Work = green, Break = blue, Long Break = purple).

### 5. Extra Functionalities
- Search and filter tasks by category, priority, and date.
- Offline support using LocalStorage or IndexedDB.
- Export tasks and statistics to CSV or PDF formats.
- Sample data included for testing purposes.

## Tech Stack
- **Frontend:** React.js
- **Styling:** Tailwind CSS with custom animations and gradients.
- **Charts:** Chart.js or Recharts.
- **Calendar:** React Big Calendar or FullCalendar.io.
- **State Management:** React Context or Zustand.
- **Data Storage:** LocalStorage or mock JSON backend.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/advanced-task-manager.git
   ```
2. Navigate to the project directory:
   ```
   cd advanced-task-manager
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.