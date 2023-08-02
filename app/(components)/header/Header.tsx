// import { css } from "@panda/css";
import { css } from "../../../styled-system/css";

export default function Header() {
  return (
    <header
      className={css({
        paddingBlock: { base: 1, sm: 2, md: 4, lg: 5, xl: 7, "2xl": 8 },
        paddingInline: { base: 2, sm: 3, md: 5, lg: 6, xl: 8, "2xl": 9 },
      })}
    >
      sup
    </header>
  );
}
