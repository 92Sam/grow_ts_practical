import ChildClass from '../grow_ts_practical/src/service/child_class'

const bootrap = async () => {
  const pokeClass = new ChildClass()
  const responseApi = await pokeClass.bringPokes()
  console.log(responseApi)
}

bootrap()