"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Students = {
  id: string;
  student_number: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  birthday: string;
  gender: string;
  nationality: string;
  religion: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  zip_code: string;
  cell_number: string;
  imageUrl?: string;
  father_name: string;
  father_occupation?: string;
  mother_name: string;
  mother_occupation?: string;
  guardian_name?: string;
  guardian_relation?: string;
  guardian_number?: string;
  guardian_address?: string;
  className?: string;
}

export const columns: ColumnDef<Students>[] = [
  {
    accessorKey: "student_number",
    header: "Student Number",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "middle_name",
    header: "Middle Name",
  },
  {
    accessorKey: "birthday",
    header: "Birthday",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "nationality",
    header: "Nationality",
  },
  {
    accessorKey: "religion",
    header: "Religion",
  },
  {
    accessorKey: "address_line1",
    header: "Address Line 1",
  },
  {
    accessorKey: "address_line2",
    header: "Address Line 2",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "zip_code",
    header: "Zip Code",
  },
  {
    accessorKey: "cell_number",
    header: "Cell Number",
  },
  {
    accessorKey: "father_name",
    header: "Father Name",
  },
  {
    accessorKey: "father_occupation",
    header: "Father Occupation",
  },
  {
    accessorKey: "mother_name",
    header: "Mother Name",
  },
  {
    accessorKey: "mother_occupation",
    header: "Mother Occupation",
  },
  {
    accessorKey: "guardian_name",
    header: "Guardian Name",
  },
  {
    accessorKey: "guardian_relation",
    header: "Guardian Relation",
  },
  {
    accessorKey: "guardian_number",
    header: "Guardian Number",
  },
  {
    accessorKey: "guardian_address",
    header: "Guardian Address",
  },
  {
    accessorKey: "className",
    header: "Class Assigned",
  },
]