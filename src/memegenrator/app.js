import Maincontent from "./Maincontent";
import Header from "./header";
function App(){
    return (
        <div className=' py-5 min-h-screen flex items-center justify-center bg-[#e5e5e5] '>
        <div className='font-carla  bg-white w-[550px] rounded-xl'>
            <Header/>
            <Maincontent/>
        </div>
        </div>
    )
}
export default App;