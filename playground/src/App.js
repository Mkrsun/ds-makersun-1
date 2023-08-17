import './App.css';
import { Pill, TaskHome, Greeting, Tabs, TaskList } from '@ds-makersun/dozen';

// type Task = {
//   id?: string;
//   label: string;
//   state: 'new' | 'active' | 'completed' | string;
// };

const tasks = [
  {
    label: 'Escribir a gaitero del grupo musical',
    state: 'active',
  },
  {
    label: 'Ir a buscar mi salud a donde la perdí',
    state: 'new',
  },
  {
    label: 'Liberarme de la pasión',
    state: 'active',
  },
];

function App() {
  return (
    <div>
      <Pill value={1} type="mini" />

      <TaskHome
        label="Llamar a Lucas Urbina para coordinar Música"
        onSwipeComplete={() => {
          console.log('swipe complete!!');
          alert('swipe completed!');
        }}
      />
      <Greeting label="Bienvenido 👋 Manuel Martínez" width={200} />

      <div style={{ padding: '2rem' }} />

      <Tabs options={['To do', 'Done', 'Summary']}>
        <div>
          <TaskList tasks={tasks} />
        </div>
        <div>Tab two</div>
        <div>Tab three</div>
      </Tabs>
    </div>
  );
}

export default App;
