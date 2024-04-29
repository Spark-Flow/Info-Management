'use client';

import { useParams } from "next/navigation";

const StudentPage = () => {
  // TODO: Fetch student data, given the ID., implement API
  const { id } = useParams();
  return (
    <div>
      Student Page
      <div>Student ID: {id}</div>
    </div>
  );
}

export default StudentPage;