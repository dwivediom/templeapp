import React from 'react'
import "../App.css"
import Data from "../data.json"
import { useSelector } from 'react-redux/es/exports'
function Detail() {
  const mystate = useSelector((state)=>state.changeTheId)
   let text = mystate.title.toString()
   
   
   var line = '';
var lines = text.split(" "); //multiLines contains your text
for(var i=0; i<lines.length; i++){
  if(lines[i].startsWith(" ")){
    line += " " + lines[i];  
  }else{
    line += " " + lines[i];  
      
  }    
}

line = line.substring(1).trim();
let newtext = line.replaceAll(" "," ")

  return (
   <>
   <div className='lfmargin d-flex flex-column justify-content-between '>
    <div className='title '>Detail</div>
   <div className='  M-image mt-4 '  style={{"borderRadius":"13px" }}>
    <img src="https://source.unsplash.com/random/?temple"  style={{"borderRadius":"13px"}} alt="" />

   </div >
     <div className="title d-block mt-4 " style={{"width":"100%" }} ><p > {newtext}</p>  </div>
    <div className='mt-2 d-block location' > <p className=" fs-4"><i className="material-icons" style={{"color":"orange"}}>place</i> {mystate.location}</p></div>
<div className='fs-5 mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas itaque officia omnis similique totam asperiores iure, facilis, maxime incidunt amet veniam voluptatem consequuntur! Asperiores odit reprehenderit beatae dolorem, eius magnam architecto est possimus explicabo sed? Nesciunt sint dolorum eos officiis aperiam, at quasi in totam tempora, delectus vitae sed corrupti vel ea veniam aspernatur ipsa cumque earum cum quidem! Voluptatum nihil aperiam quasi, vitae eos voluptate. Fugit veritatis omnis aspernatur possimus veniam dolore, quas ipsam? Sint inventore quia sequi alias labore, quam optio cupiditate minus suscipit tenetur repudiandae ducimus commodi a excepturi ratione molestias voluptatum asperiores. Nobis deserunt eaque sunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque quo ratione hic repudiandae sequi sapiente sint, voluptate accusantium neque, dicta at nihil natus velit possimus consequuntur. Saepe, quibusdam sint?</div>

   </div>
   
   </> 
  )
}

export default Detail