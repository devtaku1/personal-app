import Image from 'next/legacy/image';
import Link from 'next/link';

const BlogItem = ({ blog }: any) => {
  return (
    <div key={blog.slug} className='group'>
      <div className='w-full bg-gray-200 rounded-md h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-40'>
        <Link legacyBehavior href={`/blogs/${blog.slug}`}>
          <a>
            <div className='relative w-full bg-gray-200 rounded-md h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-40'>
              <Image
                priority
                layout='fill'
                objectFit='cover'
                src={blog.coverImage}
                className='rounded-lg hover:cursor-pointer'
                alt={''}
              />
            </div>
          </a>
        </Link>
      </div>
      <div className='flex justify-between mt-4'>
        <div>
          <h3 className='text-sm font-bold text-gray-700'>
            <span aria-hidden='true' className='inset-0' />
            {blog.title}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{blog.description}</p>
        </div>
      </div>
      <Link legacyBehavior href={`/blogs/${blog.slug}`}>
        <a className='text-sm font-bold text-gray-700'>Read More</a>
      </Link>
    </div>
  );
};

export default BlogItem;
