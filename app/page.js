import { UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_utils/GlobalApi";
import BuisnessList from './_components/BuisnessList';

export default function Home() {

  
  return (
    <div>
      <CategoryList/>  
      <BuisnessList/>   
    </div>    
  );
}
