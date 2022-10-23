// ---Dependencies
import { component$ } from "@builder.io/qwik";
// ---Components
import DummyComponent from "src/components/dummyComponent";

/**
 * DummyPage Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const DummyPage = component$(() => {
  return (
    <div>
        Hi i'm a Dummy Root wit a Dummy Component
        <br />
        trye me!!!
        <DummyComponent/>
    </div>
  );
});