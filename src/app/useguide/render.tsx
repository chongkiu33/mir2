'use client';

import dynamic from 'next/dynamic';

const NotionRenderer = dynamic(
  () => import('react-notion-x').then((m) => m.NotionRenderer),
  { ssr: false }
);

export default function NotionDoc({ recordMap }: { recordMap: any }) {
  return (
    <div className="min-h-screen">
      <NotionRenderer
        recordMap={recordMap}
        fullPage
        darkMode={false} // 你站点是暗黑就改成 true
      />
    </div>
  );
}
