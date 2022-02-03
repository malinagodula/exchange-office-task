import React, { useRef } from "react"
import useOnScreen from "../../../hooks/useOnScreen"

export const H1 = ({ content, className = "" }) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
        <h1
            ref={ref}
            className={`${className} ${isVisible && "isVisible"}`}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}
