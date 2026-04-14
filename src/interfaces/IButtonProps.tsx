import type { MouseEventHandler } from "react"

export interface IButtonProps {
    name: string
    onClick: MouseEventHandler<HTMLButtonElement>
}