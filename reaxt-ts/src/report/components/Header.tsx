/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {css} from "@emotion/react";

export const Header = () => {
    return (
        <header css={header}>
            <nav css={headerNav}>
                <Link css={logo} to="/">KSKの日報</Link>
                <ul css={headerNavMenu}>
                    <li css={headerNavMenuItem}>
                        <Link css={headerNavMenuItemA} to="/">TOP</Link>
                    </li>
                    <li css={headerNavMenuItem}>
                        <Link css={headerNavMenuItemA} to="/report/">Report</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const header = css({
    position: 'fixed',
    padding: '20px 2%',
    width: '100%',
    backgroundColor: "white"
})

const logo = css({
    fontSize: '24px',
    fontWeight: '700',
    color: '#525252',
})

const headerNav = css({
    display: 'flex',
    justifyContent: "space-between"
})

const headerNavMenu = css({
    display: 'flex',
})

const headerNavMenuItem = css({
    margin: ' 0 0 0 25px',
})

const headerNavMenuItemA = css({
    fontWeight: '500',
    color: '#525252',
})