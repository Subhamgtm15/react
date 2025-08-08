function Card(props){
    return (
        <div className="flex w-[470px] h-[168px] gap-7">
            <div className="w-[125px] h-full rounded-lg overflow-hidden flex-shrink-0">
                <img src={props.data.image} alt='japan' className=" h-full object-cover"/>
            </div>
            <div className="flex flex-col gap-1  justify-center">
                <div className="flex gap-3 items-center">
                    <span className="flex gap-2 items-center">
                        <img src='./traveljournal/arrow.png' alt='arrow' className="w-2.5" />
                        <p className="text-[#2b283a] tracking-wide text-xs uppercase">{props.data.location}</p>
                    </span>
                    <a href={props.data.href} className="underline text-[#918e9b] text-sm hover:text-slate-700">View on Google Maps</a>
                </div>
                <p className="font-bold text-2xl tracking-wide leading-loose capitalize">{props.data.title}</p>
                <p className="font-semibold text-sm" >{props.data.date}</p>
                <p className="text-[#2b283a] font-normal text-xs" >{props.data.description}</p>
            </div>
        </div>
    )
}

export default Card;