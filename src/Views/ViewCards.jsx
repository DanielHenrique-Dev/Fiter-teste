import { useEffect, useState } from "react";
import { Cards } from "../Components/Cards";
import { CardService } from "../Service/CardService";

export const ViewCards = () => {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const response = await CardService.getCollaborators();
        setInfo(response.data);
    }

    useEffect(() => {
        getInfo();
    }, []);
    
    if(info.length === 0){
      
      return (
        <div className="alert alert-primary col-sm-9 col-md-12" role="alert">
            Nenhuma informação disponível.
        </div>
      )
    
    } else {

        return (
            <div className="card-deck">
                { 
                    info.map((info, i) => (  <Cards key={i} card={info}/> ) )
                }
            </div>
        )
    }


} 