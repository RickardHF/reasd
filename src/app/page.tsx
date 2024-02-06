'use client'
import { useLanguageSetter, useMetadataSetter, useTranslationsFetcher } from "nextjs-static-page-localizer"


export default function Home() {
  const translations = useTranslationsFetcher()
  useLanguageSetter();
  const home_section = translations("home")
  useMetadataSetter("home-title", "home-description");

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1>
        {home_section("title")}
      </h1>
      <p>
        {home_section("welcome")}
      </p>
      <p></p>
    </main>
  )
}
