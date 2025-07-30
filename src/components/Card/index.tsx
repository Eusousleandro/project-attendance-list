import type { CardProps } from "../../interfaces/CardProps";
import './style.css'

export default function Card({name, time} : CardProps) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}