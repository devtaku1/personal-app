import { GetStaticProps, NextPage } from 'next';

import { Blog } from '@interfaces/Blog';
import { getBlogs } from '@lib/blogs';
import { BlogList } from '@components/blogs';
import { PageLayout } from '@components/layout';

type Props = {
  blogs: Blog[];
};

const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <PageLayout pageTitle='All Blogs'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        All Blogs
      </h2>
      <BlogList blogs={blogs} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = getBlogs();

  return {
    props: { blogs },
  };
};

export default BlogsPage;
