import React from 'react';

interface RefreshButtonProps {
  onRefresh: () => void;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh }) => {
  const handleRefresh = () => {
    onRefresh();
  };

  return (
    <button onClick={handleRefresh}>Обновить</button>
  );
};