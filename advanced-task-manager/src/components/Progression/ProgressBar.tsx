import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress percentage (0 to 100)
  title: string; // Title of the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, title }) => {
  return (
    <div className="w-full bg-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div
        className="h-4 rounded-xl transition-all duration-300"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, rgba(34,193,195,1) ${progress}%, rgba(253,187,45,1) ${progress}%)`,
        }}
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-semibold text-gray-700">{title}</span>
        <span className="text-sm font-semibold text-gray-700">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;