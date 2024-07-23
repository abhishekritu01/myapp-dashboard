import './App.css';
import Layout from './components/Layout';
import Nav from './components/Nav';
import Stats from './components/Stats';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
     <Layout >
      <Nav />
      <Stats />
      <Table />
     </Layout>
    </div>
  );
}

export default App;
