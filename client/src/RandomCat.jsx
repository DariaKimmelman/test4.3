import {React, useState} from "react"
import axios from "axios"

function RandomCats(){
    const[cat, setCat] = useState({id:'10',
          url:"https://cdn2.thecatapi.com/images/CcPK_x_8u.jpg"})
    async function getRandomCat(){
        const catImg =  await axios.get('http://localhost:3001/catapi/random');
        console.log(catImg.data)
        setCat(catImg.data);
    }
    

    return <div>
        <h1>SHOW CAT</h1>
        <img src={cat.url} alt="cat" style={{width:'200px', height:'200px'}}/>
        <button style={{display:'block'}} onClick={getRandomCat}>Click Me!</button>
    </div>

}

export default RandomCats