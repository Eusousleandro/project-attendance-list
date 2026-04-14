import type { IButtonProps } from "../../interfaces/IButtonProps";
import './style.css'

export default function ButtonAdd({ name, onClick} : IButtonProps) {
    return (
        <div className="btn-add">
            <button onClick={onClick}>
                {name}
            </button>
        </div>
    )
}