/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper} from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDPulseEffectSuper(DDD) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "7";
    this.accent = "#fff"; 
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      primary: {
        type: String,
        reflect: true,
        attribute: "ddd-primary",
      },
      accent: {
        type: String,
        reflect: true,
        attribute: "ddd-accent",
      },
    };  
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
       :host {
          display: block;
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          text-align: center;
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .title-bar {
          padding: var(--ddd-spacing-2);
          font-weight: var(--ddd-font-weight-bold);
        }
        div ::slotted(*) {
          display: inline-block;
        }
        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
        .ddd-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--ddd-spacing-2);
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-md);
          background-color: var(--ddd-theme-accent);
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3>${this.title}</h3>
      <slot @slotchange="${this._handleSlotChange}"></slot>
    </div>`;
  }

  _handleSlotChange(e) {
    const slot = e.target;
    const assignedNodes = slot.assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);
    assignedNodes.forEach(node => {
      if (node.tagName.toLowerCase() === 'ddd-card') {
        node.setAttribute('ddd-primary', this.primary);
      }
    });
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);