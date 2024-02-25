import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from '../utils/Constants'

const Recipes = ({recipes,title}) => {
  return (
    <div className="WOYM-container">
            <p className="section-title">
              {title}
            </p>
            <div className="WOYM-item">
              {recipes.map((item) => (
                <Link
                  className="WOYM-image"
                  key={item.id}
                  to={item.action.link}
                >
                  <img src={IMAGE_URL + item.imageId} alt="" />
                </Link>
              ))}
            </div>
    </div>
  )
}

export default Recipes