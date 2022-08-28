/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const Footer = () => {
    return <footer css={footer}>© 2022 KSK.K</footer>
}

const footer = css({
    padding: '20px 0',
    backgroundColor: 'white',
    fontSize: '12px',
    textAlign: 'center',
})