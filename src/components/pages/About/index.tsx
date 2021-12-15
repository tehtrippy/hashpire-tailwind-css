import React from 'react';
import {
  SeedIcon,
  TreeIcon,
  GardenIcon,
  IdeaPotIcon,
  HashIcon,
  LightIcon,
  PlusIcon,
  EqualsIcon,
  HashpireIcon,
} from '../../Icon';
import backgroundAbout from '../../../assets/img/about_background.png';
import { Layout } from '../../layouts';

const whyjoin = [
  `Meet friendly \nlike-minded people`,
  `Learning everything \nabout web3`,
  `Participate in events \n(e.g. hackathons, CTF)`,
  `Showcase what \nyou are working on`,
  `Get monthly prizes \nfor content published`,
  `Recieve apportunity \nfrom partners and sponsors`,
];

const garden = [
  {
    icon: <SeedIcon className='text-neutral-200 w-14 h-14' />,
    title: 'Seed',
    description: 'Seed your garden \nwith a content idea.',
    subDescription: '(start a topic with an idea)',
  },
  {
    icon: <TreeIcon className='text-neutral-200 w-14 h-14' />,
    title: 'Tree',
    description: `Produce branches for your content. \nOne note = one idea`,
    subDescription: '(Create content linked to the topic)',
  },
  {
    icon: <GardenIcon className='text-neutral-200 w-14 h-14' />,
    title: 'Garden',
    description: 'Connecting the dots and create \nevergreen darden',
    subDescription: '(Allow other to join)',
  },
];

const communityGoals = [
  `Provide the best Web3 knowledge base \ncommunity in Thailand.`,
  `Promote and support the growth and \ndevelopment of the decentralized web.`,
  `A friendly space for Web3 enthusiasts \nand discuss all things Web3.`,
];

const About: React.FC<{}> = () => {
  return (
    <Layout fullWidth>
      {/* Section 1 */}
      <div
        className='py-10 px-6 bg-cover bg-no-repeat md:py-20 md:px-8 lg:py-28 lg:px-32'
        style={{
          backgroundImage: `url(${backgroundAbout})`,
        }}
      >
        <div className='grid grid-cols-1 gap-y-7 place-items-center md:grid-cols-5'>
          <div className='flex flex-col items-center'>
            <HashIcon className='text-primary w-16 h-16 md:w-20 md:h-20' />
            <span className='text-4xl text-neutral-100 text-semibold md:text-5xl lg:text-7xl'>
              hash
            </span>
          </div>
          <PlusIcon className='text-neutral-100 w-16 h-16 md:w-20 md:h-20' />
          <div className='flex flex-col items-center'>
            <LightIcon className='text-primary w-16 h-16 md:w-20 md:h-20' />
            <span className='text-4xl text-neutral-100 text-semibold md:text-5xl lg:text-7xl'>
              pire
            </span>
          </div>
          <EqualsIcon className='text-neutral-100 w-16 h-16 md:w-20 md:h-20' />
          <HashpireIcon />
        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-background-darker text-center py-16 px-6 md:py-20 md:px-8 lg:py-28 lg:px-32'>
        <span className='text-primary text-xl font-semibold md:text-2xl'>
          hashpire
        </span>{' '}
        <span className='text-neutral-100 text-xl font-semibold whitespace-pre-line md:text-2xl md:whitespace-normal'>
          {`is a community-driven \nDigital Garden`}
        </span>
        <p className='mt-6 text-base text-primary sm:whitespace-pre-line md:text-xl md:font-semibold md:text-neutral-400 lg:text-primary'>
          {`A space for people to create, curate, cultivate and discuss content \nrelated to the Decentralize web`}
        </p>
        <div className='mt-16'>
          <span className='block text-2xl font-semibold text-neutral-100 underline'>
            Community Goals
          </span>
          <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-5 md:grid-cols-3'>
            {communityGoals.map((goal, key) => (
              <p
                className='text-sm text-neutral-200 whitespace-pre-line md:whitespace-normal lg:whitespace-pre-line'
                key={key}
              >
                {goal}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='bg-background text-center py-16 px-6 md:py-20 md:px-8 lg:p-28'>
        <div>
          <span className='text-3xl text-neutral-100 font-semibold md:text-4xl'>
            #
          </span>{' '}
          <span className='text-3xl text-primary font-semibold md:text-4xl'>
            Digital Garden
          </span>
        </div>
        <p className='mt-6 text-neutral-200 text-sm md:text-base md:whitespace-pre-line'>
          {`A digital garden is a public space of information where seeds of thought are growing. It's \nabout writing and creating process-oriented networking cotntent.`}
        </p>
        <div className='mt-6 mb-12'>
          <span className='text-sm font-normal text-primary md:text-base md:font-semibold'>
            Garden
          </span>{' '}
          <p className='inline text-sm font-normal text-neutral-200 md:text-base md:font-semibold lg:whitespace-pre-line'>
            {`is a place where thungs grow in public we plant seeds and allow visitors to nurture \nplants and pull weeds to exploring new experiences.`}
          </p>
        </div>
        <IdeaPotIcon className='inline' />
        <div className='mt-14 grid grid-cols-1 gap-y-14 md:grid-cols-3 md:gap-x-2'>
          {garden.map((item, key) => (
            <div
              className='flex flex-col items-center whitespace-pre-line'
              key={key}
            >
              {item.icon}
              <span className='block mt-2.5 text-xl font-bold text-primary'>
                {item.title}
              </span>
              <span className='block mt-2.5 text-xs font-normal text-neutral-200'>
                {item.description}
              </span>
              <span className='block text-xs font-normal text-neutral-400'>
                {item.subDescription}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 */}
      <div className='bg-background-darker text-center py-16 px-6 md:py-20 md:px-8 lg:p-28'>
        <span className='text-neutral-100 text-4xl font-semibold'>#</span>{' '}
        <span className='text-primary text-4xl font-semibold'>Why join ?</span>
        <div className='mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:mt-24 lg:gap-20'>
          {whyjoin.map((item, key) => (
            <div className='text-center whitespace-pre-line' key={key}>
              <span className='inline-block w-4 h-4 rounded-full bg-primary' />
              <span className='block mt-2 text-base font-semibold text-neutral-200'>
                {item}
              </span>
            </div>
          ))}
        </div>
        <button className='mt-12 text-base font-semibold text-primary py-3 px-8 rounded-3xl border border-primary'>
          Join the community
        </button>
      </div>
    </Layout>
  );
};

export default About;
