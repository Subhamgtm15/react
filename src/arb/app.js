import Maincontent from './Maincontent'
import Navbar from "./Navbar";
import Description from './Description';
function App() {
  console.log(Description)
  return (
    <div className="font-poppins">
      <Navbar />
      <Maincontent/>
      <Description/> 
    </div>
  );
}

export default App;
