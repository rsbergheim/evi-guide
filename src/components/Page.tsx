import { useLanguage } from "../hooks/useLanguage";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export type PageProps = {
    children: ReactNode
}

function Page({ children }: PageProps) {
    const language = useLanguage();

    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export { Page };