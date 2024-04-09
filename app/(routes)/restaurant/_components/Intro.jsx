import React from 'react';
import Image from "next/image";
import { MapPin } from 'lucide-react';



function Intro({ restaurant }) {
    return (
        <div>
            {restaurant?.banniere?.url ? <div>
                <Image src={restaurant?.banniere?.url}
                    width={1000}
                    height={300}
                    alt="banniere"
                    className='w-full h-[220px] object-cover rounded-xl'
                />
            </div> :

                <div className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>
                </div>}

            <h2 className='text-3xl font-bold mt-2'>{restaurant.name}</h2>

            <div className='flex items-center gap-2'>
                <Image src={'/star.png'} alt='star'
                width={20} height={20}/>
                <label className=' text-gray-500'>4.5 (56)</label>
            </div>
            
            <h2 className='text-gray-500 mt-2 flex gap-2'>
            <MapPin/>
            {restaurant.adresse}</h2>
        </div>
    )
}

export default Intro