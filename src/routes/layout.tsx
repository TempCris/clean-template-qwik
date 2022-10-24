// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Components
import Header from '../GlobalProvider/header/header';
import Footer from '../GlobalProvider/footer/footer';

/**
 * Layout Component: Aqui se hace un diseño de la estructura de las
 * paginas estaticas donde podemos inyectar nuestros componentes 
 * de Header (Navbar) y Footer de igual manera usamos el componente Slot
 * 
 * 
 * -Slot: Permite proyectar los hijos del componente actual,
 *  solo se puede usar dentro del contexto de un componente definido con componente$.
 */
export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
});
