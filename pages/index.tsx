import Layout from '../components/Layout'
import Link from 'next/link'


const IndexPage = (): JSX.Element => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-red-500">Hello Next.js 👋</h1>
    <p>Hi! I'm Eduard Iskandarov (<Link href="https://twitter.com/emcpow2">@emcpow2</Link>) 👋.</p>
    <p>I'm a software engineer and entrepreneur from Russia. 🇷🇺</p>
    <p>I'm currently exploring ideas to build a tech startup.</p>
    <p>I have been dealing with high load and big data challenges in the biggest Russian IT Company and helped a Southeast Asian fintech startup cross the Death Valley.</p>
    <p>Aside from software, I built teams that work autonomously and yield outstanding results.</p>
    <p>I like to code serverless applications using Python, TypeScript, focus on security and automation.</p>
  </Layout>
)

export default IndexPage
