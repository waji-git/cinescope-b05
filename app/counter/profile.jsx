import { getImageUrl } from './utils.js';

function Avatar({person,size,onClick}) {
  return (
    <div onClick ={() => onClick(person.name)}> <img
      
    className="m-2.5 rounded-full"
      src={getImageUrl(person)}
      alt= {person.name}
      width={size}
      height={size}
    />
    </div>
  );
}

export default function Profile() {
  return (
  <div className='flex flex-row w-3xl items-end bg-amber-200 rounded '>
                 
          <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size={100}    
          onClick ={(name) => alert(name)} />
       
           <Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={80}
             onClick ={(name) => alert(name)}  />
       <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={60}
         onClick ={(name) => alert(name)}  />
    </div>
  );
}