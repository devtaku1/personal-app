import { NextPage } from 'next/types';
import { PageLayout } from '@components/layout';
import { getBlogBySlug, getBlogsSlugs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';

type Props = {
  blog: Blog;
};

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <PageLayout>
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
                      {blog.author}
                    </a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime='{date}'>{blog.date}</time>
                  </div>
                </div>
              </div>
              <div className='flex self-end'>{/* Social Links Here */}</div>
            </div>
            <h1 className='mb-1 text-4xl font-bold'>{blog.title}</h1>
            <h2 className='mb-2 text-xl text-gray-600 blog-detail-header-subtitle'>
              {blog.description}
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
            {blog.content}
          </article>
        </div>
      </PageLayout>
    </>
  );
};

export const getStaticProps = (context: any) => {
  const { slug } = context.params;
  const blog = getBlogBySlug(slug);

  return { props: { blog } };
};

export const getStaticPaths = () => {
  const slugs = getBlogsSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
};

export default BlogDetail;
