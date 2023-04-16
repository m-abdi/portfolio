"use client"

import React, { useState } from 'react';
interface CommentsData {
  id: string;
  content: string;
}
export default function Comments({ data }: { data: CommentsData[] }) {
  return <div>Comments</div>;
}
