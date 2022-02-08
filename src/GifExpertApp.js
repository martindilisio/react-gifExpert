
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    const cat = [ 'One Punch' ];

    const [categories, setCategories] = useState(cat);

    /*
    const handleAdd = (e) => {

        const item = 'Prueba Add';        
        //let current = [...categories];
        //current.push(item);
        //setCategories(current); 

        // Otra forma, con callback
        setCategories( cat => [...categories, item] );
    }  
    */

    return (
        <>
            <h2>GiftExpertApp</h2>
                <AddCategory setCategories={ setCategories }/>
            <hr/>

            {/* <button onClick={ handleAdd }>Add</button> */}
            {/* <ul>
                {
                    categories.map(cat => {
                        return <li key={ Math.random().toString() }>
                                    <GifGrid category={ cat }/>
                            </li>;
                    })
                }
            </ul>             */}
            
            {
                categories.map(cat => <GifGrid key={ cat } category={ cat }/> )
            }
        
        </>

    );    

}
export default GiftExpertApp;