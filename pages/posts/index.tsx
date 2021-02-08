import matter from "gray-matter";
import fs from "fs";
import { GetStaticProps } from "next";
import PostLayout from "../../components/PostLayout";

const Blog = ({ posts }) => (
  <PostLayout title="blog index" description="blog index description">
    <main>
      <ul>
        {posts.map((post) => (
          <div>
            <h1>{post.frontmatter.title}</h1>
          </div>
        ))}
      </ul>
    </main>
  </PostLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
      content,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
