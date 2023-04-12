import Button from './src/components/Atomic/Button';
import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '@/types/data';
import TypewriterEffect from './src/components/Atomic/TypewriterEffect';
import banner from '../public/images/banner.jpg'
const skills = [
  { label: 'django web framework', logo: '/images/django.svg', level: 1 },
  { label: 'html', logo: '/images/HTML5_logo.svg', level: 0 },
  {
    label: 'css',
    logo: '/images/CSS3_logo_and_wordmark-cropped.svg',
    level: 0,
  },
  { label: 'javascript', logo: '/images/Javascript.svg', level: 0 },
  { label: 'python', logo: '/images/Python-logo-notext-cropped.svg', level: 0 },
  {
    label: 'rust',
    logo: '/images/Rust_programming_language_black_logo-cropped.svg',
    level: 0,
  },
  {
    label: 'react',
    logo: '/images/React-icon-cropped.svg',
    level: 1,
  },
  {
    label: 'next.js',
    logo: '/images/Nextjs-logo-cropped.svg',
    level: 1,
  },
  {
    label: 'docker',
    logo: '/images/Rb3e6202f5356edebd8c8205623eef0f1.png',
    level: 2,
  },
];

const code = `function main() {<br>
     while (isAlive) {<br>
    eat();<br>
    learn();<br>
    code();<br>
    sleep();<br>
  }<br>
}`;

export default async function Home() {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_CMS_HOST + '/api/posts?sort[0]=id:desc&populate=*',
    {
      headers: { Authorization: `bearer ${process.env.CMS_API_TOKEN}` },
    }
  ).then((resp) => resp.json());

  return (
    <main className='flex flex-col gap-8'>
      {/* hero text and image */}
      <div className='flex-grow flex flex-col-reverse md:flex-row items-center justify-center gap-6 text-center py-0 px-[5%] relative min-h-[96vh] '>
        <section className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-row items-center relative px-5 md:px-20'>
            <span className='text-[70px] md:text-[120px] absolute left-0'>
              {'<'}
            </span>
            <Image
              src={'/images/Mehdi-Abdi.png'}
              width={410}
              height={410}
              className='object-contain rounded-[50%] w-[70vw] h-[70vw] sm:w-[410px] sm:h-[410px]'
              alt=''
              loading='eager'
            />
            <span className='text-[70px] md:text-[120px] absolute right-0'>
              {'/>'}
            </span>
          </div>
          <h1 className='text-[calc(1.3rem+3vw)] md:text-[50px] font-bold'>
            Hi, I'm Mehdi Abdi
          </h1>
          <section className='text-[calc(1.3rem+3vw)] md:text-[50px] uppercase font-bold flex flex-row flex-wrap items-center gap-4 w-full text-center justify-center'>
            <TypewriterEffect className='text-[calc(1.1rem+2.8vw)] md:text-[40px] font-extrabold text-center'>
              <h2>full-stack engineer</h2>
            </TypewriterEffect>
          </section>
          {/* social links */}
          <section className='flex flex-row justify-start items-center gap-4'>
            <a
              href='mailto:m.abdi.public@gmail.com'
              target={'_blank'}
              referrerPolicy='no-referrer'
              aria-label='email address'
            >
              <Image
                src={'/images/gmail.png'}
                width={30}
                height={30}
                alt='gmail logo'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/mehdi-abdi-b12443203'
              target={'_blank'}
              referrerPolicy='no-referrer'
              aria-label='linkedin account'
            >
              <Image
                src={'/images/linkedin.png'}
                width={30}
                height={30}
                alt='linkedin logo'
              />
            </a>
            <a
              href='https://github.com/m-abdi/'
              target={'_blank'}
              referrerPolicy='no-referrer'
              aria-label='github account'
            >
              <Image
                src={'/images/github.png'}
                width={30}
                height={30}
                alt='github logo'
              />
            </a>
          </section>
          <p className='min-w-[300px] max-w-[900px]'>
            Passionate software engineer with experience in both startup and
            stable business environments. I offer honesty, fair pricing, and
            quality work.
          </p>
          <a target={'_blank'} download href='/Mehdi-Abdi_CV.pdf'>
            <Button>Download CV (PDF, 46 KB)</Button>
          </a>
        </section>
        {/* skills */}
        <section className='hidden lg:block absolute right-0 w-[600px] top-0 bottom-0 my-[0xp]'>
          <section className='flex flex-col justify-center gap-4 absolute right-4 top-0 bottom-0'>
            {skills
              ?.filter((skill) => skill.level == 0)
              .map((skill) => (
                <Image
                  key={skill?.label}
                  src={skill?.logo}
                  width={50}
                  height={50}
                  alt={skill?.label}
                  title={skill?.label}
                  className='rounded-md object-contain shadow-md'
                  loading='eager'
                />
              ))}
          </section>
          <section className='flex flex-col justify-center gap-4 absolute right-24 top-0 bottom-0 my-[0px]'>
            {skills
              ?.filter((skill) => skill.level == 1)
              .map((skill) => (
                <Image
                  key={skill?.label}
                  src={skill?.logo}
                  width={50}
                  height={50}
                  alt={skill?.label}
                  title={skill?.label}
                  className='rounded-md object-contain shadow-md'
                  loading='eager'
                />
              ))}
          </section>
          <section className='flex flex-col justify-center gap-4 absolute right-44 top-0 bottom-0 my-[0px]'>
            {skills
              ?.filter((skill) => skill.level == 2)
              .map((skill) => (
                <Image
                  key={skill?.label}
                  src={skill?.logo}
                  width={50}
                  height={50}
                  alt={skill?.label}
                  title={skill?.label}
                  className='rounded-md object-contain shadow-md'
                  loading='eager'
                />
              ))}
          </section>
        </section>
        {/* coding */}
        {/* <code className='absolute left-4 p-4 bg-slate-800 rounded-md text-white' dangerouslySetInnerHTML={{__html: code}}>
        </code> */}
        <Image
          src={'/images/code.svg'}
          width={330}
          height={330}
          alt='code block'
          className='hidden lg:block object-contain absolute left-3 p-4 rounded-md md:w-[400px] md:h-[400px]'
          loading='eager'
        />
      </div>
      {/* articles */}
      <div className='min-h-[200px] px-[5%] flex flex-col gap-6 py-5 border-t-2'>
        <section className='flex flex-row flex-wrap w-full justify-between gap-3 items-center'>
          <h2 className='text-[40px]'>Articles</h2>
          <Link href={'/articles'} className='text-xl text-[var(--color-primary)]' >Show all</Link>
        </section>
        <section className='flex flex-col sm:flex-row flex-wrap items-center gap-10 w-full justify-center'>
          {posts.data.slice(0, 4).map((post: PostType) => (
            <a
              key={post.id}
              href={`/posts/${post.attributes.slug}`}
              target='_blank'
              referrerPolicy='no-referrer'
            >
              <article className='shadow-2xl  w-[330px] h-[390px] rounded-xl text-[black] overflow-hidden relative bg-[var(--card-background)]'>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_CMS_HOST +
                    post.attributes?.cover?.data?.attributes?.url
                  }
                  alt={
                    post.attributes?.cover?.data?.attributes?.alternativeText ??
                    "Mehdi Abdi's logo"
                  }
                  width={330}
                  height={180}
                  className='object-fill w-full h-[50%] relative left-0 rounded-t-xl'
                />
                <section className='flex flex-col px-3 py-1 gap-1'>
                  <h3 className='font-bold text-xl'>{post.attributes.title}</h3>
                  <h4>{post.attributes.subtitle}</h4>
                  {/* <div
                  dangerouslySetInnerHTML={{
                    __html: post.attributes.content.slice(0, 200),
                  }}
                ></div> */}
                </section>
              </article>
            </a>
          ))}
        </section>
      </div>
      {/* <Image src={banner} alt='banner' className='object-contain w-full px-[4vw] opacity-50' /> */}
    </main>
  );
}
