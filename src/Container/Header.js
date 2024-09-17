import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Header = ({count}) => {
  return (
    <div>
      <nav class="navbar bg-light p-3 m-2">
  <div class="container-fluid">
    <a class="navbar-brand">Restaurant</a>
    <form class="d-flex" role="search">
      <button class="btn btn-primary" type="submit">
        <Link to='/orders' style={{color:'white',textDecoration:'none'}}>Orders</Link>
        <span className='badge bg-secondary'>{count}</span>
      </button>
    </form>
  </div>
</nav>
    </div>
  )
}

const mapStateToProps=(state)=>({
  count: state.orderreducer.length
})

export default connect(mapStateToProps) (Header)