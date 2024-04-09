import React from 'react';
import Image from "next/image";
import Link from 'next/link'


function BuisnessItem({ buisness }) {
    return (
        <Link href={'/restaurant/'+buisness?.slug}>
            <div className='p-3
                hover:border rounded-xl
                hover:border-primary cursor-pointer
                hover:bg-orange-50'>
                <div className="flex flex-col">
                    <div className="relative">
                        <Image 
                            src={buisness.banniere?.url} 
                            alt={buisness.name}
                            width={500}
                            height={130}
                            className='h-[130px] rounded-xl object-cover'
                        />
                    </div>
                    <div className='mt-2'>
                        <h2 className='font-bold text-lg'>{buisness.name}</h2>
                        <div className='flex justify-between item'>
                            <div className='flex gap-2 items-center'>
                                <Image 
                                    src="/star.png" 
                                    alt='etoile'
                                    width={14}
                                    height={14}
                                />
                                <label className='text-gray-400 text-sm'>4.5</label>
                                <h2 className='text-gray-400 text-sm'>{buisness?.restoType[0]}</h2>
                            </div>
                            <h2 className='text-sm text-primary'>{buisness.categories[0].name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>



    )
}

export default BuisnessItem