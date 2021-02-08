import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import PostLayout from "../../components/PostLayout";

type Props = {
  content: string;
  frontmatter: {
    title: string;
    description: string;
  };
};

const Post = ({ content, frontmatter }: Props): JSX.Element => {
  return (
    <PostLayout title={frontmatter.title} description={frontmatter.description}>
      <ReactMarkdown source={content} />
    </PostLayout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("content/posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);
  const frontmatter = { ...data };

  return {
    props: {
      content,
      frontmatter,
    },
  };
};
