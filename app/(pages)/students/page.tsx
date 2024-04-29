import { Students, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Students[]> {
  // TODO: Fetch data from the API here.
  return [
    {
      id: "728ed52f",
      student_number: "2021-0001",
      first_name: "John",
      last_name: "Doe",
      birthday: "1990-01-01",
      gender: "MALE",
      nationality: "Filipino",
      religion: "Catholic",
      address_line1: "123 Main St.",
      address_line2: "",
      city: "Manila",
      zip_code: "1000",
      cell_number: "09123456789",
      father_name: "John Doe Sr.",
      father_occupation: "Engineer",
      mother_name: "Jane Doe",
      mother_occupation: "Teacher",
      guardian_name: "Juan Dela Cruz",
      guardian_relation: "Uncle",
      guardian_number: "09123456789",
      guardian_address: "123 Main St.",
      className: "Grade 1",
    },
  ]
}

export default async function StudentsPage() {
  const data = await getData();

  return (
    <div className="space-y-8">
      <h1>Students List</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}