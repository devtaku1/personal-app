import { NextPage } from 'next/types';
import { BaseLayout } from '../../components/layout';

const BlogDetail: NextPage = () => {
  return (
    <>
      <BaseLayout>
        <div className='w-2/3 m-auto'>
          {/* Blog Header Starts */}
          <div className='blog-detail-header'>
            <div className='flex flex-row justify-between mb-2'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <a href='#'>
                    <span className='sr-only'>Author Name</span>
                    <div className='relative h-10 w-10 !mb-0'>
                      {/* <Image 
                        priority
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={authorImage} alt="" 
                      /> */}
                    </div>
                  </a>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900 !mb-0'>
                    <a href='#' className='hover:underline'>
                      Author Name
                    </a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime='{date}'>2022-10-10</time>
                  </div>
                </div>
              </div>
              <div className='flex self-end'>{/* Social Links Here */}</div>
            </div>
            <h1 className='mb-1 text-4xl font-bold'>My First Blog</h1>
            <h2 className='mb-2 text-xl text-gray-600 blog-detail-header-subtitle'>
              My first blog description
            </h2>
            <div className='relative w-full mx-auto bg-black h-96'>
              {/* <Image
                priority
                layout="fill"
                objectFit="cover"
                src={coverImage} alt=""/> */}
            </div>
          </div>
          {/* Blog Header Ends */}
          <article className='prose lg:prose-lg markdown-image-50'>
            {/* Blog Content Here */}
            Content Here
          </article>
        </div>
      </BaseLayout>
    </>
  );
};

export default BlogDetail;
