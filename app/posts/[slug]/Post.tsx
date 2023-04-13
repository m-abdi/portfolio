import Comments from '../../src/components/Composite/Comments';
import { PostType } from '@/types/data';
import React from 'react';

export default function Post({ data }: { data: PostType }) {
  return (
    <>
      <article className='flex flex-col items-start justify-start gap-5 md:w-[70%] mx-auto p-4 px-6'>
        <h1 className='text-[40px] font-bold'>{data?.attributes?.title}</h1>
        <h2 className='text-[#6a6969] text-2xl'>{data?.attributes?.subtitle}</h2>
        <div
          aria-label='content'
          dangerouslySetInnerHTML={{ __html: data?.attributes?.content.replaceAll("/uploads/", process.env.NEXT_PUBLIC_CMS_HOST + '/uploads/') }}
          className='text-xl'
        ></div>
      </article>
      {/* <Comments /> */}
    </>
  );
}
