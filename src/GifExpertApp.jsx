import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Jujutsu' ]);

    const handleAddCategory = (newCate) => {
        if (categories.includes(newCate)) return;
        setCategories([
            newCate,
            ...categories
        ]); 
    }
 
    return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory handleAddCategory={handleAddCategory}/>

            {
                categories.map( category => 
                    (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }
    </>
  )
}
