import React, { ReactNode } from "react";
import classNames from "classnames";

import "./DoDontExample.scss";
import { PortalImg } from "../PortalImg/PortalImg";

interface Props {
    type: "do" | "dont";
    content?: ReactNode;
    image?: string;
    description?: string;
    fullWidth?: boolean;
}

export const DoDontExample: React.FC<Props> = ({ type, content, image = "", description, fullWidth }) => {
    const heading = type === "do" ? "Riktig" : "Feil";
    const altText = description ? `${heading}: ${description}` : `${heading} bruk`;
    const headingClass = classNames({
        "jkl-portal-do-dont-example__heading": true,
        "jkl-portal-do-dont-example__heading--do": type === "do",
        "jkl-portal-do-dont-example__heading--dont": type === "dont",
    });
    const containerClass = classNames("jkl-portal-do-dont-example", {
        "jkl-portal-do-dont-example--fullwidth": fullWidth,
        "jkl-portal-do-dont-example--halfwidth": !fullWidth,
    });

    return (
        <section className={containerClass}>
            {content ? (
                <div>{content}</div>
            ) : (
                <div className="jkl-portal-do-dont-example__image">
                    <PortalImg src={image} alt={altText} noMargin />
                </div>
            )}
            <p className={headingClass}>{heading}</p>
            <p className="jkl-portal-do-dont-example__description">{description}</p>
        </section>
    );
};
