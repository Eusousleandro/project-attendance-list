import { useState } from "react"
import type { CardProps } from "../../interfaces/CardProps"
import Card from "../../components/Card"
import './style.css'

export default function Home() {
    const [listName, setListName] = useState("")
    const [list, setList] = useState<CardProps[]>([])
    
    const handleAddList = () => {
        const newList =  {
            name: listName,
            time: new Date()
            .toLocaleTimeString('pt-br', {
                'hour': '2-digit',
                'minute': '2-digit',
                'second': '2-digit'
            })
        }

        setList(prevState => [...prevState, newList])
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Lista de presença</h1>
            </div>
            <div className="content-list">
                <div className="list-input">
                    <input 
                        type="text" 
                        placeholder="Digite o nome da sua lista...."
                        onChange={(e) => setListName(e.target.value)}
                        value={listName}
                    />
                </div>

                <div className="button">
                    <button className="btn" onClick={handleAddList}>
                        Adicionar
                    </button>
                </div>
            </div>

            {
                list.map(list => (
                    <Card 
                        key={list.time}
                        name={list.name}
                        time={list.time}
                    />
                ))
            }

        </div>
    )
}