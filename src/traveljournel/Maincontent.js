import Card from "./Card";
import datas from "./data";
function Maincontent(){
    return (
        <main className="p-10">
            {datas.map((data,index)=>{
                return (
                    <div key={index}>
                    <Card data={data}/>
                    {index<datas.length-1  && <hr className="my-6 border-[#F55A5A] border"/>}
                    </div>
                )
    
            })}
        </main>
    )
}
export default Maincontent;