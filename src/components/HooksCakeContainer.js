<<<<<<< HEAD
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

=======
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default HooksCakeContainer