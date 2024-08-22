import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    isLoading: boolean;
    onClick: () => void;
}

function Button({children, isLoading, onClick}: Props) {
   
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            type="button"
            className= {`btn btn-primary ${isLoading ? 'Cargando...': '' }`}
        >
            {isLoading ? 'Cargando...': children}
        </button>
    )
}

export default Button

