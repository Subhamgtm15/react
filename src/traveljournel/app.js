import Navbar from './Navbar';
import Maincontent from './Maincontent';
function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-300'>
    <div className="font-inter bg-white shadow-custom overflow-hidden rounded-lg">
        <Navbar/>
        <Maincontent/>
    </div>
    </div>
  );
}

export default App;
