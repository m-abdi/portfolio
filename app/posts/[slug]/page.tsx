import Post from './Post';
import { PostType } from '@/types/data';

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await fetch(
    process.env.NEXT_PUBLIC_CMS_HOST +
      `/api/posts?filters[slug][$eq]=${params.slug}`,
    { headers: { Authorization: `bearer ${process.env.CMS_API_TOKEN}` } }
  ).then((resp) => resp.json());

  return <Post data={postData.data[0]} />;
}

export async function generateStaticParams() {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_CMS_HOST + '/api/posts?populate=*',
    {
      headers: { Authorization: `bearer ${process.env.CMS_API_TOKEN}` },
    }
  ).then((resp) => resp.json());
  return posts.data.map((post: PostType) => ({
    slug: post.attributes.slug,
  }));
}
