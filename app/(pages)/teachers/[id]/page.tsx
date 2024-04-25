'use client';

import { useParams } from "next/navigation";

const TeacherPage = () => {
  const { id } = useParams();
  return (
    <div>
      Teacher Page
      <div>Teacher ID: {id}</div>
    </div>
  );
}

export default TeacherPage;