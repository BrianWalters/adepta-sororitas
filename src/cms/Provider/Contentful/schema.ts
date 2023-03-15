export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  Quality: any;
};

/** An ability a unit or wargear can have [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/ability) */
export type Ability = Entry & {
  __typename?: 'Ability';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AbilityLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** An ability a unit or wargear can have [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/ability) */
export type AbilityLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** An ability a unit or wargear can have [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/ability) */
export type AbilityNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** An ability a unit or wargear can have [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/ability) */
export type AbilityRulesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AbilityCollection = {
  __typename?: 'AbilityCollection';
  items: Array<Maybe<Ability>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AbilityFilter = {
  AND?: InputMaybe<Array<InputMaybe<AbilityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AbilityFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<Scalars['String']>;
  rules_contains?: InputMaybe<Scalars['String']>;
  rules_exists?: InputMaybe<Scalars['Boolean']>;
  rules_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules_not?: InputMaybe<Scalars['String']>;
  rules_not_contains?: InputMaybe<Scalars['String']>;
  rules_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AbilityLinkingCollections = {
  __typename?: 'AbilityLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  unitCollection?: Maybe<UnitCollection>;
};


export type AbilityLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AbilityLinkingCollectionsUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AbilityOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  unitCollection?: Maybe<UnitCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Keywords for units [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/keyword) */
export type Keyword = Entry & {
  __typename?: 'Keyword';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<KeywordLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Keywords for units [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/keyword) */
export type KeywordLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Keywords for units [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/keyword) */
export type KeywordNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type KeywordCollection = {
  __typename?: 'KeywordCollection';
  items: Array<Maybe<Keyword>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type KeywordFilter = {
  AND?: InputMaybe<Array<InputMaybe<KeywordFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KeywordFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type KeywordLinkingCollections = {
  __typename?: 'KeywordLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  unitCollection?: Maybe<UnitCollection>;
};


export type KeywordLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type KeywordLinkingCollectionsUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum KeywordOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type Model = Entry & {
  __typename?: 'Model';
  attacks?: Maybe<Scalars['Int']>;
  ballisticSkill?: Maybe<Scalars['Int']>;
  contentfulMetadata: ContentfulMetadata;
  leadership?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<ModelLinkingCollections>;
  movement?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  save?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  sys: Sys;
  toughness?: Maybe<Scalars['Int']>;
  weaponSkill?: Maybe<Scalars['Int']>;
  wounds?: Maybe<Scalars['Int']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelAttacksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelBallisticSkillArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelLeadershipArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelMovementArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelSaveArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelStrengthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelToughnessArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelWeaponSkillArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single model. One or more models make up a unit. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/model) */
export type ModelWoundsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ModelCollection = {
  __typename?: 'ModelCollection';
  items: Array<Maybe<Model>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ModelFilter>>>;
  attacks?: InputMaybe<Scalars['Int']>;
  attacks_exists?: InputMaybe<Scalars['Boolean']>;
  attacks_gt?: InputMaybe<Scalars['Int']>;
  attacks_gte?: InputMaybe<Scalars['Int']>;
  attacks_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attacks_lt?: InputMaybe<Scalars['Int']>;
  attacks_lte?: InputMaybe<Scalars['Int']>;
  attacks_not?: InputMaybe<Scalars['Int']>;
  attacks_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ballisticSkill?: InputMaybe<Scalars['Int']>;
  ballisticSkill_exists?: InputMaybe<Scalars['Boolean']>;
  ballisticSkill_gt?: InputMaybe<Scalars['Int']>;
  ballisticSkill_gte?: InputMaybe<Scalars['Int']>;
  ballisticSkill_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ballisticSkill_lt?: InputMaybe<Scalars['Int']>;
  ballisticSkill_lte?: InputMaybe<Scalars['Int']>;
  ballisticSkill_not?: InputMaybe<Scalars['Int']>;
  ballisticSkill_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  leadership?: InputMaybe<Scalars['Int']>;
  leadership_exists?: InputMaybe<Scalars['Boolean']>;
  leadership_gt?: InputMaybe<Scalars['Int']>;
  leadership_gte?: InputMaybe<Scalars['Int']>;
  leadership_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  leadership_lt?: InputMaybe<Scalars['Int']>;
  leadership_lte?: InputMaybe<Scalars['Int']>;
  leadership_not?: InputMaybe<Scalars['Int']>;
  leadership_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  movement?: InputMaybe<Scalars['Int']>;
  movement_exists?: InputMaybe<Scalars['Boolean']>;
  movement_gt?: InputMaybe<Scalars['Int']>;
  movement_gte?: InputMaybe<Scalars['Int']>;
  movement_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  movement_lt?: InputMaybe<Scalars['Int']>;
  movement_lte?: InputMaybe<Scalars['Int']>;
  movement_not?: InputMaybe<Scalars['Int']>;
  movement_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  save?: InputMaybe<Scalars['Int']>;
  save_exists?: InputMaybe<Scalars['Boolean']>;
  save_gt?: InputMaybe<Scalars['Int']>;
  save_gte?: InputMaybe<Scalars['Int']>;
  save_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  save_lt?: InputMaybe<Scalars['Int']>;
  save_lte?: InputMaybe<Scalars['Int']>;
  save_not?: InputMaybe<Scalars['Int']>;
  save_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  strength?: InputMaybe<Scalars['Int']>;
  strength_exists?: InputMaybe<Scalars['Boolean']>;
  strength_gt?: InputMaybe<Scalars['Int']>;
  strength_gte?: InputMaybe<Scalars['Int']>;
  strength_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  strength_lt?: InputMaybe<Scalars['Int']>;
  strength_lte?: InputMaybe<Scalars['Int']>;
  strength_not?: InputMaybe<Scalars['Int']>;
  strength_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  toughness?: InputMaybe<Scalars['Int']>;
  toughness_exists?: InputMaybe<Scalars['Boolean']>;
  toughness_gt?: InputMaybe<Scalars['Int']>;
  toughness_gte?: InputMaybe<Scalars['Int']>;
  toughness_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toughness_lt?: InputMaybe<Scalars['Int']>;
  toughness_lte?: InputMaybe<Scalars['Int']>;
  toughness_not?: InputMaybe<Scalars['Int']>;
  toughness_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  weaponSkill?: InputMaybe<Scalars['Int']>;
  weaponSkill_exists?: InputMaybe<Scalars['Boolean']>;
  weaponSkill_gt?: InputMaybe<Scalars['Int']>;
  weaponSkill_gte?: InputMaybe<Scalars['Int']>;
  weaponSkill_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  weaponSkill_lt?: InputMaybe<Scalars['Int']>;
  weaponSkill_lte?: InputMaybe<Scalars['Int']>;
  weaponSkill_not?: InputMaybe<Scalars['Int']>;
  weaponSkill_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wounds?: InputMaybe<Scalars['Int']>;
  wounds_exists?: InputMaybe<Scalars['Boolean']>;
  wounds_gt?: InputMaybe<Scalars['Int']>;
  wounds_gte?: InputMaybe<Scalars['Int']>;
  wounds_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wounds_lt?: InputMaybe<Scalars['Int']>;
  wounds_lte?: InputMaybe<Scalars['Int']>;
  wounds_not?: InputMaybe<Scalars['Int']>;
  wounds_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelLinkingCollections = {
  __typename?: 'ModelLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  unitCollection?: Maybe<UnitCollection>;
};


export type ModelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ModelLinkingCollectionsUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ModelOrder {
  AttacksAsc = 'attacks_ASC',
  AttacksDesc = 'attacks_DESC',
  BallisticSkillAsc = 'ballisticSkill_ASC',
  BallisticSkillDesc = 'ballisticSkill_DESC',
  LeadershipAsc = 'leadership_ASC',
  LeadershipDesc = 'leadership_DESC',
  MovementAsc = 'movement_ASC',
  MovementDesc = 'movement_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SaveAsc = 'save_ASC',
  SaveDesc = 'save_DESC',
  StrengthAsc = 'strength_ASC',
  StrengthDesc = 'strength_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ToughnessAsc = 'toughness_ASC',
  ToughnessDesc = 'toughness_DESC',
  WeaponSkillAsc = 'weaponSkill_ASC',
  WeaponSkillDesc = 'weaponSkill_DESC',
  WoundsAsc = 'wounds_ASC',
  WoundsDesc = 'wounds_DESC'
}

export type Query = {
  __typename?: 'Query';
  ability?: Maybe<Ability>;
  abilityCollection?: Maybe<AbilityCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  keyword?: Maybe<Keyword>;
  keywordCollection?: Maybe<KeywordCollection>;
  model?: Maybe<Model>;
  modelCollection?: Maybe<ModelCollection>;
  unit?: Maybe<Unit>;
  unitCollection?: Maybe<UnitCollection>;
  wargear?: Maybe<Wargear>;
  wargearCollection?: Maybe<WargearCollection>;
  weapon?: Maybe<Weapon>;
  weaponCollection?: Maybe<WeaponCollection>;
  weaponType?: Maybe<WeaponType>;
  weaponTypeCollection?: Maybe<WeaponTypeCollection>;
};


export type QueryAbilityArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAbilityCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AbilityOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryKeywordArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryKeywordCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<KeywordOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KeywordFilter>;
};


export type QueryModelArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryModelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ModelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelFilter>;
};


export type QueryUnitArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<UnitOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UnitFilter>;
};


export type QueryWargearArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryWargearCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WargearOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WargearFilter>;
};


export type QueryWeaponArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WeaponOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeaponFilter>;
};


export type QueryWeaponTypeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryWeaponTypeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WeaponTypeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeaponTypeFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type Unit = Entry & {
  __typename?: 'Unit';
  availableWargearCollection?: Maybe<UnitAvailableWargearCollection>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  intrinsicAbilitiesCollection?: Maybe<UnitIntrinsicAbilitiesCollection>;
  keywordsCollection?: Maybe<UnitKeywordsCollection>;
  linkedFrom?: Maybe<UnitLinkingCollections>;
  modelsCollection?: Maybe<UnitModelsCollection>;
  name?: Maybe<Scalars['String']>;
  optionalAbilitiesCollection?: Maybe<UnitOptionalAbilitiesCollection>;
  power?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  weaponsCollection?: Maybe<UnitWeaponsCollection>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitAvailableWargearCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitIntrinsicAbilitiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitKeywordsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitModelsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitOptionalAbilitiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitPowerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** One unit, that can have one or more models, in your army [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/unit) */
export type UnitWeaponsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type UnitAvailableWargearCollection = {
  __typename?: 'UnitAvailableWargearCollection';
  items: Array<Maybe<Wargear>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UnitCollection = {
  __typename?: 'UnitCollection';
  items: Array<Maybe<Unit>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UnitFilter = {
  AND?: InputMaybe<Array<InputMaybe<UnitFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UnitFilter>>>;
  availableWargearCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  intrinsicAbilitiesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  keywordsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  modelsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionalAbilitiesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  power?: InputMaybe<Scalars['Int']>;
  power_exists?: InputMaybe<Scalars['Boolean']>;
  power_gt?: InputMaybe<Scalars['Int']>;
  power_gte?: InputMaybe<Scalars['Int']>;
  power_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  power_lt?: InputMaybe<Scalars['Int']>;
  power_lte?: InputMaybe<Scalars['Int']>;
  power_not?: InputMaybe<Scalars['Int']>;
  power_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  weaponsCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type UnitIntrinsicAbilitiesCollection = {
  __typename?: 'UnitIntrinsicAbilitiesCollection';
  items: Array<Maybe<Ability>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UnitKeywordsCollection = {
  __typename?: 'UnitKeywordsCollection';
  items: Array<Maybe<Keyword>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UnitLinkingCollections = {
  __typename?: 'UnitLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type UnitLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type UnitModelsCollection = {
  __typename?: 'UnitModelsCollection';
  items: Array<Maybe<Model>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UnitOptionalAbilitiesCollection = {
  __typename?: 'UnitOptionalAbilitiesCollection';
  items: Array<Maybe<Ability>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum UnitOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PowerAsc = 'power_ASC',
  PowerDesc = 'power_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type UnitWeaponsCollection = {
  __typename?: 'UnitWeaponsCollection';
  items: Array<Maybe<Weapon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Non-weapon wargear that grants abilities. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/wargear) */
export type Wargear = Entry & {
  __typename?: 'Wargear';
  abilities?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<WargearLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Non-weapon wargear that grants abilities. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/wargear) */
export type WargearAbilitiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Non-weapon wargear that grants abilities. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/wargear) */
export type WargearLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Non-weapon wargear that grants abilities. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/wargear) */
export type WargearNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WargearCollection = {
  __typename?: 'WargearCollection';
  items: Array<Maybe<Wargear>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type WargearFilter = {
  AND?: InputMaybe<Array<InputMaybe<WargearFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WargearFilter>>>;
  abilities?: InputMaybe<Scalars['String']>;
  abilities_contains?: InputMaybe<Scalars['String']>;
  abilities_exists?: InputMaybe<Scalars['Boolean']>;
  abilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  abilities_not?: InputMaybe<Scalars['String']>;
  abilities_not_contains?: InputMaybe<Scalars['String']>;
  abilities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type WargearLinkingCollections = {
  __typename?: 'WargearLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  unitCollection?: Maybe<UnitCollection>;
};


export type WargearLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WargearLinkingCollectionsUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum WargearOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type Weapon = Entry & {
  __typename?: 'Weapon';
  abilities?: Maybe<Scalars['String']>;
  armorPiercing?: Maybe<Scalars['Int']>;
  attacks?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  damage?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<WeaponLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['String']>;
  sys: Sys;
  weaponType?: Maybe<WeaponType>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponAbilitiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponArmorPiercingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponAttacksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponDamageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponRangeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponStrengthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wargear that grants an attack [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weapon) */
export type WeaponWeaponTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type WeaponCollection = {
  __typename?: 'WeaponCollection';
  items: Array<Maybe<Weapon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type WeaponFilter = {
  AND?: InputMaybe<Array<InputMaybe<WeaponFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WeaponFilter>>>;
  abilities?: InputMaybe<Scalars['String']>;
  abilities_contains?: InputMaybe<Scalars['String']>;
  abilities_exists?: InputMaybe<Scalars['Boolean']>;
  abilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  abilities_not?: InputMaybe<Scalars['String']>;
  abilities_not_contains?: InputMaybe<Scalars['String']>;
  abilities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  armorPiercing?: InputMaybe<Scalars['Int']>;
  armorPiercing_exists?: InputMaybe<Scalars['Boolean']>;
  armorPiercing_gt?: InputMaybe<Scalars['Int']>;
  armorPiercing_gte?: InputMaybe<Scalars['Int']>;
  armorPiercing_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  armorPiercing_lt?: InputMaybe<Scalars['Int']>;
  armorPiercing_lte?: InputMaybe<Scalars['Int']>;
  armorPiercing_not?: InputMaybe<Scalars['Int']>;
  armorPiercing_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attacks?: InputMaybe<Scalars['String']>;
  attacks_contains?: InputMaybe<Scalars['String']>;
  attacks_exists?: InputMaybe<Scalars['Boolean']>;
  attacks_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attacks_not?: InputMaybe<Scalars['String']>;
  attacks_not_contains?: InputMaybe<Scalars['String']>;
  attacks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  damage?: InputMaybe<Scalars['String']>;
  damage_contains?: InputMaybe<Scalars['String']>;
  damage_exists?: InputMaybe<Scalars['Boolean']>;
  damage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_not?: InputMaybe<Scalars['String']>;
  damage_not_contains?: InputMaybe<Scalars['String']>;
  damage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  range?: InputMaybe<Scalars['Int']>;
  range_exists?: InputMaybe<Scalars['Boolean']>;
  range_gt?: InputMaybe<Scalars['Int']>;
  range_gte?: InputMaybe<Scalars['Int']>;
  range_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  range_lt?: InputMaybe<Scalars['Int']>;
  range_lte?: InputMaybe<Scalars['Int']>;
  range_not?: InputMaybe<Scalars['Int']>;
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  strength?: InputMaybe<Scalars['String']>;
  strength_contains?: InputMaybe<Scalars['String']>;
  strength_exists?: InputMaybe<Scalars['Boolean']>;
  strength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  strength_not?: InputMaybe<Scalars['String']>;
  strength_not_contains?: InputMaybe<Scalars['String']>;
  strength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  weaponType?: InputMaybe<CfWeaponTypeNestedFilter>;
  weaponType_exists?: InputMaybe<Scalars['Boolean']>;
};

export type WeaponLinkingCollections = {
  __typename?: 'WeaponLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  unitCollection?: Maybe<UnitCollection>;
};


export type WeaponLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WeaponLinkingCollectionsUnitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum WeaponOrder {
  ArmorPiercingAsc = 'armorPiercing_ASC',
  ArmorPiercingDesc = 'armorPiercing_DESC',
  AttacksAsc = 'attacks_ASC',
  AttacksDesc = 'attacks_DESC',
  DamageAsc = 'damage_ASC',
  DamageDesc = 'damage_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RangeAsc = 'range_ASC',
  RangeDesc = 'range_DESC',
  StrengthAsc = 'strength_ASC',
  StrengthDesc = 'strength_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The type of weapon. For example, a ranged rapid-firing weapon or a melee weapon. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weaponType) */
export type WeaponType = Entry & {
  __typename?: 'WeaponType';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<WeaponTypeLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** The type of weapon. For example, a ranged rapid-firing weapon or a melee weapon. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weaponType) */
export type WeaponTypeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The type of weapon. For example, a ranged rapid-firing weapon or a melee weapon. [See type definition](https://app.contentful.com/spaces/wliqlzq6p5i3/content_types/weaponType) */
export type WeaponTypeNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WeaponTypeCollection = {
  __typename?: 'WeaponTypeCollection';
  items: Array<Maybe<WeaponType>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type WeaponTypeFilter = {
  AND?: InputMaybe<Array<InputMaybe<WeaponTypeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WeaponTypeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type WeaponTypeLinkingCollections = {
  __typename?: 'WeaponTypeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  weaponCollection?: Maybe<WeaponCollection>;
};


export type WeaponTypeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WeaponTypeLinkingCollectionsWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum WeaponTypeOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CfWeaponTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfWeaponTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfWeaponTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};
