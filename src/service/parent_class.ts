class Parent {
  constructor() {}
  private url: string = 'https://pokeapi.co/api/v2/pokemon/'

  getUrl = (): string => {
    return this.url
  }
}

export default Parent
