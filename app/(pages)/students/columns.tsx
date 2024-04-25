"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Students = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}