"use client";
import dynamic from 'next/dynamic';

// 这一行是关键：ssr: false 意思就是“不要在服务器上运行，只在浏览器运行”
// 这样就完美避开了 localStorage 报错
const ClientPage = dynamic(() => import('./ClientPage'), { ssr: false });

export default function Page() {
  return <ClientPage />;
}
