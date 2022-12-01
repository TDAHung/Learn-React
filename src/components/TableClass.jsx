import { Table } from 'reactstrap';
import generateProducts from './ProductList.jsx';
import '../assets/tableClass.css'

const concateString = string => {
    return string.length > 30 ? string.substr(0, 30) + '...' : string;
}

const listItemRender = list => {
    const renderList = list.map((item, index) => {
        return (
            <tr className={`table-${item.className}`} key={`class-${item.id}`}>
                <td>{item.name}</td>
                <td>{index + 1}</td>
                <td>{item.price}</td>
                <td>{item.adjective}</td>
                <td>{item.material}</td>
                <td>{concateString(item.description)}</td>
                <td>
                    <img src={item.imgURL} alt="" />
                </td>
            </tr>
        );
    });
    return renderList;
}

const Product = ({ id, name, price, adjective, material, description, imgURL }, index) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{index + 1}</td>
            <td>{price}</td>
            <td>{adjective}</td>
            <td>{material}</td>
            <td>{concateString(description)}</td>
            <td><img src={imgURL} alt="" /></td>
        </tr>
    );
}

const TableClass = () => {
    const renderProducts = generateProducts(5).map(({ id, name, price, adjective, material, description, imgURL }, index) => {
        return (
            <Product key={id} index={index} name={name} price={price} adjective={adjective} material={adjective}
                description={description} imgURL={imgURL}
            ></Product>);
    });
    return (
        <Table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Number
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Adjective
                    </th>
                    <th>
                        Material
                    </th>
                    <th>Description</th>
                    <th>
                        IMG
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* {listItemRender(generateProducts(5))} */}
                {renderProducts}
            </tbody>
        </Table>
    );
}

export default TableClass;