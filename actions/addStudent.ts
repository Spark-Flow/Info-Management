'use server'

import { db } from "@/lib/db"
import { StudentSchema } from "@/schemas"
import * as z from 'zod'

// FIXME: ⨯ Internal error: Error: Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported. DAFAQ IS THIS ERROR
// TODO: These are not all the data needed for a student. there are still more fields to be added, but since there are some error with the other data types when im trying to create the ui for them i will just add the basic fields for now
export const addStudent = async (values: z.infer<typeof StudentSchema>) => {
  const validateFields = StudentSchema.safeParse(values)

  if (!validateFields.success) {
    console.log("Validate Fields Error")
    return validateFields.error.errors
  }
  const { studentNumber, firstName, lastName, middleName, nationality, religion, addressLine1, addressLine2, city, zipCode, cellNumber, fatherName, fatherOccupation, motherName, motherOccupation, guardianName, guardianRelation, guardianNumber, guardianAddress } = validateFields.data


  // Create a new student
  // NOTE: This must match the fields from the models in prisma
  const student = await db.students.create({
    data: {
      student_number: studentNumber,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      nationality: nationality,
      religion: religion,
      address_line1: addressLine1,
      address_line2: addressLine2,
      city: city,
      zip_code: zipCode,
      cell_number: cellNumber,
      father_name: fatherName,
      father_occupation: fatherOccupation,
      mother_name: motherName,
      mother_occupation: motherOccupation,
      guardian_name: guardianName,
      guardian_relation: guardianRelation,
      guardian_number: guardianNumber,
      guardian_address: guardianAddress,
    }
  })
  console.log("Student added successfully")
  return {
    success: "Student added successfully",
  }
}