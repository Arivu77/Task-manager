// This file defines TypeScript types and interfaces used throughout the application for better type safety.

export interface Task {
    id: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    deadline: Date;
    category: 'work' | 'personal' | 'urgent' | 'study';
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProgressionStats {
    totalTasks: number;
    completedTasks: number;
    completionPercentage: number;
}

export interface PomodoroSettings {
    workDuration: number; // in minutes
    shortBreakDuration: number; // in minutes
    longBreakDuration: number; // in minutes
}

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    recurring?: 'daily' | 'weekly' | 'monthly';
}

export interface UserPreferences {
    theme: 'light' | 'dark';
    language: string;
}