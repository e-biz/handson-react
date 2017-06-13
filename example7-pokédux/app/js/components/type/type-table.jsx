import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class TypeTable extends Component {

    render() {
        let types = this.props.types.map((type, index) => {
            let href = '/type/' + type.name;
            return (
                <tr key={index}>
                    <td>
                        {index}
                    </td>
                    <td>
                        <Link to={href}>{type.name}</Link>
                    </td>
                </tr>
            );
        });

        return (
            <table className='table is-bordered'>
                <tbody>
                    {types}
                </tbody>
            </table>
        );
    }
}

TypeTable.propTypes = {
    types: PropTypes.array
};

export default TypeTable;
