import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import Link from "next/link";

const IndexPage = (): JSX.Element => (
  <Layout
    title="Eduard Iskandarov's home page"
    description="Hello, this is Eduard. Here you will find out who I am and some useful bits of knowledge."
  >
    <figure className="sm:w-max mx-auto sm:mt-6">
      <Image
        className="sm:rounded-3xl"
        src="/me.jpg"
        alt="Picture of Eduard"
        width={500}
        height={500}
      />
    </figure>
    <main className="text-center break-words text-gray-900 dark:text-white text-lg">
      <h1 className="mt-6 text-3xl">
        Hi! I'm Eduard Iskandarov (
        <Link prefetch={false} href="https://twitter.com/emcpow2">
          <a className="text-yellow-600">@emcpow2</a>
        </Link>
        ) 👋.
      </h1>
      <p className="mt-6">
        I'm a software engineer and entrepreneur from Russia. 🇷🇺
      </p>
      <p className="mt-6">
        I'm currently exploring ideas to build a tech startup. 🎉
      </p>
      <p className="mt-6">
        I have been dealing with high load and big data challenges in the
        biggest Russian IT Company and helped a Southeast Asian fintech startup
        cross the Death Valley. 👨‍🔧
      </p>
      <p className="mt-6">
        Aside from software, I built teams that work autonomously and yield
        outstanding results. 🍰
      </p>
      <p className="mt-6">
        I like to code serverless applications using Python, TypeScript, focus
        on security and automation. 🚀
      </p>
    </main>
    <SocialLinks />
  </Layout>
);

export default IndexPage;
