import Navbar from '../../layouts/Navbar';
import { MainPageFooter, SidePanelFooter } from '../../layouts/footer';
import Hashtag from '../../Hashtag';
import Link from '../../Link';
import Contributor from '../../Contributor';
import PostCard from '../../cards/PostCard';
import MocCard from '../../cards/MocCard';
import ContributorCard from '../../cards/ContributorCard';
import Tooltip from '../../Tooltip';
import SidePageLink from '../../SidePageLink';
import MocLibrary from '../../MocLibrary';
import PageLink from '../../PageLink';
import Pagination from '../../Pagination';
import Badge from '../../Badge';
import CollapseToggle from '../../CollapseToggle';
import TableOfContent from '../../TableOfContent';
import RelationToPage from '../../RelationToPage';
import Tab from '../../Tab';
import Search from '../../Search';
import Header from '../../Header';
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  CommunityIcon,
  CrossIcon,
  DiscoverIcon,
  FacebookIcon,
  FolderIcon,
  GithubIcon,
  HashIcon,
  HomeIcon,
  IdeaIcon,
  InstagramIcon,
  LeftPaneIcon,
  RightPaneIcon,
  LinkIcon,
  ListIcon,
  ListBulletIcon,
  MailIcon,
  MoreIcon,
  TriangleDownIcon,
  TriangleRightIcon,
  TwitterIcon,
} from '../../Icon';
import { posts } from './posts';
import { collapseToggle } from './collapseToggle';
import { tableOfContents } from './tableOfContent';

const Components: React.FC<{}> = () => {
  return (
    <div className='bg-black min-h-screen p-6 space-y-6'>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Navbar
        </span>
        <Navbar
          config={{
            mobile: {
              tab: { active: 'home' },
              leftIconClick: () => {},
              rightIconClick: () => {},
            },
            desktop: {
              active: 'home',
            },
          }}
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Main Page Footer
        </span>
        <MainPageFooter />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Side Panel Footer
        </span>
        <SidePanelFooter />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Hashtag Button
        </span>
        <Hashtag name='medium' className='mr-2' />
        <Hashtag name='staking' disabled className='mr-2' />
        <Hashtag name='small' size='small' className='mr-2' />
        <Hashtag name='staking' size='small' disabled />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Link Button
        </span>
        <div className='text-neutral-1'>
          <Link title='Go to garden' />
        </div>
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Badge
        </span>
        <Badge title='Sponsor' />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Contributor
        </span>
        <Contributor
          users={[
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
          ]}
        />
        <br />
        <Contributor
          users={[
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Mishale',
              profileImageUrl:
                'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
          ]}
        />
        <br />
        <Contributor
          users={[
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Mishale',
              profileImageUrl:
                'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Mishale',
              profileImageUrl:
                'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Mishale',
              profileImageUrl:
                'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
          ]}
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Post Card
        </span>
        <PostCard
          title='5 tips to create a modern app UI5 tips to create a modern app UI'
          description='Voluptate sunt do magna ad esse laborum fugiat. Labore ex mollit eiusmod Lorem commodo dolore et adipisicing elit. Lorem et sit nisi nostrud fugiat duis. Amet adipisicing qui adipisicing culpa anim ullamco consequat eiusmod cillum laboris eu enim. Sunt labore et cupidatat cillum cupidatat duis Lorem occaecat proident. Ut quis proident nostrud ullamco ea. Est amet sint non Lorem enim eiusmod adipisicing in dolor do.
Laborum do non commodo ipsum adipisicing elit. Incididunt Lorem velit aute sint elit amet veniam sint. Excepteur ipsum esse consectetur elit nulla reprehenderit incididunt do veniam eiusmod consectetur do voluptate Lorem. Enim aliquip cillum cillum ex ut commodo sint anim excepteur. Consequat enim occaecat non qui ipsum in ea commodo ad aute esse.'
          coverImage='https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1477&q=80'
          tags={[{ name: 'elephant' }, { name: 'animal' }]}
          users={[
            {
              displayName: 'Jonathan',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Mishale',
              profileImageUrl:
                'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
          ]}
          publishedAt='Aug 20, 2021'
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          MOC Card
        </span>
        <MocCard
          title='Parachain'
          description='Voluptate sunt do magna ad esse laborum fugiat. Labore ex mollit eiusmod Lorem commodo dolore et adipisicing elit. Lorem et sit nisi nostrud fugiat duis. Amet adipisicing qui adipisicing culpa anim ullamco consequat eiusmod cillum laboris eu enim. Sunt labore et cupidatat cillum cupidatat duis Lorem occaecat proident. Ut quis proident nostrud ullamco ea. Est amet sint non Lorem enim eiusmod adipisicing in dolor do.
Laborum do non commodo ipsum adipisicing elit. Incididunt Lorem velit aute sint elit amet veniam sint. Excepteur ipsum esse consectetur elit nulla reprehenderit incididunt do veniam eiusmod consectetur do voluptate Lorem. Enim aliquip cillum cillum ex ut commodo sint anim excepteur. Consequat enim occaecat non qui ipsum in ea commodo ad aute esse.'
          coverImage='https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          users={[
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Robert',
              profileImageUrl:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
              displayName: 'Mishale',
              profileImageUrl:
                'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
            {
              displayName: 'Bozo',
              profileImageUrl:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
            },
            {
              displayName: 'Natacha',
              profileImageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
          ]}
          publishedAt='Aug 20, 2021'
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-12'>
          Contributor Card
        </span>
        <ContributorCard
          displayName='Jonathan Smith'
          bio='Eiusmod fugiat pariatur fugiat incididunt ut labore esse aliqua elit reprehenderit aliqua. Non aute culpa reprehenderit est aliquip culpa sunt sit ea. Ad amet eu ex aliquip magna exercitation labore laborum minim incididunt ea aute quis. Nisi pariatur mollit aliqua pariatur officia. Consectetur labore laborum sunt eiusmod occaecat ipsum proident minim aute quis ipsum id incididunt.'
          profileImageUrl='https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
          badge='Contributor'
          contacts={{
            github: '/',
            facebook: '/',
            instagram: '/',
            twitter: '/',
            mail: '/',
          }}
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Tooltip
        </span>
        <Tooltip>
          Aute ad officia eiusmod mollit minim ut dolor incididunt exercitation
          aute culpa ad. In eu excepteur non ex. Sunt commodo laborum velit
          aliqua duis tempor sit. Tempor mollit ex cillum reprehenderit tempor
          qui aute veniam est tempor veniam occaecat elit. Elit Lorem dolor
          cillum quis. Tempor incididunt cupidatat pariatur cillum dolor
          consequat culpa est aliquip sunt excepteur. Sit cupidatat laboris sint
          ullamco id do officia laboris ea ea commodo sint. Pariatur voluptate
          laboris eiusmod eiusmod culpa commodo voluptate culpa tempor sit
          laborum cillum laboris. Dolor magna adipisicing id minim anim qui
          mollit nulla ut cupidatat duis ipsum. Sunt excepteur enim ea
          exercitation voluptate magna nisi eu nisi aute ea officia fugiat enim.
          Magna sunt consequat fugiat deserunt fugiat tempor do quis quis minim
          non. Fugiat ea commodo culpa proident mollit aliqua. Fugiat
          exercitation dolore aliquip duis est anim occaecat eiusmod. Occaecat
          elit eu amet nisi officia. Irure amet exercitation adipisicing amet.
          Magna consequat dolor nulla ullamco adipisicing magna laborum magna ad
          id dolor sunt. Amet id nulla sunt adipisicing nulla veniam proident
          aliquip dolor in ipsum tempor. Exercitation fugiat sint ullamco qui
          nulla ullamco do aute. Dolore commodo deserunt aliqua veniam sint
          fugiat cillum non do eiusmod et id. Eu veniam aliqua magna cillum eu
          ea. Lorem cillum cillum consequat aliqua anim consectetur mollit
          cillum duis.
        </Tooltip>
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Side Page Link
        </span>
        <SidePageLink
          links={[
            { title: 'The details element', url: '/' },
            { title: 'The theory of test', url: '/' },
            { title: 'The theory of begin', url: '/' },
          ]}
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          MOC Library
        </span>
        <MocLibrary
          items={[
            { title: 'Bitcoin', url: '/' },
            { title: 'Mana', url: '/' },
            { title: 'Polkadot', url: '/' },
          ]}
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Page Link
        </span>
        <PageLink
          moc={{
            items: [
              { title: 'Bitcoin', url: '/' },
              { title: 'Mana', url: '/' },
              { title: 'Polkadot', url: '/' },
            ],
          }}
          linkPage={{
            links: [
              { title: 'The details element', url: '/' },
              { title: 'The theory of test', url: '/' },
              { title: 'The theory of begin', url: '/' },
            ],
          }}
        />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Pagination
        </span>
        <div className='block md:hidden'>
          <Pagination perPage={3} siblingCount={0} data={posts} />
        </div>
        <div className='hidden md:block'>
          <Pagination perPage={3} siblingCount={1} data={posts} />
        </div>
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Collapse Toggle
        </span>
        <CollapseToggle data={collapseToggle} showItemsCount />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Table of contents
        </span>
        <TableOfContent data={tableOfContents} />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Relation to this page
        </span>
        <RelationToPage data={tableOfContents} />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Tab
        </span>
        <Tab active='home' />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Search
        </span>
        <Search />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Header
        </span>
        <Header title='📌 Feature MOCs' />
        <br />
        <Header title='📝 ALL NOTES' />
      </div>
      <div className='bg-gray-700 py-4 px-4'>
        <span className='block text-accent text-2xl font-semibold mb-3'>
          Icons
        </span>
        <div className='flex space-x-2'>
          <CaretUpIcon />
          <CaretDownIcon />
          <CaretLeftIcon />
          <CaretRightIcon />
          <CrossIcon />
          <HomeIcon />
          <IdeaIcon />
          <CommunityIcon />
          <DiscoverIcon />
          <FolderIcon />
          <LeftPaneIcon />
          <RightPaneIcon />
          <LinkIcon />
          <ListIcon />
          <ListBulletIcon />
          <MailIcon />
          <MoreIcon />
          <TriangleDownIcon />
          <TriangleRightIcon />
          <TwitterIcon />
          <FacebookIcon />
          <GithubIcon />
          <InstagramIcon />
          <HashIcon />
        </div>
      </div>
    </div>
  );
};

export default Components;
