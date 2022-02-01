import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import * as styles from "./styles"

import Icon from "../icons/Icon"
import { graphql, Link, useStaticQuery } from "gatsby"
import { createLocalLink } from "../../../utils"
import dataAttributes from "../../../utils/dataAttributes"

const Button = ({
    small,
    large,
    xSmall,
    internal,
    href,
    target,
    dataAtts,
    linkState,
    play,
    onClick,
    disabled,
    children,
    iconRight = null,
    iconLeft = null,
    iconRightClass,
    iconLeftClass,
}) => {
    const data = useStaticQuery(
        graphql`
            query {
                wp {
                    generalSettings {
                        url
                    }
                }
            }
        `
    )

    const {
        generalSettings: { url: wordpressUrl },
    } = data.wp

    const isUrlInternal = url => {
        return url.includes(wordpressUrl) || internal
    }

    let iconLeftElement = ""
    if (iconLeft !== null) {
        iconLeftElement = (
            <div className={classnames(styles.IconLeft, iconLeftClass)}>
                <Icon icon={iconLeft} />
            </div>
        )
    }

    let iconRightElement = ""
    if (iconRight !== null) {
        iconRightElement = (
            <div className={classnames(styles.IconRight, iconRightClass)}>
                <Icon icon={iconRight} />
            </div>
        )
    }

    if (href) {
        const rel = target ? "noreferrer noopener" : null

        if (isUrlInternal(href)) {
            return (
                <Link
                    to={createLocalLink(href, wordpressUrl)}
                    state={linkState}
                    target={target}
                    rel={rel}
                    {...(dataAtts
                        ? { ...dataAttributes(dataAtts.click, dataAtts.name) }
                        : null)}
                    className={classnames(
                        styles.Button,
                        { [styles.ButtonIsLarge]: large },
                        { [styles.ButtonIsSmall]: small },
                        { [styles.ButtonIsIconRight]: iconRight },
                        { [styles.ButtonIsIconLeft]: iconLeft },
                        { [styles.ButtonIsXSmall]: xSmall }
                    )}
                >
                    {iconLeftElement}
                    <div
                        className={styles.Label}
                        dangerouslySetInnerHTML={{ __html: children }}
                    />
                    {iconRightElement}
                </Link>
            )
        }

        return (
            <a
                href={href}
                target={target}
                rel={rel}
                {...(dataAtts
                    ? { ...dataAttributes(dataAtts.click, dataAtts.name) }
                    : null)}
                className={classnames(
                    styles.Button,
                    { [styles.ButtonIsLarge]: large },
                    { [styles.ButtonIsSmall]: small },
                    { [styles.ButtonIsIconRight]: iconRight },
                    { [styles.ButtonIsIconLeft]: iconLeft },
                    { [styles.ButtonIsXSmall]: xSmall }
                )}
            >
                {iconLeftElement}
                <div
                    className={styles.Label}
                    dangerouslySetInnerHTML={{ __html: children }}
                />
                {iconRightElement}
            </a>
        )
    }

    return (
        <button
            disabled={disabled}
            {...(dataAtts
                ? { ...dataAttributes(dataAtts.click, dataAtts.name) }
                : null)}
            className={classnames(
                styles.Button,
                { [styles.ButtonIsLarge]: large },
                { [styles.ButtonIsSmall]: small },
                { [styles.ButtonIsPlay]: play },
                { [styles.ButtonIsIconRight]: iconRight },
                { [styles.ButtonIsIconLeft]: iconLeft },
                { [styles.ButtonIsXSmall]: xSmall }
            )}
            onClick={onClick}
        >
            {iconLeftElement}
            {play ? (
                <div className={styles.Label}>{children}</div>
            ) : (
                <div
                    dangerouslySetInnerHTML={{ __html: children }}
                    className={styles.Label}
                />
            )}

            {iconRightElement}
        </button>
    )
}

Button.propTypes = {
    small: PropTypes.bool,
    large: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    dataAtts: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
    iconRight: PropTypes.string,
    iconLeft: PropTypes.string,
    iconLeftClass: PropTypes.string,
    iconRightClass: PropTypes.string,
    xSmall: PropTypes.bool,
    internal: PropTypes.bool,
}

export default Button
