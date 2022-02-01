import React from "react"
import PropTypes from "prop-types"
import { styles } from "./styles"
import classnames from "classnames"

const Icon = ({ icon, size = 16, customClass = "" }) => {
    return (
        <svg
            className={classnames(styles.Icon, `${styles[size]}`, customClass)}
        >
            <use xlinkHref={`#icon-${size}_${icon}`} />
        </svg>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf([16, 24, 32, 48, 72, 96, 132]),
}

export default Icon
