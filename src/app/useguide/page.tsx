// app/docs/guide/page.tsx
import { NotionAPI } from 'notion-client';
import NotionDoc from './render';
export const revalidate = 300; 


export default async function GuidePage() {

  const api = new NotionAPI();
  const pageId = '1f3ee7f84a4880259cd4d9ca05b9ff04'; // 你的 Notion 页面ID
  const recordMap = await api.getPage(pageId);

        return(
        <div className="notion-doc">
         <NotionDoc
        recordMap={recordMap} />
        </div>
        );
}
