import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuSection from './MenuSection'


function RestoTabs({ restaurant }) {
    return (
        <Tabs defaultValue="categorie" className="w-full mt-10">
            <TabsList>
                <TabsTrigger value="categorie">Catégorie</TabsTrigger>
                <TabsTrigger value="aPropos">À propos</TabsTrigger>
                <TabsTrigger value="critique">Critique</TabsTrigger>
            </TabsList>
            <TabsContent value="categorie">
                <MenuSection restaurant={restaurant} />
            </TabsContent>
            <TabsContent value="aPropos">À propos</TabsContent>
            <TabsContent value="critique">Critique</TabsContent>
        </Tabs>

    )
}

export default RestoTabs