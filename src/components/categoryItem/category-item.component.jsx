import './category-item.styles.scss'

import CategoryBody from '../categoryBody/category-body.component';

const CategoryItem = ({categories}) => {
    const {id, imageUrl, title} = categories;
    return (
        <div 
          className="category-container"
          key={id}>
          <div 
            className="background-image" 
            style={ {backgroundImage: `url(${imageUrl})`}}/>
          <CategoryBody title={title} />
       </div>
    )
}

export default CategoryItem