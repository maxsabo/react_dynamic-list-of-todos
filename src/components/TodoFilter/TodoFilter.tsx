import React, { useState } from 'react';

type Props = {
  onStatusChange: (status: string) => void;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  searchQuery: string;
};

export const TodoFilter: React.FC<Props> = ({
  onStatusChange,
  onSearchChange,
  onClearSearch,
  searchQuery,
}) => {
  const [status, setStatus] = useState<string>('all');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;

    setStatus(newStatus);
    onStatusChange(newStatus);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    onSearchChange(query);
  };

  const handleClearSearch = () => {
    onClearSearch();
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {searchQuery && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={handleClearSearch}
            />
          )}
        </span>
      </p>
    </form>
  );
};
