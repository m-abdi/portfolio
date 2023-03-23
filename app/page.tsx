import Image from 'next/image';
import TypewriterEffect from './components/TypewriterEffect/TypewriterEffect';

export default function Home() {
  return (
    <main>
      <div
        className='transition-[background-color] hover:bg-[whitesmoke] border-[1px] rounded-[50%] bg-[white] w-[80px] h-[80px] flex flex-col items-center justify-center shadow-xl border-solid sticky top-3 mx-auto z-10'
        style={{ transitionTimingFunction: 'ease-out' }}
      >
        <Image
          src={'/images/M.svg'}
          width={40}
          height={40}
          className='object-contain'
          alt='Logo'
        />
      </div>
      {/* hero text and image */}
      <div className='flex flex-col-reverse md:flex-row h-[100vh] items-center justify-center gap-6 text-center py-0 px-[5%]'>
        <section className='flex flex-col items-center justify-center gap-4'>
          <Image
            src={'/images/Mehdi-Abdi.png'}
            width={410}
            height={410}
            className='object-contain rounded-[50%] w-[70vw] h-[70vw] sm:w-[410px] sm:h-[410px]'
            alt=''
          />
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
            stable business environments. I offer honesty, fair pricing,
            and quality work.
          </p>
          <button className='bg-[var(--color-primary)] min-w-fit min-h-fit h-[40px] w-[250px] rounded-3xl text-[var(--light-text)] text-[1.1rem] shadow-xl'>
            Download cv (PDF, XX MB)
          </button>
        </section>
      </div>
      {/* articles */}
      {/* <article className='bg-[var(--color-secondary)] min-h-[200px] text-[var(--light-text)] px-[5%]'>
        <h2 className='text-[40px]'>Articles</h2>
        <section>
          <div className='shadow-2xl w-[280px] h-[310px] rounded-xl bg-[var(--card-background)]'></div>
        </section>
      </article> */}
      <section>
        <div
          className='transition-[background-color] hover:bg-[#ffffff] border-[1px] object-contain rounded-[50%] bg-[whitesmoke] w-[50px] h-[50px] flex flex-col items-center justify-center shadow-xl border-solid z-10'
          style={{ transitionTimingFunction: 'ease-out' }}
        >
          <Image src={'/images/django.svg'} width={50} height={50} alt='Logo' />
        </div>
      </section>
    </main>
  );
}
