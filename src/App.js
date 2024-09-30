import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-[100vw] h-[100vh] m-0 p-0 bg-gradient-to-b from-slate-600 to-slate-300 overflow-hidden">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
