"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Teachers = {
  id: string;
  email: string;
  teacher_number: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  birthday: string;
  gender: string;
  nationality: string;
  religion: string;
  civil_status: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  zip_code: string;
  cell_number: string;
  imageUrl?: string;
  SSS?: string;
  PAGIBIG?: string;
  PHILHEALTH?: string;
  TIN?: string;
  date_joined: string;
  date_resigned?: string;
  className?: string;
}

export const columns: ColumnDef<Teachers>[] = [
  {
    accessorKey: "teacher_number",
    header: "Teacher Number",
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
    accessorKey: "civil_status",
    header: "Civil Status",
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
    accessorKey: "imageUrl",
    header: "Image",
  },
  {
    accessorKey: "SSS",
    header: "SSS",
  },
  {
    accessorKey: "PAGIBIG",
    header: "PAGIBIG",
  },
  {
    accessorKey: "PHILHEALTH",
    header: "PHILHEALTH",
  },
  {
    accessorKey: "TIN",
    header: "TIN",
  },
  {
    accessorKey: "date_joined",
    header: "Date Joined",
  },
  {
    accessorKey: "date_resigned",
    header: "Date Resigned",
  },
  {
    accessorKey: "className",
    header: "Class",
  },
]