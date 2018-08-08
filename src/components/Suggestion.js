import React, {Component} from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.title},
      {r.authors}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
