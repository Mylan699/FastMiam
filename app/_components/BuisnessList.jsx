"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';

function BuisnessList() {
    const params=useSearchParams();
    const [category,setCategory]=useState('all');

    useEffect(()=>{
        params&&setCategory(params.get('category'))
        params&&GetBuisnessList(params.get('category'))
    }, [params])

    const GetBuisnessList=(category_)=>{
        GlobalApi.GetBuisness(category_).then(resp=>{
            console.log(resp);
        })
    }

  return (
    <div>BuisnessList</div>
  )
}

export default BuisnessList