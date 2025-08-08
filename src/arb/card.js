function Card(props) {
  let badgeText;
  if(props.data.openSpots===0){
    badgeText="SOLD OUT";
  } else if(props.data.location==="Online"){
    badgeText='ONLINE';
  }
  return (
    <div className="relative w-[175px] text-xs flex flex-col flex-none">

      {badgeText &&  <div className='absolute bg-white rounded-sm font-bold px-2 py-1 left-1.5 top-1.5'>{badgeText}</div>}
      <img src={props.data.coverImg} alt='' className='w-full mb-3 h-56'/>
      <div className='flex items-center'>
        <img src='./images/Star 1.png' alt='' className='h-[14px]' />
        <span>{props.data.stats.rating}</span>
        <span className='text-gray-600' >({props.data.stats.reviewCount}) . {props.data.location}</span>
      </div>
      <p className='overflow-hidden text-ellipsis'>{props.data.paragraph}</p>
      <p className='mt-auto'> <strong>From ${props.data.price}</strong> / person</p>
    </div>
  );
}

export default Card;
