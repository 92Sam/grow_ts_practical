import ParentClass from './parent_class'
import axios, { AxiosResponse } from 'axios'
import { dtoPokeResponse } from '../dto/pokemon.dto'

class Child extends ParentClass {
  constructor() {
    super()
  }

  bringPokes = async () => {
    const url = this.getUrl()
    return axios
      .get(url, {
        params: {
          ID: 12345,
        },
      })
      .then((response: AxiosResponse<dtoPokeResponse>) => {
        return response.data.results
      })
  }
}

export default Child
