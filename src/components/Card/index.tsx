import type { CardProps } from "../../interfaces/CardProps";
import ButtonRemove from "../Button";
import './style.css'

export default function Card({ name, time } : CardProps) {

    async function handleButtonRemove() {
        console.log('Removendo card:', name);
    }

    return (
        <div className="content-card">
            <div className="card">
                <strong>{name}</strong>
                <small>{time}</small>
                <ButtonRemove name="Remover" onClick={handleButtonRemove} />
            </div>
        </div>
    )
}