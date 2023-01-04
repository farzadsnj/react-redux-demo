<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>item -{props.item}</h2>
        <button onClick={props.buyItem}>Buy item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.cake.numOfIceCreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream)

    return{
        buyItem: dispatchFunction
    }
}

=======
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>item -{props.item}</h2>
        <button onClick={props.buyItem}>Buy item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.cake.numOfIceCreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream)

    return{
        buyItem: dispatchFunction
    }
}

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default connect(null, mapDispatchToProps)(ItemContainer)