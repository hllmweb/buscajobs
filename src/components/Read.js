import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link /*, useLocation*/ } from 'react-router-dom';

const Read = (props) => {
    // usando hook 
    //const [title, settitle] = useState();
    const [body, setbody] = useState();
    const [id_cidade, setid] = useState();


    //let Location = useLocation();


    //console.log(Location);
    console.log(props,'props');
    console.log(props.match.params.id);
    //let Id = Location.value.Id;   
    let Id = props.match.params.id;

    console.log(Id, " Location.data.Id novo id");

    useEffect(() => {
        const params = JSON.stringify({
          'p_id_cidade': Id
        });


        //axios(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        axios
          .post("https://api-buscajobs.herokuapp.com/cidade/lstIdCidade/",
            params,
            {headers: { "Content-Type": "application/json" }}
        ).then(data => {
          //let gettitle = data.data.title;
          let getbody = data.data.cidade;
          let getid = data.data.id_cidade;
        
          // settitle(gettitle);
          setbody(getbody)
          setid(getid)
          
          })
          .catch(function(error) {
            console.log(error);
          });
    
      },[Id]);


    return(
        <>
            <Link to="/">Voltar.</Link>
            <div className="title">id: {id_cidade}</div>
            <div className="description">{body}</div>
        </>
    );

}


export default Read;