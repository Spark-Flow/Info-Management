import { Teachers, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Teachers[]> {
  // TODO: Fetch data from the API here.
  return [
    {
      id: "728ed52f",
      email: "example@gmail.com",
      teacher_number: "2021-0001",
      first_name: "John",
      last_name: "Doe",
      birthday: "1990-01-01",
      gender: "MALE",
      nationality: "Filipino",
      religion: "Catholic",
      civil_status: "Single",
      address_line1: "123 Main St.",
      address_line2: "",
      city: "Manila",
      zip_code: "1000",
      cell_number: "09123456789",
      SSS: "123456789",
      PAGIBIG: "123456789",
      PHILHEALTH: "123456789",
      TIN: "123456789",
      date_joined: "2021-01-01",
      date_resigned: "2021-12-31",
      className: "Grade 1",
    }
  ]
}

export default async function TeacherPage() {
  const data = await getData();

  return (
    <div className="space-y-8">
      <h1>Teachers List</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}