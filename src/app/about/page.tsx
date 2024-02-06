'use client'

import { useLanguageSetter, useMetadataSetter, useTranslationsFetcher } from "nextjs-static-page-localizer"

export default function About() {
    useLanguageSetter();
    useMetadataSetter("about-title", "about-description");
    
    const translations = useTranslationsFetcher()
    const about_section = translations("about")

    return (
        <main className="flex flex-col items-center justify-center p-24">
          <h1>
            {about_section("title")}
          </h1>
          <p>
            {about_section("description")}
          </p>
          <p></p>
        </main>
    );
}
