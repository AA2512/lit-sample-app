import { LitElement } from "lit";

export class BaseElement extends LitElement {
  createRenderRoot() {
    return this; // Render in the light DOM
  }
}
