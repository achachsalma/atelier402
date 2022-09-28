import { Component } from "react";
import Stagiaire from "./stagiaire";
export default class Etablissement extends Component{
    constructor(props){
        super(props);
this.state={
    stgs:this.props.stagiaire,
}

    }
    render(){
        return(
            <div className="etablissement">
{this.stgs.map(
    item=>(
        <Stagiaire key={item.is} nom={item.nom} age={item.age} filiere={item.filiere} url={item.image}/>
    )
)}
            </div>
        )
    }
}