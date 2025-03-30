import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./child.js"; // Import the child component

@customElement("parent-component")
export class ParentComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  `;

  @property({ type: Number })
  count: number = 0;

  private increment() {
    this.count += 1;
  }

  render() {
    return html`
      <div>
        <button @click=${this.increment}>Increment</button>
        <child-component .count=${this.count}></child-component>
      </div>
    `;
  }
}
