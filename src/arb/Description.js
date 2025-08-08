import Card from './card';
import datas from './data';

function Description(){
    return(
        <div className='p-5 flex flex-nowrap gap-5 overflow-x-auto'>

            {datas.map((data)=>{
                return (
                    <Card 
                    key={data.id}
                    data={data}
                    />
                )
            })}
        </div>
    )
}
export default Description;