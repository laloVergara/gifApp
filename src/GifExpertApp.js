import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categorias=['One Punch','Samuray X', 'Dragon Ball'];
    const [categorias, setcategorias] = useState(['One Punch']);
    /* const handledAdd=()=>{
        setcategorias([...categorias,'Hunter X Hunter']);
    } */
    return (
        <div> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategorias}/>
            <hr />

            
            <ol>
                {
                    categorias.map(category=>(
                        <GifGrid 
                        key={category}
                        categoria={category}/>
                    ))
                }
            </ol>
        </div>
    )
}
