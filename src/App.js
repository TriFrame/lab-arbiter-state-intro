import React from 'react'
import { tether } from '@triframe/designer'

const PetDetails = tether(function*({ Api }){
    const { Pet } = Api
    const pet = yield Pet.getPet()
    return <h1>{pet.name}</h1>
})

export default PetDetails