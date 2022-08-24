import './directory.styles.scss';

import CategoryItem from "../categoryItem/category-item.component";

const Directory = ({data: categories}) => {
    
    return (
        <div className="directory-container">
            {categories.map((categories) => { 
                return(
                    <CategoryItem key={categories.id} categories={categories} />
                )

            })}
        </div>
    );
}

export default Directory