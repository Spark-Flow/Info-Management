
'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Check, ChevronsUpDown } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { StudentSchema as studentFormSchema } from "@/schemas"
import { addStudent } from "@/actions/addStudent"


// TODO: Further enforce validation rules


const StudentAddPage = () => {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const genders = [
    {
      value: "male",
      label: "MALE",
    },
    {
      value: "female",
      label: "FEMALE",
    },
  ]



  // TODO: Add back all the fields that were removed, and make sure they're validated correctly
  const form = useForm<z.infer<typeof studentFormSchema>>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      studentNumber: "",
      firstName: "",
      lastName: "",
      middleName: "",
      // birthday: "",
      // gender: "",
      nationality: "",
      religion: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      zipCode: "",
      cellNumber: "",
      // imageUrl: "",
      fatherName: "",
      fatherOccupation: "",
      motherName: "",
      motherOccupation: "",
      guardianName: "",
      guardianRelation: "",
      guardianNumber: "",
      guardianAddress: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof studentFormSchema>) => {
    // TODO: Send the form data to the server

    const data = await addStudent(values)
    console.log(values)
    // Clear the form after submission, make sure it's successful before clearing
    // form.reset()
  }
  console.log(form.formState.errors);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-xl font-bold pb-12">Student Add Page</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 gap-8">
          {/* NOTE: For some reason the first grid has alignment issues? */}
          <div className="gap-8 grid">
            <span className="text-md font-bold">Student Information</span>
            <FormField
              control={form.control}
              name="studentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Number
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="2021-12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Foe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* TODO: Make this also part of the validation */}
            {/* <Popover>
              <Label htmlFor="birthday">Birthday
                <span className="text-lg ml-1 text-red-600">*</span>
              </Label>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Student Birthday</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover> */}
            {/* FIXME: Not iterable?? */}

            {/* <Popover open={open} onOpenChange={setOpen}>
                <Label htmlFor="gender" className="text-sm">
                  Gender
                </Label>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? genders.find((gender) => gender.value === value)?.label
                      : "Select Gender..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search gender..." />
                    <CommandEmpty>No value found.</CommandEmpty>
                    <CommandGroup>
                      {genders.map((gender) => (
                        <CommandItem
                          key={gender.value}
                          value={gender.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === gender.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {gender.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover> */}

            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div />

          <div className="grid gap-8">
            <span className="text-md font-bold">Address Information</span>
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 1
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Lot 1 Blk 2 Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="addressLine2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 2</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Antipolo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="1870" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cellNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cellphone Number
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="09123456789"{...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* TODO: This will upload an image */}
          {/* <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

          <div className="grid grid-cols-2 gap-8">
            <span className="text-md font-bold">Parents and Guardian Information</span>

            <div />
            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father&apos;s Name
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fatherOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father&apos;s Occupation</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother&apos;s Name
                    <span className="text-lg ml-1 text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motherOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother&apos;s Occupation</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="guardianName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian&apos;s Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="guardianRelation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian&apos;s Relation</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guardianNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian&apos;s Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guardianAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian&apos;s Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">Add Student</Button>
        </form>
      </Form>
    </div>
  );
}

export default StudentAddPage;