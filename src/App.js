import React, { useState, useEffect } from "react";
import { data } from "./consumption";
import "./App.css";

function App() {
  const [sorting, setSorting] = useState(data.claims);
  const [count, setCount] = useState(0);
  function sort(e) {
    function compare(a, b) {
      var bandA, bandB;
      switch (e.target.value) {
        case "claimant":
          bandA = a.exceeded;
          bandB = b.exceeded;
          break;
        case "priority":
          // bandA = priorityA calculated by the hour and sla
          break;
        default:
          bandA = a.status.toUpperCase();
          bandB = b.status.toUpperCase();
      }

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    setSorting(sorting.sort(compare));
    setCount(count + 1);
  }
  useEffect(() => {
  }, [sorting]);
  function SlaStatus(props) {
    const data = props.data;
    const claims = data.map(data => (
      <article key={data.id} className="sla-card" data-type={data.status}>
        <header class="sla-card-header">
          <h1>{data.status}</h1>
          <h2> {data.hours} hours</h2>
        </header>
      </article>
    ));
    return <section className="card-list">{claims}</section>;
  }
  function ClaimList(props) {
    const data = props.data;
    const claims = data.map(data => {
      const exceeded = data.exceeded ? <h4>EXCEEDED</h4> : null
      return(
      <article className="card">
        <header class="card-header">
          <p> Created on: {data.timeCreate}</p>
          <p> Last Updated: {data.timeUpdate}</p>
          <h3> Claimant: {data.claimant}</h3>
          {exceeded}
        </header>
        <div class="card-author">
          {/* <a class="author-avatar" href="#"> */}
          {/* <img src={logo} /> */}
          {/* </a> */}
          <svg class="half-circle" viewBox="0 0 106 57">
            <path
              d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"
              fill={data.color}
            ></path>
          </svg>
          <div class="author-name">
            <div class="author-name-prefix">Assigned To:</div>
            {data.assignedTo}
          </div>
        </div>
      </article>
    )});
    return <section className="card-list">{claims}</section>;
  }

  return (
    <div className="App">
      <div>
        <h1>Status</h1>
      </div>
      <SlaStatus data={data.slas}></SlaStatus>
      <div>
        <h1>Claim List</h1>
      </div>
      <ClaimList data={sorting}></ClaimList>
      <button onClick={sort} value="claimant">
        Sort now!
      </button>
    </div>
  );
}

export default App;
