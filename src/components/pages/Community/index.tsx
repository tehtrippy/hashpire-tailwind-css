import React from 'react';
import PageHeader from '../../PageHeader';
import { Layout } from '../../layouts';
import { ContributorCard } from '../../cards';
import { contributors } from '../Community/contributors';

const Community: React.FC<{}> = () => {
  return (
    <Layout>
      <div className='hidden lg:block text-center'>
        <PageHeader title='Contributors' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {contributors.map((contributor, key) => (
          <ContributorCard {...contributor} className='mt-20' key={key} />
        ))}
      </div>
    </Layout>
  );
};

export default Community;
