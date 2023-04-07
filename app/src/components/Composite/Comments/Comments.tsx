"use client"

import React, { useState } from 'react';
interface CommentsData {
  id: string;
  content: string;
}
export default function Comments({ data }: { data: CommentsData[] }) {
  const [first, setFirst] = useState('')
  return <div>Comments</div>;
}
