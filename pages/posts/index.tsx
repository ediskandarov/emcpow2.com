import PostLayout from "../../components/PostLayout";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => (
  <PostLayout title="blog index" description="blog index description">
    <main>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </PostLayout>
);

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
