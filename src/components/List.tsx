import { useState } from "react";

type Props = {
    data: string[];
    onSelect?: (element: string) => void;
};

function List({data, onSelect}: Props) {
    // index : variable que cambia 
    // setIndex: funcion que actualiza el valor de la variable
    const [index, setIndex] = useState(1);
    const handleClick = (i: number, elemento: string) => {
        setIndex(i);
        onSelect?.(elemento);
    };
    return (
        <ul className="list-group">
            {data.map((elemento, i) => (
                <li
                    onClick={()=> handleClick(i, elemento)}
                    key={elemento}
                    className={`list-group-item ${index == i ? 'active': ''}`}
                >
                    {elemento}
                </li>
            ))}
        </ul>
    )
}   

export default List