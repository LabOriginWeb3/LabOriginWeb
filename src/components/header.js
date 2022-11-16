/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    sx={{
      bg: "siteColor",
    }}
  >
    {children}
  </header>
)

export default Header
