import { CellsPage } from "@cells/cells-page";
import { BbvaCoreIntlMixin } from "@bbva-web-components/bbva-core-intl-mixin";
import { html } from "lit-element";

import css from "./co-pokemon-card-styles";

export class CoPokemonCard extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return "co-pokemon-card";
  }

  static get properties() {
    return {
      pokemon: { type: String },
      id: { type: Number, attributes: false },
      name: { type: String, attributes: false },
      image: { type: String, attributes: false },
      type: { type: String, attributes: false },
      evolutions: { type: Number, attributes: false },
      index: { type: Number, attributes: false }
    };
  }

  constructor() {
    super();
    this.index = 0;
  }

  firstUpdated() {
    this._handleAssignData();
  }

  updated() {
    this._handleAssignData();
  }

  _handleAssignData() {
    const { evolutionNumber, id, image, name, type } = JSON.parse(this.pokemon)[this.index];
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = type;
    this.evolutions = evolutionNumber;
  }

  render() {
    if (this.id)
    return html`
      <div class="card-pokemon">
        <div class="card-title">
          <button 
            id="arrow-left"
            class="card-arrow"
            @click="${ () => this._handleChangeEvolution(false) }"
          >
            <img src="./resources/images/icons/arrow-left.png" alt="left-button" />
          </button>
          <p class="card-title-text">${ this.name }</p>              
          <button
            id="arrow-right"
            class="card-arrow"
            @click="${ () => this._handleChangeEvolution() }"
          >
            <img src="./resources/images/icons/arrow-right.png" alt="right-button" />
          </button>
        </div>
        <figure class="image-container">
          <img src="${ this.image }" class="pokemon-image" alt="${ this.name }" />
        </figure>
        <div class="info-container">
          <p>
            <strong>Tipo:</strong>
            ${ this.type }
          </p>
          <p>
            <strong>Evoluciones:</strong>
            ${ this.evolutions }
          </p>
        </div>            
      </div>
    `;
  }

  static get styles() {
    return [css];
  }

  _handleChangeEvolution(next = true) {  
    if (next && (this.index === 0 || this.index === 1) && (this.index + 1) !== this.evolutions) {
      this.index++;    
    } else if (!next && (this.index === 2 || this.index === 1)) {
      this.index--;    
    };
  };
}

window.customElements.define(CoPokemonCard.is, CoPokemonCard);
