<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of ice creams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

=======
import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of ice creams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)