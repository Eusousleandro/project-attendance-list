import type { IButtonProps } from "../../interfaces/IButtonProps";
import './style.css'

export default function ButtonRemove({ name, onClick }: IButtonProps) {
    return (
        <div className="btn" {...onClick}>
            <button>
                {name}
            </button>
        </div>
    )
}