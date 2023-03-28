import Head from 'next/head';
import { Button, Card } from 'ui';

const CARD_CONTENT = [
  {
    title: 'Caching Tasks',
    href: 'https://turbo.build/repo/docs/core-concepts/caching',
    cta: 'Read More',
  },
  {
    title: 'Running Tasks',
    href: 'https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks',
    cta: 'Read More',
  },
  {
    title: 'Configuration Options',
    href: 'https://turbo.build/repo/docs/reference/configuration',
    cta: 'Read More',
  },
];

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className='mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8'>
        <h1 className='mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl'>
          Dev (app)
          <span className='block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2'>
            Create a yaml for each vercel project. They can be simple: on release curl hook app.my-doamin. on push curl hook landing.my-domain. and keep teh ignore buiold steps to filter changes.
            That is good ØØØ
          </span>
        </h1>
        <div className='mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8'>
          <Button />
        </div>
        <a
          href='https://event-dee.vercel.app/'
          className='text-white underline'
          target='_blank'
          rel='noreferrer'>
          Go to landing now! Should not deploy to sadasd 33
        </a>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly'>
          {CARD_CONTENT.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
}
