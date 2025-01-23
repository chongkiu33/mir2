export interface Tag {
    documentId: string; // Assuming each category has a unique ID
    name: string;
  }
  
  export interface ArchivPost {
    id: number;
    title: '';
    slug:'';
    publishDate:'';
    description: string;
    content: string; // rich markdown text
    artistName:'';
    cover:'';
    tags: Tag[]; // An array of categories associated with the post
  }