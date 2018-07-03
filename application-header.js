import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * `application-header`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ApplicationHeader extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background: #4285f4;
          color: white;
          padding: 0.5em 1em;
        }
      </style>
      <h2>Hello {{selectedMenu}}!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "application-header-1"
      },
      selectedMenu: {
        type: String,
        notify: true,
        value: "Hello"
      }
    };
  }
}

window.customElements.define("application-header", ApplicationHeader);
