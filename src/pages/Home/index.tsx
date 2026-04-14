import { useEffect, useState } from "react"
import type { CardProps } from "../../interfaces/CardProps"
import Card from "../../components/Card"
import './style.css'
import { api } from "../../services/api"
import type { AttendanceResponse } from "../../types/TypesCardRProps"
import ButtonAdd from "../../components/ButtonAdd"

export default function Home() {
    const [listName, setListName] = useState("")
    const [list, setList] = useState<CardProps[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getData() {
            try {
                const response = await api.get<AttendanceResponse>('/attendance')
                setList(response.data.attendance.flat())
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [])

    async function handleAddList() {
        if (!listName || listName.trim() === "") {
            setError("O nome da lista não pode ser vazio.")
            return
        }

        const newList = await api.post('create/attendance', {
            name: listName,
            time: new Date().toLocaleTimeString('pt-br', {
                'hour': '2-digit',
                'minute': '2-digit',
                'second': '2-digit'
            })
        })

        setList(prevState => [...prevState, newList.data.attendance])
        setListName("")
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
                        onChange={(e) => {
                            setListName(e.target.value) 
                            setError("")
                        }}
                        value={listName}
                    />
                    { error && <p className="error">{error}</p> }
                </div>
                <ButtonAdd name="Adicionar" onClick={handleAddList}/>
            </div>

            {
                list
                    .filter(item => item && item.id)
                    .map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            time={item.time}
                        />
                    ))
            }
        </div>
    )
}