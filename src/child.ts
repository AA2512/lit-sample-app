import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "./base-element.js";

@customElement("child-component")
export class ChildComponent extends BaseElement {
  @property({ type: Number })
  count: number = 0;

  render() {
    return html`
      <div class="child">
        <p>Count: ${this.count}</p>
      </div>
    `;
  }
}
