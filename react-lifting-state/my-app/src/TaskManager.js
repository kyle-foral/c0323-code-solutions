import React, { useState } from 'react';

/**
 * Manages outstanding and completed tasks.
 * Outstanding and completed tasks are displayed in separate lists.
 * Displayed tasks can be filtered using the Filter input. Only tasks
 * whose name matches the filter value are displayed in either list.
 * Props:
 *   - tasks, an Array of { id: number, name: string, completed: boolean }
 * TODO: It doesn't work!
 */
export default function TaskManager({ tasks }) {
  const [completed, setCompleted] = useState({});
  const outstanding = tasks.filter((task) => !completed.includes(task));

  function handleComplete(task) {
    setCompleted([...completed, task]);
  }
  return (
    <div>
      <OutstandingTasks
        outstanding={outstanding}
        onCompleted={handleComplete}
      />
      <CompletedTasks completed={completed} />
    </div>
  );
}

/**
 * An array of tasks with a checkbox to indicate they are completed.
 * Props:
 *   - tasks, the tasks to display
 */
function OutstandingTasks({ outstanding, onComplete }) {
  // Tracks completed state of all tasks. key = task.id, value = task.completed
  if (outstanding.length === 0) return <div>No outstanding tasks.</div>;
  return (
    <div>
      <div>Outstanding Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {outstanding.map((task) => (
          <li key={task.id}>
            <label>
              <input type="checkbox" onChange={() => onComplete(task)} />
              <span>{task.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * An array of tasks.
 * Props:
 *   - tasks, the tasks to display
 */
function CompletedTasks({ completed }) {
  if (completed.length === 0) return <div>No completed tasks.</div>;
  return (
    <div>
      <div>Completed Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {completed.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
