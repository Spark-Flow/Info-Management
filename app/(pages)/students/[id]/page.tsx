'use client';

import { useParams } from "next/navigation";

const StudentPage = () => {
  const { id } = useParams();
  return (
    <div>
      Student Page
      <div>Student ID: {id}</div>
    </div>
  );
}

export default StudentPage;