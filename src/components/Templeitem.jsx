import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import changeTheId from '../reducers/changeData';
import { changeId } from '../action/index';


function Templeitem(props) {
  const mystate = useSelector((state)=> state.changeTheId    )

  const dispatch= useDispatch();


  let {title , state , country , locality, path ,id }=props
  const objpath=  {
     title : title, 
     location: `${locality},${state},${country} `
  }
  const gettempleid=()=>{ 
    dispatch(changeId(objpath))
    console.log(mystate)
  }
  return (
    <div className='col-md-3 col-sm-6 ' onClick={gettempleid}>
        <div className="card" style={{ "borderRadius":"13px", "border":"0px"  }}>
        <Link   to="/detail"><img src={`https://source.unsplash.com/random/?${title}`} className="card-img-top" style={{"borderRadius":"13px" ,"height":"10rem"}} alt="..."/></Link>
  
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"><i className="material-icons" style={{"color":"orange"}}>place</i> {`${locality},${state},${country} `}</p>
    
  </div>
</div>
    </div>
  )
}

export default Templeitem