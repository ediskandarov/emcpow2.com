import { ReactNode } from "react";
import Layout from "./Layout";

type Props = {
  children?: ReactNode;
  title: string;
  description: string;
};

const PostLayout = ({ children, title, description }: Props) => (
  <Layout title={title} description={description}>
    <article className="prose dark:prose-light">{children}</article>
  </Layout>
);

export default PostLayout;
