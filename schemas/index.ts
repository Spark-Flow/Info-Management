import * as z from 'zod';

const cellphoneNumberRegex = /^09\d{9}$/

export const StudentSchema = z.object({
  studentNumber: z.string().min(2, { message: "Student number is required" }).max(50),
  firstName: z.string().min(2, {
    message: "First name is required"
  }).max(50),
  lastName: z.string().min(2, {
    message: "Last name is required"
  }).max(50),
  middleName: z.string(),
  // birthday: z.string().min(2, {
  //   message: "Birthday is required"
  // }),
  // NOTE: This should be an enum
  // gender: z.string().min(2, {
  //   message: "Gender is required"
  // }),
  nationality: z.string().min(2, {
    message: "Nationality is required"
  }).max(50),
  religion: z.string().min(2, {
    message: "Religion is required"
  }).max(50),
  addressLine1: z.string().min(2, {
    message: "Address Line 1 is required"
  }).max(200),
  addressLine2: z.string(),
  city: z.string().min(2, {
    message: "City is required"
  }).max(50),
  zipCode: z.string().min(2, {
    message: "Zip code is required"
  }).max(50),
  // Create regex for this
  cellNumber: z.string().min(2, {
    message: "Cellphone Number is required"
  }).regex(cellphoneNumberRegex, {
    message: "Cellphone number format is invalid"
  }).max(11),
  // imageUrl: z.string(),
  fatherName: z.string().min(2, {
    message: "Father name is required"
  }).max(50),
  fatherOccupation: z.string().max(50),
  motherName: z.string().min(2, {
    message: "Mother name is required"
  }).max(50),
  motherOccupation: z.string().max(50),
  guardianName: z.string(),
  guardianRelation: z.string(),
  guardianNumber: z.string(),
  guardianAddress: z.string(),
})