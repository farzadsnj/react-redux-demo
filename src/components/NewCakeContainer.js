<<<<<<< HEAD
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
        <button onClick={()=> props.buyCake(number)}>Buy {number} cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}

=======
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
        <button onClick={()=> props.buyCake(number)}>Buy {number} cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)