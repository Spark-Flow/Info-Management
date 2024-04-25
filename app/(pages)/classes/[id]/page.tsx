'use client';

import { useParams } from "next/navigation";

const ClassPage = () => {
  const { id } = useParams();
  return (
    <div>
      Class Page
      <div>Class ID: {id}</div>
    </div>
  );
}

export default ClassPage;