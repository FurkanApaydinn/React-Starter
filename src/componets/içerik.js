import React, { useContext } from 'react'
import { TemaVerisi } from '../App'

export default function Içerik() {
  return (
    <div style={useContext(TemaVerisi)} className="container">
    <h1> React </h1>
    <h1> useContext ile Componetler arası veri taşıma </h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium, tempore laborum voluptatibus eum adipisci natus id corporis, pariatur totam rerum quisquam recusandae nam, dicta omnis provident magni quas sed.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui incidunt voluptate dolorum earum ex nisi eligendi libero voluptatum, quasi eius blanditiis. Distinctio consequatur labore nihil aperiam cumque consequuntur veniam?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magni sed dolore quia beatae illum debitis facere aspernatur adipisci maxime perspiciatis, in quae labore minus? Dolorum modi error id doloribus?</p>
    </div>
  )
}
