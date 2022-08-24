import './category-body.styles.scss';

const CategoryBody = ({title}) => {
    console.log('CategoryBody', title)
    return(
        <div className="category-body-container">
         <h2>{title}</h2>
         <p>Shop Now</p>
        </div>
    );
}

export default CategoryBody