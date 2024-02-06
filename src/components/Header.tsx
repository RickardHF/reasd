'use client'

import { useLocalization, useTranslationsFetcher } from "nextjs-static-page-localizer";
import { LocalizedLink, LanguageSwitcher } from "nextjs-static-page-localizer/components";
import { Language } from "nextjs-static-page-localizer/interfaces";

export default function Header() {
    const { configuration } = useLocalization();
    const translations = useTranslationsFetcher();
    const header_section = translations("header");

    return (
        <header className="flex flex-col items-center justify-center py-2">
            <div className="language-switcher flex flex-row items-center justify-center">
                {
                    configuration.languages.map((language: Language) => {
                        return (
                            <LanguageSwitcher key={language.code} lang={language.code} className="p-4 text-xs">
                                {
                                    language.name
                                }
                            </LanguageSwitcher>
                        );
                    })
                }
            </div>
            <div className="flex flex-row items-center justify-center text-lg font-bold">
                <LocalizedLink href="/" className="p-6">
                    {header_section("home")}
                </LocalizedLink>
                <LocalizedLink href="/about" className="p-6">
                    <h3>
                        {header_section("about")}
                    </h3>
                </LocalizedLink>
            </div>
        </header>
    );
}
