import Comments from '../../src/components/Composite/Comments';
import Image from 'next/image';
import { PostType } from '@/types/data';
import React from 'react';

export default function Post({ data }: { data: PostType }) {

  return (
    <>
      <article className='flex flex-col items-start justify-start gap-5 md:w-[70%] mx-auto p-4 px-6 pb-24'>
        <h1 className='text-[40px] font-bold'>{data?.attributes?.title}</h1>
        <h2 className='text-[#6a6969] text-2xl'>
          {data?.attributes?.subtitle}
        </h2>
        {data?.attributes?.cover?.data?.attributes?.url && (
          <Image
            src={data?.attributes?.cover?.data.attributes?.url.replace(
              'portfolio.storage.iran.liara.space', 'cdn.mehdiabdi.info'
            )}
            alt={data?.attributes?.cover?.data.attributes?.alternativeText}
            width={600}
            height={600}
            className='w-full object-contain'
          />
        )}
        <div
          aria-label='content'
          dangerouslySetInnerHTML={{
            __html: data?.attributes?.content
              .replaceAll(
                'portfolio.storage.iran.liara.space',
                'cdn.mehdiabdi.info'
              )
              .replaceAll('font-size', '')
              .replaceAll('font-family', ''),
          }}
          className='text-xl max-w-full'
        ></div>
      </article>
      {/* <Comments /> */}
    </>
  );
}
