import {ProviderInterface} from "@/cms/Provider/ProviderInterface";
import {contentfulProvider} from "@/cms/Provider/Contentful/ContentfulProvider";

export const cmsProvider: ProviderInterface = contentfulProvider;