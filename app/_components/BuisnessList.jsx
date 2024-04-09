"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import BuisnessItem from './BuisnessItem';
import BuisnessItemSkeleton from './BuisnessItemSkeleton';

function BuisnessList() {
  const params = useSearchParams();
  const [category, setCategory] = useState('all');
  const [BuisnessList, setBuisnessList] = useState([]);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    params && setCategory(params.get('category'))
    params && GetBuisnessList(params.get('category'))
  }, [params])

  const GetBuisnessList = (category_) => {
    setLoading(true);
    GlobalApi.GetBuisness(category_).then(resp => {
      // console.log(resp);
      setBuisnessList(resp?.restaurants)
      setLoading(false);
    })
  }

  return (
    <div className='mt-5'>
          <h2 className='font-bold text-2xl'>Restaurants {category} Populaires</h2>
      <h2 className='font-bold text-primary'>{BuisnessList?.length} Résultat</h2>

      <div className='grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-7 mt-3'>
        {!loading? BuisnessList.map((restaurants, index) => (
          <div>
          <BuisnessItem key={index} 
          buisness={restaurants}            
            />
          </div>
        )):
      [1,2,3,4,5,6,7,8].map((item,index)=>(
        <BuisnessItemSkeleton/>
      ))
      }
      </div>
    </div>
  )
}

export default BuisnessList