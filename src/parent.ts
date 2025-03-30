import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "./base-element.js";
import "./child.js"; // Import the child component

@customElement("parent-component")
export class ParentComponent extends BaseElement {
  @property({ type: Number })
  count: number = 0;

  private increment() {
    this.count += 1;
  }

  render() {
    return html`
      <div class="parent">
        <button class="blue-button" @click=${this.increment}>Increment</button>
        <child-component .count=${this.count}></child-component>
      </div>
    `;
  }
}
