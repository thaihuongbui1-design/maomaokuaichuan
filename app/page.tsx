"use client";
import dynamic from 'next/dynamic';

// 这行代码是魔法：它告诉 Next.js "只在浏览器里加载这个组件，服务器别碰它"
const ClientPage = dynamic(() => import('./ClientPage'), { ssr: false });

export default function Page() {
  return <ClientPage />;
}
