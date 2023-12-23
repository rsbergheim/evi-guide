import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import "./Page.css"

export type PageProps = {
    children: ReactNode
}

function Page({ children }: Readonly<PageProps>) {

    return (
        <>
        <Header />
        <main className="content">
            {children}
        </main>
        <Footer />
        </>
    )
}

export { Page };
