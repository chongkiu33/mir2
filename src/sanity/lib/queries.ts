import {defineQuery} from "next-sanity"

export const ACTIVITIES_LIST_QUERY = defineQuery(`*[
    _type == "archiv" 
    && defined(slug.current)
    ] {
    _id,
    title,
    slug,
    publishDate,
    "tags": tag[]->TagName,
    description,
    author,
    coverImage,
  } | order(publishDate desc)`);

  export const ARTICLE_PAGE_QUERY = defineQuery(`*[
    _type == "archiv" &&
    slug.current == $slug
  ][0]{
    ...,
    "date": coalesce(publishedAt, _createdAt),
    categories[]->
}`);