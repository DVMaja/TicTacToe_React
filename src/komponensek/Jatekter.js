import Elem from "./Elem"
import './Jatekter.css';


export default function Jatekter(props) {

    function katt(index) {
        props.katt(index);
    }

    return (
        <div className="jatekter">
            
            {props.lista.map((elem, index) => {
                return (<Elem ertek={elem} key={index} index={index} katt={katt} />)
            })}

        </div>
    )

}