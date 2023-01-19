import BlogItem from './BlogItem';

const blogs = [
  {
    slug: 'creating-a-game-engine-from-scratch',
    title: 'Creating a Game Engine From Scratch',
    description:
      'In hac habitasse platea dictumst. Vestibulum vitae porta lacus, lobortis semper ante.',
    date: '2023-01-18',
    coverImage: 'https://picsum.photos/id/96/1920/1080',
  },
  {
    slug: 'what-working-remotely-is-like',
    title: 'What Working Remotely is Like',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas congue ultrices.',
    date: '2022-01-12',
    coverImage: 'https://picsum.photos/id/200/1920/1080',
  },
  {
    slug: 'learning-nextjs-as-a-backend-dev',
    title: 'Learning Next JS as a Backend .NET Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas congue ultrices.',
    date: '2022-01-01',
    coverImage: 'https://picsum.photos/id/120/1920/1080',
  },
];

const BlogList = () => {
  return (
    <div className='grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {blogs.map((blog) => (
        <BlogItem key={blog.slug} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
