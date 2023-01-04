<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

=======
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)