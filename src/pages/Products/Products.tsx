import React from 'react'
import { InfoSection } from '../../components'
import {  homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Products
