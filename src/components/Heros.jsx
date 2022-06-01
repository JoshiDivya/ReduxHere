import React, { useState, useEffect } from "react";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
		'X-RapidAPI-Key': '7be3eeea50msh8ef01ec06ced9dap195957jsn73ca7f2ac984'
	}
};



 function Heros() {
 const [heros, setHeros] = useState([]);

 
     useEffect(() => {
        fetch('https://superhero-search.p.rapidapi.com/api/heroes', options)
	.then(response => response.json())
	.then(response => setHeros(response))
	.catch(err => console.error(err));

       }, []);

      // name,image,id



      const heroList =  heros.map((hero,index)=>{return (
      
        
        <div><img alt={hero.name} style={{width:'200px', height:'200px', marginTop:'15px'}} src={hero.images.md}></img><li key={index}>{hero.name}</li></div>
        
  
       )});
   
        return(
           <div className="row"><div className="col-sm-12">{heroList}</div></div>
        )
    

}
export default Heros;
