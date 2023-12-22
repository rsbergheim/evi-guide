import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export type PageProps = {
    children: ReactNode
}

function Page({ children }: Readonly<PageProps>) {

    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export { Page };
