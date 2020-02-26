import React, { ReactNode, useContext, useLayoutEffect, useRef } from "react";
import classNames from "classNames";

import { FormatProvider } from "../Typography";
import { Header } from "../Header";
import { ThemeBG } from "./components";
import { themeContext } from "../../contexts/themeContext";

import "./Layout.scss";
import Helmet from "react-helmet";

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    isFrontpage?: boolean;
    showFooter?: boolean;
}

export const Layout = ({ children, title, isFrontpage }: Props) => {
    const PageTitle = `${title ? `${title} - ` : ""}Jøkul designsystem`;
    const mainClassName = classNames({
        "jkl-portal__main": true,
        "jkl-portal__main--frontpage": isFrontpage,
    });
    const { theme } = useContext(themeContext);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        wrapperRef.current?.setAttribute("data-theme", theme || "");
    }, [theme, wrapperRef]);
    return (
        <div className="jkl-portal" data-theme={theme} ref={wrapperRef}>
            <Helmet>
                <html lang="no-nb" />
                <title>{PageTitle}</title>
            </Helmet>
            <ThemeBG />
            <Header />
            <main className={mainClassName}>
                <FormatProvider>{children}</FormatProvider>
            </main>
        </div>
    );
};