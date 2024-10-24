import { useLang } from "@/internationalization/functions";
// import { client } from "@/sanity/lib/client";
// import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
// import type { BLOG_POSTS_QUERYResult } from "@/sanity/types";
import type { Lang } from "@/types";
import About from "./components/about";
import AdditionalInformation from "./components/additional-information";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import FeaturedProjects from "./components/featured-projects";
import Message from "./components/message";
import Profile from "./components/profile";

type Props = { params: Promise<{ lang: Lang }> };

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const { s, isJapanese, isDefaultLang } = useLang(lang);
  // const posts = await client.fetch<BLOG_POSTS_QUERYResult>(BLOG_POSTS_QUERY, {}, { next: { revalidate: 10 } });
  // console.log(posts);

  return (
    <main className="space-y-4">
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <About s={s} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <Message s={s} lang={lang} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
    </main>
  );
}
