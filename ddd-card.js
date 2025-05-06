/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDPulseEffectSuper(DDD) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.link = "";
    this.primary = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      link: { type: String },
      primary: {
        type: String,
        reflect: true,
        attribute: "ddd-primary",
      },
    };
  }


  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        :host {
          display: block;
          border: 1px solid var(--ddd-default-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 12px);
          padding: var(--ddd-spacing-0);
          margin: var(--ddd-spacing-3);
          width: 400px;
          background-color: #000(--lowContrast-override, white)
        }
        
        
        :host([ddd-primary="21"]) button {
          background-color: var(--ddd-primary-21);
        }
        :host([ddd-primary="20"]) button {
          background-color: var(--ddd-primary-20);
        }
        :host([ddd-primary="19"]) button {
          background-color: var(--ddd-primary-19);
        }
        :host([ddd-primary="18"]) button {
          background-color: var(--ddd-primary-18);
        }
        :host([ddd-primary="17"]) button {
          background-color: var(--ddd-primary-17);
        }
        :host([ddd-primary="16"]) button {
          background-color: var(--ddd-primary-16);
        }
        :host([ddd-primary="15"]) button {
          background-color: var(--ddd-primary-15);
        }
        :host([ddd-primary="14"]) button {
          background-color: var(--ddd-primary-14);
        }
        :host([ddd-primary="13"]) button {
          background-color: var(--ddd-primary-13);
        }
        :host([ddd-primary="12"]) button {
          background-color: var(--ddd-primary-12);
        }
        :host([ddd-primary="11"]) button {
          background-color: var(--ddd-primary-11);
        }
        :host([ddd-primary="10"]) button {
          background-color: var(--ddd-primary-10);

        }
        :host([ddd-primary="9"]) button {
          background-color: var(--ddd-primary-9);
        }
        :host([ddd-primary="8"]) button {
          background-color: var(--ddd-primary-8);
        }
        :host([ddd-primary="7"]) button {
          background-color: var(--ddd-primary-7);
        }
        :host([ddd-primary="6"]) button {
          background-color: var(--ddd-primary-6);
        }
        :host([ddd-primary="5"]) button {
          background-color: var(--ddd-primary-5);
        }
        :host([ddd-primary="4"]) button {
          background-color: var(--ddd-primary-4);
        }
        :host([ddd-primary="3"]) button {
          background-color: var(--ddd-primary-3);
        }
        :host([ddd-primary="2"]) button {
          background-color: var(--ddd-primary-2);
        }
        :host([ddd-primary="1"]) button {
          background-color: var(--ddd-primary-1);
        }

        :host([ddd-primary="21"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-21) solid;
        }
        :host([ddd-primary="20"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-20) solid;
        }
        :host([ddd-primary="19"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-19) solid;
        }
        :host([ddd-primary="18"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-18) solid;
        }
        :host([ddd-primary="17"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-17) solid;
        }
        :host([ddd-primary="16"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-16) solid;
        }
        :host([ddd-primary="15"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-15) solid;
        }
        :host([ddd-primary="14"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-14) solid;
        }
        :host([ddd-primary="13"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-13) solid;
        }
        :host([ddd-primary="12"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-12) solid;
        }
        :host([ddd-primary="11"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-11) solid;
        }
        :host([ddd-primary="10"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-10) solid;
        }
        :host([ddd-primary="9"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-9) solid;
        }
        :host([ddd-primary="8"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-8) solid;
        }
        :host([ddd-primary="7"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-7) solid;
        }
        :host([ddd-primary="6"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-6) solid;
        }
        :host([ddd-primary="5"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-5) solid;
        }
        :host([ddd-primary="4"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-4) solid;
        }
        :host([ddd-primary="3"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-3) solid;
        }
        :host([ddd-primary="2"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-2) solid;
        }
        :host([ddd-primary="1"]) .image-wrapper {
          border-bottom: 12px var(--ddd-primary-1) solid;
        }
        
        img {
          border-radius: var(--ddd-border-radius, 12px)
            var(--ddd-border-radius, 12px) 0 0;
        }
        .wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .title-bar {
          text-align: left;
          padding-left: var(--ddd-spacing-3);
          margin-top: var(--ddd-spacing-3);
          color: var(--ddd-theme-default-nittanyNavy);
          border: none;
          font-weight: var(--ddd-font-weight-bold);
          font-size: 28px;
        }
        .image-wrapper {
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
        }
        .image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
        }
        h3 {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
        .button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px; 
        }
        button {
          width: 100%;
          background-color: var(--ddd-theme-default-link);

          color: white;
          border: none;
          padding: 12px 20px;
          font-size: var(--ddd-font-size-4xs);
          font-weight: bold;
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          margin-bottom: var(--ddd-spacing-4);
        }
        button:hover {
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: white;
        }

        .description {
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-coalyGray);
          margin: var(--ddd-spacing-3);
          text-align: left;
        }
        .ddd-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-md);
          background-color: var(--ddd-theme-accent);
        }
        @media (prefers-color-scheme: dark) {
          .title-bar {
            color: var(--highContrast-override, white);
          }
          .description {
            color: var(--highContrast-override, white);
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="image-wrapper">
        <img src="${this.image}" alt="${this.title || "Card image"}" />
      </div>
      <div class="title-bar">${this.title}</div>
      <div class="description">
        <slot></slot>
      </div>
      ${this.link
        ? html`<div class="link">
            <div class="button-wrapper">
              <button @click=${this.clickEvent}>Explore ></button>
            </div>
          </div> `
        : ""}
    `;
  }

  
  
  clickEvent() {
    window.open(this.link);
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);