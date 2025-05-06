import { ComponentItem } from "../../../models/ComponentItem";
import './Sidebar.css'

interface ListItemProps {
    component: ComponentItem,
    isSelected: boolean,
    setSelectedItem: (item: ComponentItem) => void
}

function ListItem(props: ListItemProps) {

    let classNames = props.isSelected ? 
          "list-item selected py-1 text-center" 
        : "list-item py-1 text-center";

    return(
        <li className={classNames} onClick={() => props.setSelectedItem(props.component)}>
            {props.component.name}
        </li>
    )
}

export default ListItem;