import Layout from '../components/Layout'
import Link from 'next/link'


const IndexPage = (): JSX.Element => (
  <Layout title="Eduard Iskandarov's home page">
    <div className="h-2 bg-indigo-600" />

    <div className="text-center break-words text-gray-900 dark:text-white">
      <h1>Hi! I'm Eduard Iskandarov (<Link href="https://twitter.com/emcpow2">@emcpow2</Link>) 👋.</h1>
      <p>I'm a software engineer and entrepreneur from Russia. 🇷🇺</p>
      <p>I'm currently exploring ideas to build a tech startup.</p>
      <p>I have been dealing with high load and big data challenges in the biggest Russian IT Company and helped a Southeast Asian fintech startup cross the Death Valley.</p>
      <p>Aside from software, I built teams that work autonomously and yield outstanding results.</p>
      <p>I like to code serverless applications using Python, TypeScript, focus on security and automation.</p>
    </div>
  </Layout>
)

export default IndexPage
