import React from 'react'

const Line_table = (props) => {
  console.log(props);
  return (
    <div className='graph-table'>
      <div className='graph-table-title'>
        <div># DTC TRACKER</div>
       
        <div>
           
            <select style={{width:"12rem",backgroundColor:"black",padding:"0.5rem",color:"red"}} value={props.selectedOpt} onChange={(e) => props.handleSelectChange(e.target.value)} >
            <option value="graphs">View by Records</option>
            <option value="record">View By Charts</option>
      </select>
          </div>
      </div>
   <div className="table ">
    
    <div className="row">
      <div className="cell no-border header-text"></div>
      <div className="cell header-text">Open</div>
      <div className="cell header-text">Pending</div>
      <div className="cell header-text">on Customer</div>
      <div className="cell header-text">on Third Party</div>
      <div className="cell header-text">for Part</div>
    </div>
   
    <div className="row">
      <div className="cell no-border header-text">D0</div>
      <div className="cell">20</div>
      <div className="cell">30</div>
      <div className="cell">25</div>
      <div className="cell">10</div>
      <div className="cell">5</div>
    </div>
    <div className="row">
      <div className="cell no-border header-text">D1</div>
      <div className="cell">15</div>
      <div className="cell">25</div>
      <div className="cell">30</div>
      <div className="cell">20</div>
      <div className="cell">10</div>
    </div>
    <div className="row">
      <div className="cell no-border header-text">D2</div>
      <div className="cell">15</div>
      <div className="cell">25</div>
      <div className="cell">30</div>
      <div className="cell">20</div>
      <div className="cell">10</div>
    </div>
  </div>
  
    </div>
  )
}

export default Line_table
