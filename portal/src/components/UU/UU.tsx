import React, { ChangeEvent, useCallback, useContext, useMemo, useRef, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { motion } from "framer-motion";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { useScrollIntoView } from "@fremtind/jkl-react-hooks";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { a11yContext } from "../../contexts/a11yContext";
import { FormatProvider } from "../Typography";
import "./uu.scss";

type Role = "developer" | "designer";

type Tag =
    | "skjema"
    | "bilder"
    | "tabell"
    | "tekstinnhold"
    | "media"
    | "modal"
    | "innlogging"
    | "animasjon"
    | "navigasjon"
    | "liste";

const tagMap: { [key in Tag]: string } = {
    skjema: "Skjema",
    bilder: "Bilder",
    tabell: "Tabell",
    tekstinnhold: "Tekstinnhold",
    media: "Media (lyd/video)",
    modal: "Modal/Dialog",
    innlogging: "Innlogging",
    animasjon: "Animasjon",
    navigasjon: "Navigasjon",
    liste: "Lister",
};

interface MDXNode {
    id: string;
    slug: string;
    frontmatter: {
        title: string;
        tags: Tag[];
        wcagRules: string[];
        role?: Role[];
    };
    body: string;
}

// TODO Animasjoner av innholdsendringer
// TODO Link til WCAG
// TODO Expandbar lenkeliste

export const UU = () => {
    const data = useStaticQuery<{
        allMdx: {
            nodes: MDXNode[];
        };
    }>(graphql`
        {
            allMdx(filter: { fileAbsolutePath: { regex: "/.*/texts/uu/.*/" } }) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        tags
                        wcagRules
                        role
                    }
                    body
                }
            }
        }
    `);

    const availableTags: Tag[] = useMemo(() => {
        if (!data) {
            return [];
        }

        const tagsForFilter = data.allMdx.nodes.map((node) => node.frontmatter.tags);

        // create a unique array of tags
        return Array.from(new Set(tagsForFilter.flat()));
    }, [data]);

    const { prefersReducedMotion } = useContext(a11yContext);
    const resultWrapperRef = useRef<HTMLElement>(null);
    const [search, setSearch] = useState("");
    const [role, setRole] = useState<Role | "both">("both");
    const [tagFilter, setTagFilter] = useState(
        // set up a checkbox state where key is the tag name
        availableTags.reduce((obj, t) => {
            obj[t] = { checked: false };
            return obj;
        }, {} as { [key in Tag]: { checked: boolean } }),
    );

    const [scrollToResults] = useScrollIntoView({ ref: resultWrapperRef, autoScroll: false });

    const handleClear = () => setSearch("");

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const onRoleChange = (e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value as Role);

    const onTagChange = (e: ChangeEvent<HTMLInputElement>) => {
        const _t = { ...tagFilter };
        _t[e.target.value as Tag] = {
            checked: e.target.checked,
        };

        setTagFilter(_t);
    };

    const filterByTag = useCallback(
        (node: MDXNode) => {
            // find tags where checked is true, and make it into a tuple
            const checkedTags = Object.entries(tagFilter).filter(([, { checked }]) => checked) as [
                Tag,
                { checked: boolean },
            ][];

            // if no filter is set, #nofilter
            if (checkedTags.length === 0) {
                return true;
            }

            // check if any checked tag matches a tag in the node
            return node.frontmatter.tags.some((t) =>
                checkedTags.find(([filterTag, { checked }]) => filterTag === t && checked),
            );
        },
        [tagFilter],
    );

    const filterBySearch = useCallback(
        (node: MDXNode) => {
            const bodyMatch = node.body.includes(search);
            const titleMatch = node.frontmatter.title.toLowerCase().includes(search.toLowerCase());
            const wcagMatch = node.frontmatter.wcagRules.includes(search);

            return bodyMatch || titleMatch || wcagMatch;
        },
        [search],
    );

    const filterByRole = useCallback(
        (node: MDXNode) => {
            if (role === "both") {
                return true;
            }

            if (!node.frontmatter.role) {
                return true;
            }

            return node.frontmatter.role.includes(role);
        },
        [role],
    );

    // check if a filter is enabled
    const hasFilter = useMemo(() => {
        const hasSearchFilter = !!search;
        const hasRoleFilter = role !== "both";
        const hasTagsFilter = !!Object.entries(tagFilter).filter(([, { checked }]) => checked).length;

        return hasSearchFilter || hasRoleFilter || hasTagsFilter;
    }, [search, role, tagFilter]);

    const filteredNodes = useMemo(() => {
        if (!data) {
            return [];
        }

        if (!hasFilter) {
            return data.allMdx.nodes;
        }

        return data.allMdx.nodes.filter(filterByTag).filter(filterBySearch).filter(filterByRole);
    }, [data, hasFilter, filterBySearch, filterByRole, filterByTag]);

    return (
        <section className="jkl-portal__uu">
            <section className="uu__section--search">
                <RadioButtons
                    onChange={onRoleChange}
                    selectedValue={role}
                    legend="Velg rolle"
                    name="rolle"
                    choices={[
                        { label: "Utvikler", value: "developer" },
                        { label: "Designer", value: "designer" },
                        { label: "Begge", value: "both" },
                    ]}
                />

                <FieldGroup legend="Hva inneholder løsningen din?">
                    {Object.entries(tagFilter).map(([tag, { checked }]) => (
                        <Checkbox name="uu-area-tag" value={tag} key={tag} checked={checked} onChange={onTagChange}>
                            {tagMap[tag as Tag]}
                        </Checkbox>
                    ))}
                </FieldGroup>

                <PrimaryButton onClick={scrollToResults}>Vis resultat</PrimaryButton>
            </section>

            <section className="uu__section--search-results" ref={resultWrapperRef}>
                <h2>{hasFilter ? "Resultat" : "Alle artikler"}</h2>

                <ul className="uu__filter-result-list">
                    {hasFilter &&
                        filteredNodes.map((node) => (
                            <motion.li
                                key={node.id}
                                initial={{ y: prefersReducedMotion ? 0 : 40, opacity: 0 }}
                                animate={{
                                    y: prefersReducedMotion ? 0 : 0,
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                }}
                                layout
                                transition={{
                                    type: "tween",
                                    duration: 0.2,
                                }}
                                exit={{ y: prefersReducedMotion ? 0 : -40, opacity: 0, transition: { duration: 0.2 } }}
                            >
                                <Link to={`#${node.slug}`} className="jkl-link">
                                    {node.frontmatter.title}
                                </Link>
                            </motion.li>
                        ))}
                </ul>

                <TextInput
                    variant="small"
                    width="316px"
                    label="Søk"
                    placeholder="Søk i artikler"
                    value={search}
                    onChange={onSearchChange}
                    className="uu__filter-search"
                    action={hasFilter ? { icon: "clear", label: "Fjern søk", onClick: handleClear } : undefined}
                    aria-label="Søk i artikler"
                />

                {filteredNodes.map((node) => (
                    <article key={node.id} className="uu-article">
                        <header className="uu-article__header">
                            <h3 className="uu-article__header--heading" id={node.slug}>
                                {node.frontmatter.title}
                            </h3>
                            <span className="jkl-sr-only">Artikkel tags</span>
                            {node.frontmatter.tags.map((t) => (
                                <span key={t} className="uu-article__header__tag">
                                    {tagMap[t]}
                                </span>
                            ))}
                        </header>
                        <FormatProvider>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </FormatProvider>
                    </article>
                ))}
            </section>
        </section>
    );
};
