import type { CardProps } from "../interfaces/CardProps"

export type ApiResponse = {
    error: boolean
    message: string
    attendance: any[]
}

export type AttendanceResponse = {
  attendance: CardProps[]
}