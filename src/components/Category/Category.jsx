const Category = ({category}) => {
    const {name} = category || {};
    return (
        <div>
            <p className="mb-5">{name}</p>
        </div>
    );
};

export default Category;