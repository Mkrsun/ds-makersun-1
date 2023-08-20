import './App.css';
import { useState } from 'react';
import {
  Greeting,
  Tabs,
  TaskList,
  MoveHand,
  CompleteTasks,
} from '@ds-makersun/dozen';

const tasks = [
  {
    id: '1',
    label: 'Escribir a gaitero del grupo musical',
    state: 'active',
  },
  {
    id: '2',
    label: 'Ir a buscar mi salud a donde la perdí',
    state: 'new',
  },
  {
    id: '3',
    label: 'Liberarme de la pasión',
    state: 'active',
  },
];

function App() {
  const [dragEnabled, setDragEnabled] = useState(false);
  return (
    <div>
      <Greeting label="Bienvenido 👋 Manuel Martínez" width={200} />

      <div style={{ padding: '2rem' }} />

      <MoveHand />
      <CompleteTasks />

      <div style={{ padding: '2rem' }} />

      <button onClick={() => setDragEnabled((prevState) => !prevState)}>
        {dragEnabled ? 'Reordena' : 'Completa tareas'}
      </button>

      <Tabs options={['To do', 'Done', 'Summary']}>
        <div>
          <TaskList
            tasks={tasks}
            state={dragEnabled ? 'reorder' : 'complete-tasks'}
          />
        </div>
        <div>Tab two</div>
        <div>Tab three</div>
      </Tabs>
    </div>
  );
}

export default App;
