import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDownOption(){
    return (
        <DropdownButton id="dropdown-basic-button" title="Seleccione las gráficas">
            <Dropdown.Item href="#/admin/ventas">Ventas</Dropdown.Item>
            <Dropdown.Item href="#/admin/compras">Compras</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropDownOption;