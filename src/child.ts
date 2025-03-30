import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("child-component")
export class ChildComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 8px;
      background-color: #e0e0e0;
      border: 1px solid #bbb;
      border-radius: 4px;
      margin-top: 8px;
    }
  `;

  @property({ type: Number })
  count: number = 0;

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
      </div>
    `;
  }
}
