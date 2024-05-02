import { LitElement } from 'lit-element';
export class BgadpPokeapiDm extends LitElement {
  static get is() {
    return 'bgadp-pokeapi-dm';
  }

  static get properties() {
    return {
      url: { type: String },
      previus: { type: String },
      next: { type: String }
    };
  }

  constructor() {
    super();
    this.url = 'https://pokeapi.co/api/v2/evolution-chain/';
  }

  async getPokemons() {
    try {
      const { results, next, previous } = await this.fetchData(this.url);
      this.previous = previous;
      this.next = next;
      const pokemons = [];
      for (const { url } of results) {
        pokemons.push(await this.getPokemonsEvolutions(url));
      }
      return this.getPokemonsInfoCard(pokemons);
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemonsInfoCard(pokemons = []) {
    const pokemonsData = [];

    for (const pokemon of pokemons) {
      const pokemonsEvl = [];
      for (const { id } of pokemon) {
        const evolutionNumber = pokemon.length;
        const result = await this.getPokemonData(id);
        pokemonsEvl.push({ ...result, evolutionNumber });
      }
      pokemonsData.push(pokemonsEvl);
    }

    return pokemonsData;
  }

  async getPokemonsEvolutions(path = '') {
    try {
      const { chain } = await this.fetchData(path);
      const evolutions = [
        chain.species
      ];
      let evolvesTo;
      if (chain?.evolves_to[0]) {
        evolvesTo = chain?.evolves_to[0];
      }
      if (evolvesTo) {
        evolutions.push(evolvesTo.species);
      }
      if (evolvesTo?.evolves_to[0]) {
        evolvesTo = evolvesTo?.evolves_to[0];
        evolutions.push(evolvesTo.species);
      }
      return evolutions.map(({name: pokemonName, url}) => ({name: pokemonName, id: +url.split('/')[6]}));
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemonData(id = 0) {
    try {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const { name: pokemonName, sprites: { front_default: image }, types } = await this.fetchData(pokemonUrl);
      return { id, name: pokemonName, image, type: types[0]?.type?.name };
    } catch (error) {
      console.log(error);
    }
  }

  async fetchData(url = '') {
    try {
      const data = await fetch(url);
      return await data.json();
    } catch (error) {
      console.log(error);
    }
  }

}

window.customElements.define(BgadpPokeapiDm.is, BgadpPokeapiDm);