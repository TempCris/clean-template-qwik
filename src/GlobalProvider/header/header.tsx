// ---Dependencies
import { component$, useStylesScoped$ } from '@builder.io/qwik';
// ---CSS
import styles from './header.css?inline';
/**
 * Compoente del Navbar
 */
export const Header = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useStylesScoped$(styles);
  return (
    <header>
      <a href="/">
        <img src="/forge-sm-web.png" alt="forge" width={120} />
      </a>
      <ul>
        <li>
          <a href="/dummyRoute"> Dummy Route</a>
        </li>
      </ul>
    </header>
  );
});
