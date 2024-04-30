import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html  } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';

import css from './pokedex-page-styles';

import '../../elements/bgadp-pokeapi-dm/bgadp-pokeapi-dm';
import '../../elements/co-pokemon-card/co-pokemon-card';

/* eslint-disable new-cap */
class PokedexPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'pokedex-page';
  }

  static get properties() {
    return {
      pokemons: { type: Array },
    };
  }

  constructor() {
    super();
    this.pokemons = [];
  };

  async firstUpdated() {
    this.pokeApiDm = this.shadowRoot.querySelector('#pokeapi-data');
    this.pokemons = await this.pokeApiDm.getPokemons();    
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <h1 class="header-title">PokeDex</h1>
        </div>
        
        <div slot="app__main" class="container">
          <nav class="nav-pokemon">
            <button @click="${ this._handlePrevPage }">Preview</button>
            <button @click="${ this._handleNextPage }">Next</button>
          </nav>
          ${ this.pokemons?.length === 0 ? html `
            <strong>Cargando...</strong> 
          ` : ''}          
          ${ this.pokemons.map(pokemon => html `
            <co-pokemon-card              
              pokemon="${ JSON.stringify(pokemon) }"
            ></co-pokemon-card>
          `)}          
        </div>
        <bgadp-pokeapi-dm id="pokeapi-data"></bgadp-pokeapi-dm>
    </cells-template-paper-drawer-panel>`;
  }

  async _handlePrevPage() {
    await this._handleLoadPokemons('previous');
  }

  async _handleNextPage() {        
    await this._handleLoadPokemons('next');
  }

  async _handleLoadPokemons(key = "") {
    if (this.pokeApiDm[key] === null) return;
    this.pokemons = [];
    this.pokeApiDm.url = this.pokeApiDm[key];
    this.pokemons = await this.pokeApiDm.getPokemons();
  }

  static get styles() {
    return [ css ];
  }
}

window.customElements.define(PokedexPage.is, PokedexPage);