"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';


function MenuSection({ restaurant }) {

    const [menuItemList, SetMenuItemList] = useState([])

    const FilterMenu = (name) => {
        const result = restaurant?.menu?.filter((item) => item.name == name)
        SetMenuItemList(result[0])
    }
    return (

        <div className='grid grid-cols-4 mt-2'>

            <div className='hidden md:flex flex-col mr-10 gap-2'>
                {restaurant?.menu?.map((item, index) => (
                    <Button variant="ghost"
                        key={index}
                        className="flex justify-start"
                        onClick={() => FilterMenu(item.name)}
                    >{item.name}</Button>
                ))}
            </div>

            <div className="col-span-3">
                <h2 className="font-extrabold text-lg">{menuItemList.name}</h2>
                <div>
                    {menuItemList?.menuItem?.map}
                </div>
            </div>

        </div>
    )
}

export default MenuSection
