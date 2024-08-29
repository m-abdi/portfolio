import Post from './Post';
import { PostType } from '@/types/data';
import cmsClient from '../../src/data/CMS'

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await cmsClient.getOnePost(params.slug)
  return <Post data={postData.data[0]} />;
}

export async function generateStaticParams() {
  const posts = await cmsClient.getAllPosts()
  return posts.data.map((post: PostType) => ({
    slug: post.attributes.slug,
  }));
}
