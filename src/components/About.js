import React, { useState } from 'react'

export default function About(props) {
//    const [mystyle, setMystyle]= useState({
   
//         color: 'white',
//         backgroundColor: 'black'
    
//    })
let mystyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroudColor: props.mode === 'dark'?'#042743':'white',
    border: '2px solid',
    borderColor: props.mode ==='dark'?'white':'#042743'
}

//    const [txtbtn, settxtbtn]= useState("light mode")

//    const toggleStyle = ()=>{
//     if(mystyle.color== 'white'){
//         setMystyle({
   
//             color:'black',
//             backgroundColor:'white'
     
//         })
//         settxtbtn("Enable dark mode")
//         }

//     else{
//     setMystyle({
//         color:'white',
//             backgroundColor:'black'
     
//     })
//     settxtbtn("Enable light mode")
// }
//    }

  return (
        <div className='container' style={mystyle}>
            <h2  className="my-2">About Us</h2>
            <div id="accordion" >
    <div className="card" style={mystyle} >
        <div className="card-header" id="headingOne">
        <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>More about us</strong>
            </button>
        </h5>
        </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body" style={mystyle} >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
    </div>
    <div className="card" style={mystyle}>
        <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Tell more</strong>
            </button>
        </h5>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div className="card-body" >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
    </div>
    <div className="card" style={mystyle} >
        <div className="card-header" id="headingThree">
        <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Tell more please</strong>
            </button>
        </h5>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
    </div>
    </div>
        <div className='container my-3 '></div>
        {/* <button onClick={toggleStyle} type="button" className="btn btn-secondary">{txtbtn}</button> */}
     </div>
    )
    }



