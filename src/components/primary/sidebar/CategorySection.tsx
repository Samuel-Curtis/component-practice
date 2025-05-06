import { ComponentItem } from "../../../models/ComponentItem";
import ListItem from "./ListItem";
import './Sidebar.css'
import { FaChevronRight } from "react-icons/fa";


interface CategorySectionProps {
    label: string,
    items: ComponentItem[],
    selectedComponent: ComponentItem,
    isExpanded: boolean,
    toggleExpand: (label: string) => void,
    setSelectedItem: (item: ComponentItem) => void
}

function CategorySection(props: CategorySectionProps) {
    
    return(
        <div className="category-section">
            <button 
                className="btn-category-section w-full text-left" 
                onClick={() => props.toggleExpand(props.label)}>
                    <span className="btn-label">
                        {props.label} 
                    </span>
                    <span className={`btn-icon ${props.isExpanded ? 'animate' : ''}`}>
                        <FaChevronRight />
                    </span>
            </button>

            <div className={`item-list-wrapper ${props.isExpanded ? 'expanded' : 'collapsed'}`}>
                <ul className="item-list">
                    {props.items.map((item) => (
                        <ListItem 
                            component={item} 
                            isSelected={item.name === props.selectedComponent.name}
                            setSelectedItem={props.setSelectedItem}
                            key={item.name}
                        />
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default CategorySection;