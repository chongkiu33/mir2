/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Imggallery = {
  _type: "imggallery";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Fourimagestext = {
  _type: "fourimagestext";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SpecialA = {
  _type: "specialA";
  layout?: "abc" | "cab";
  texta?: string;
  textb?: string;
  textc?: string;
  ratio?: {
    textab?: number;
    textc?: number;
  };
};

export type CarouselWText = {
  _type: "carouselWText";
  layout?: "left" | "right";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Singleimage = {
  _type: "singleimage";
  spacing?: "full" | "withPadding";
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  alt?: string;
};

export type Narrowcontent = {
  _type: "narrowcontent";
  contentElements?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Columntext = {
  _type: "columntext";
  spacing?: "narrow" | "wide";
  text?: Array<{
    _key: string;
  } & Plaintext>;
};

export type Threeimagetext = {
  _type: "threeimagetext";
  imageLeft?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | {
    spacing?: "narrow" | "wide";
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    imageWidthRatio?: {
      left?: number;
      right?: number;
    };
    _type: "ColumnImages";
    _key: string;
  }>;
  imageRight?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Twoimagetext = {
  _type: "twoimagetext";
  layout?: "left" | "right";
  widthRatio?: {
    image?: number;
    text?: number;
  };
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | {
    spacing?: "narrow" | "wide";
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    imageWidthRatio?: {
      left?: number;
      right?: number;
    };
    _type: "ColumnImages";
    _key: string;
  }>;
};

export type Twotothreeimages = {
  _type: "twotothreeimages";
  spacing?: "narrow" | "wide";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  imageWidthRatio?: {
    left?: number;
    right?: number;
  };
};

export type Combineimages = {
  _type: "combineimages";
  colums?: Array<{
    _key: string;
  } & Carousel | {
    _key: string;
  } & Tripeimage | {
    _key: string;
  } & Gridimages | {
    _key: string;
  } & Unalignimage | {
    _key: string;
  } & Twotothreeimages | {
    _key: string;
  } & SpecialA | {
    _key: string;
  } & Twoimagetext | {
    _key: string;
  } & Threeimagetext | {
    _key: string;
  } & Fourimagestext | {
    _key: string;
  } & CarouselWText | {
    _key: string;
  } & Columntext>;
};

export type Unalignimage = {
  _type: "unalignimage";
  align?: "top" | "bottom";
  images?: Array<{
    imageFile?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      span?: number;
      _type: "image";
    };
    _type: "imagesWithWidth";
    _key: string;
  }>;
};

export type Gridimages = {
  _type: "gridimages";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Tripeimage = {
  _type: "tripeimage";
  layout?: "left" | "right";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Order = {
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  products?: Array<{
    product?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "product";
    };
    quantity?: number;
    _key: string;
  }>;
  stripeCheckoutSessionId?: string;
  clerkUserId?: string;
  stripeCustomerId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  totalPrice?: number;
  currency?: string;
  orderDate?: string;
};

export type Carousel = {
  _type: "carousel";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  autoplay?: boolean;
};

export type TextBlock = {
  _type: "textBlock";
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | {
    spacing?: "narrow" | "wide";
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    imageWidthRatio?: {
      left?: number;
      right?: number;
    };
    _type: "ColumnImages";
    _key: string;
  }>;
  colstart?: number;
  colend?: number;
};

export type Columimages = {
  _type: "columimages";
  colums?: Array<{
    _key: string;
  } & ImageBlock | {
    _key: string;
  } & TextBlock>;
};

export type ImageBlock = {
  _type: "imageBlock";
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  alt?: string;
  colstart?: number;
  colend?: number;
};

export type Videoblock = {
  _type: "videoblock";
  spacing?: "full" | "withPadding";
  videolink?: string;
  videotitle?: string;
};

export type Plain = {
  _type: "plain";
  arrangement?: "alignTop" | "firstLineMarginTop";
};

export type Plaintext = {
  _type: "plaintext";
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | {
    spacing?: "narrow" | "wide";
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    imageWidthRatio?: {
      left?: number;
      right?: number;
    };
    _type: "ColumnImages";
    _key: string;
  }>;
};

export type SplitImage = {
  _type: "splitImage";
  leftSpan?: number;
  rightSpan?: number;
  imageLeft?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  imageRight?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type PageBuilder = Array<{
  _key: string;
} & Plain | {
  _key: string;
} & Plaintext | {
  _key: string;
} & Videoblock | {
  _key: string;
} & Singleimage | {
  _key: string;
} & Carousel | {
  _key: string;
} & CarouselWText | {
  _key: string;
} & Twotothreeimages | {
  _key: string;
} & Unalignimage | {
  _key: string;
} & Tripeimage | {
  _key: string;
} & Gridimages | {
  _key: string;
} & Narrowcontent | {
  _key: string;
} & Combineimages | {
  _key: string;
} & Imggallery | {
  _key: string;
} & Twoimagetext | {
  _key: string;
} & Threeimagetext | {
  _key: string;
} & Fourimagestext | {
  _key: string;
} & Columntext | {
  _key: string;
} & SpecialA | {
  _key: string;
} & Columimages>;

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  category?: "material" | "type" | "artist";
  slug?: Slug;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  productimage?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  description?: string;
  price?: number;
  slug?: Slug;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  stock?: number;
};

export type Objectpage = {
  _id: string;
  _type: "objectpage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  artist?: string;
  objectimage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  isOneOfTwenty?: boolean;
  objectposition?: {
    x?: number;
    y?: number;
    z?: number;
  };
  content?: PageBuilder;
};

export type Basic = {
  _id: string;
  _type: "basic";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  homeimage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  info1?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  info2?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  info3?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  email?: string;
  instagram?: string;
};

export type Tag = {
  _id: string;
  _type: "tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  TagName?: string;
};

export type Archiv = {
  _id: string;
  _type: "archiv";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: string;
  tag?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "tag";
  }>;
  description?: string;
  publishDate?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content2?: PageBuilder;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Imggallery | Fourimagestext | SpecialA | CarouselWText | Singleimage | Narrowcontent | Columntext | Threeimagetext | Twoimagetext | Twotothreeimages | Combineimages | Unalignimage | Gridimages | Tripeimage | Order | Carousel | TextBlock | Columimages | ImageBlock | Videoblock | Plain | Plaintext | SplitImage | PageBuilder | Category | Product | Objectpage | Basic | Tag | Archiv | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../mirdog-main/src/app/archiv/[slug]/page.tsx
// Variable: ARTICLE_QUERY
// Query: *[    _type == "archiv" &&    slug.current == $slug  ][0]{    ...,    "date": coalesce(publishedAt, _createdAt),    categories[]->}
export type ARTICLE_QUERYResult = {
  _id: string;
  _type: "archiv";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: string;
  tag?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "tag";
  }>;
  description?: string;
  publishDate?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content2?: PageBuilder;
  date: string;
  categories: null;
} | null;

// Source: ../mirdog-main/src/app/archiv/page.tsx
// Variable: ACTIVITIES_QUERY
// Query: *[  _type == "archiv"   && defined(slug.current)  ] {  _id,  title,  slug,  publishDate,  "tags": tag[]->TagName,  description,  author,  coverImage {    asset->,    _type,    _key,  },} | order(publishDate desc)
export type ACTIVITIES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  publishDate: string | null;
  tags: Array<string | null> | null;
  description: string | null;
  author: string | null;
  coverImage: {
    asset: {
      _id: string;
      _type: "sanity.imageAsset";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata?: SanityImageMetadata;
      source?: SanityAssetSourceData;
    } | null;
    _type: "image";
    _key: null;
  } | null;
}>;

// Source: ../mirdog-main/src/app/components/WaterRippleContainer.tsx
// Variable: BASIC_IMAGE_QUERY
// Query: *[_type == "basic"][0]{  homeimage}
export type BASIC_IMAGE_QUERYResult = {
  homeimage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
} | null;

// Source: ../mirdog-main/src/app/info/page.tsx
// Variable: BASIC_INFO_PAGE_QUERY
// Query: *[_type == "basic"][0]{  info1,  info2,  info3,  email,  instagram}
export type BASIC_INFO_PAGE_QUERYResult = {
  info1: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  info2: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  info3: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  email: string | null;
  instagram: string | null;
} | null;

// Source: ../mirdog-main/src/app/object/[slug]/page.tsx
// Variable: OBJECT_QUERY
// Query: *[  _type == "objectpage" &&  slug.current == $slug][0]{  ...,  "date": coalesce(publishedAt, _createdAt),  categories[]->}
export type OBJECT_QUERYResult = {
  _id: string;
  _type: "objectpage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  artist?: string;
  objectimage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  isOneOfTwenty?: boolean;
  objectposition?: {
    x?: number;
    y?: number;
    z?: number;
  };
  content?: PageBuilder;
  date: string;
  categories: null;
} | null;
// Variable: OBJECTS_QUERY
// Query: *[  _type == "objectpage"   && defined(slug.current)  && isOneOfTwenty == true  ] {  _id,  title,  slug,  artist,  "position": [objectposition.x, objectposition.y, objectposition.z],  objectimage,} | order(publishDate desc)
export type OBJECTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  artist: string | null;
  position: Array<number | null>;
  objectimage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;

// Source: ../mirdog-main/src/app/object/page.tsx
// Variable: OBJECTS_PAGE_QUERY
// Query: *[    _type == "objectpage"     && defined(slug.current)    && isOneOfTwenty == true    ] {    _id,    title,    slug,    artist,    "position": [objectposition.x, objectposition.y, objectposition.z],    objectimage,  } | order(publishDate desc)
export type OBJECTS_PAGE_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  artist: string | null;
  position: Array<number | null>;
  objectimage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;

// Source: ../mirdog-main/src/app/page.tsx
// Variable: BASIC_INFO_QUERY
// Query: *[_type == "basic"][0]{  homeimage}
export type BASIC_INFO_QUERYResult = {
  homeimage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
} | null;

// Source: ../mirdog-main/src/app/shop/page.tsx
// Variable: PRODUCTS_QUERY
// Query: *[  _type == "product"   && defined(slug.current)  ] {  _id,  "imageUrl": productimage[0].asset->url,  slug,  price_id,  price,  stock}
export type PRODUCTS_QUERYResult = Array<{
  _id: string;
  imageUrl: string | null;
  slug: Slug | null;
  price_id: null;
  price: number | null;
  stock: number | null;
}>;

// Source: ../mirdog-main/src/sanity/lib/orders/getMyOrders.tsx
// Variable: MY_ORDERS_QUERY
// Query: *[_type == "order" && clerkUserId == $userId] | order(orderDate desc){            ...,            products[]{                ...,                product->            }        }
export type MY_ORDERS_QUERYResult = Array<{
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  status?: "cancelled" | "delivered" | "paid" | "pending" | "shipped";
  products: Array<{
    product: {
      _id: string;
      _type: "product";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name?: string;
      productimage?: Array<{
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }>;
      description?: string;
      price?: number;
      slug?: Slug;
      category?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "category";
      }>;
      stock?: number;
    } | null;
    quantity?: number;
    _key: string;
  }> | null;
  stripeCheckoutSessionId?: string;
  clerkUserId?: string;
  stripeCustomerId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  totalPrice?: number;
  currency?: string;
  orderDate?: string;
}>;

// Source: ../mirdog-main/src/sanity/lib/products/getAllCategories.ts
// Variable: ALL_CATEGORIES_QUERY
// Query: *[_type == "category"] | order(name asc)
export type ALL_CATEGORIES_QUERYResult = Array<{
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  category?: "artist" | "material" | "type";
  slug?: Slug;
}>;

// Source: ../mirdog-main/src/sanity/lib/products/getAllProducts.ts
// Variable: ALL_PRODUCTS_QUERY
// Query: *[_type == "product"] | order(name asc) {      _id,      name,      slug,      stock,      price,      productimage[] {        asset-> {          url        }      }    }
export type ALL_PRODUCTS_QUERYResult = Array<{
  _id: string;
  name: string | null;
  slug: Slug | null;
  stock: number | null;
  price: number | null;
  productimage: Array<{
    asset: {
      url: string | null;
    } | null;
  }> | null;
}>;

// Source: ../mirdog-main/src/sanity/lib/products/getProductBySlug.tsx
// Variable: PRODUCT_BY_SLUG_QUERY
// Query: *[    _type == "product" && slug.current == $slug    ] |order(name asc) [0]{    _id,    name,    slug,    stock,    description,    category[]->,    price,    productimage[] {    asset-> {          url        }      }    }
export type PRODUCT_BY_SLUG_QUERYResult = {
  _id: string;
  name: string ;
  slug: Slug ;
  stock: number ;
  description: string ;
  category: Array<{
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    category?: "artist" | "material" | "type";
    slug?: Slug;
  }> ;
  price: number;
  productimage: Array<{
    asset: {
      url: string ;
    } ;
  }> ;
} ;

// Source: ../mirdog-main/src/sanity/lib/products/searchProductsByCategories.ts
// Variable: PRODUCTS_CATEGORIES_QUERY
// Query: *[_type == "product" && count((category[]->slug.current)[@ in $categories]) == count($categories)] | order(name asc) {      _id,      name,      slug,      stock,      price,      productimage[] {        asset-> {          url        }      }    }
export type PRODUCTS_CATEGORIES_QUERYResult = Array<{
  _id: string;
  name: string | null;
  slug: Slug | null;
  stock: number | null;
  price: number | null;
  productimage: Array<{
    asset: {
      url: string | null;
    } | null;
  }> | null;
}>;

// Source: ../mirdog-main/src/sanity/lib/queries.ts
// Variable: ACTIVITIES_LIST_QUERY
// Query: *[    _type == "archiv"     && defined(slug.current)    ] {    _id,    title,    slug,    publishDate,    "tags": tag[]->TagName,    description,    author,    coverImage,  } | order(publishDate desc)
export type ACTIVITIES_LIST_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  publishDate: string | null;
  tags: Array<string | null> | null;
  description: string | null;
  author: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;
// Variable: ARTICLE_PAGE_QUERY
// Query: *[    _type == "archiv" &&    slug.current == $slug  ][0]{    ...,    "date": coalesce(publishedAt, _createdAt),    categories[]->}
export type ARTICLE_PAGE_QUERYResult = {
  _id: string;
  _type: "archiv";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: string;
  tag?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "tag";
  }>;
  description?: string;
  publishDate?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content2?: PageBuilder;
  date: string;
  categories: null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[\n    _type == \"archiv\" &&\n    slug.current == $slug\n  ][0]{\n    ...,\n    \"date\": coalesce(publishedAt, _createdAt),\n    categories[]->\n}": ARTICLE_QUERYResult | ARTICLE_PAGE_QUERYResult;
    "*[\n  _type == \"archiv\" \n  && defined(slug.current)\n  ] {\n  _id,\n  title,\n  slug,\n  publishDate,\n  \"tags\": tag[]->TagName,\n  description,\n  author,\n  coverImage {\n    asset->,\n    _type,\n    _key,\n  },\n} | order(publishDate desc)": ACTIVITIES_QUERYResult;
    "*[_type == \"basic\"][0]{\n  homeimage\n}": BASIC_IMAGE_QUERYResult | BASIC_INFO_QUERYResult;
    "*[_type == \"basic\"][0]{\n  info1,\n  info2,\n  info3,\n  email,\n  instagram\n}": BASIC_INFO_PAGE_QUERYResult;
    "*[\n  _type == \"objectpage\" &&\n  slug.current == $slug\n][0]{\n  ...,\n  \"date\": coalesce(publishedAt, _createdAt),\n  categories[]->\n}": OBJECT_QUERYResult;
    "*[\n  _type == \"objectpage\" \n  && defined(slug.current)\n  && isOneOfTwenty == true\n  ] {\n  _id,\n  title,\n  slug,\n  artist,\n  \"position\": [objectposition.x, objectposition.y, objectposition.z],\n  objectimage,\n} | order(publishDate desc)": OBJECTS_QUERYResult;
    "*[\n    _type == \"objectpage\" \n    && defined(slug.current)\n    && isOneOfTwenty == true\n    ] {\n    _id,\n    title,\n    slug,\n    artist,\n    \"position\": [objectposition.x, objectposition.y, objectposition.z],\n    objectimage,\n  } | order(publishDate desc)": OBJECTS_PAGE_QUERYResult;
    "*[\n  _type == \"product\" \n  && defined(slug.current)\n  ] {\n  _id,\n  \"imageUrl\": productimage[0].asset->url,\n  slug,\n  price_id,\n  price,\n  stock\n}": PRODUCTS_QUERYResult;
    "\n        *[_type == \"order\" && clerkUserId == $userId] | order(orderDate desc){\n            ...,\n            products[]{\n                ...,\n                product->\n            }\n        }\n  \n        ": MY_ORDERS_QUERYResult;
    "  \n        *[_type == \"category\"] | order(name asc)\n        \n        ": ALL_CATEGORIES_QUERYResult;
    "*[_type == \"product\"] | order(name asc) {\n      _id,\n      name,\n      slug,\n      stock,\n      price,\n      productimage[] {\n        asset-> {\n          url\n        }\n      }\n    }": ALL_PRODUCTS_QUERYResult;
    "\n    *[\n    _type == \"product\" && slug.current == $slug\n    ] |order(name asc) [0]{\n\n    _id,\n    name,\n    slug,\n    stock,\n    description,\n    category[]->,\n    price,\n    productimage[] {\n    asset-> {\n          url\n        }\n      }\n    }": PRODUCT_BY_SLUG_QUERYResult;
    "\n    *[_type == \"product\" && count((category[]->slug.current)[@ in $categories]) == count($categories)] | order(name asc) {\n      _id,\n      name,\n      slug,\n      stock,\n      price,\n      productimage[] {\n        asset-> {\n          url\n        }\n      }\n    }\n    ": PRODUCTS_CATEGORIES_QUERYResult;
    "*[\n    _type == \"archiv\" \n    && defined(slug.current)\n    ] {\n    _id,\n    title,\n    slug,\n    publishDate,\n    \"tags\": tag[]->TagName,\n    description,\n    author,\n    coverImage,\n  } | order(publishDate desc)": ACTIVITIES_LIST_QUERYResult;
  }
}
