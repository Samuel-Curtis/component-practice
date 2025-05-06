import { useState } from "react";
import { ComponentItem } from "../../../models/ComponentItem";
import CategorySection from "./CategorySection";

interface SidebarProps {
    allComponents: ComponentItem[],
    selectedItem: ComponentItem,
    setSelectedItem: (item: ComponentItem) => void
}

function Sidebar(props: SidebarProps) {

    // Gets all unique category labels
    const categoryLabels: string[] = Array.from(new Set(props.allComponents.map(component => component.category)));

    // Maps over each component and returns an array of items that belong to the passed in category
    function getGroupedComponents(label: string): ComponentItem[] {
        let groupedComponents: ComponentItem[] = [];

        props.allComponents.map(component => {
            if (component.category === label) {
                groupedComponents.push(component);
            }
        });

        return groupedComponents;
    }

    // Hook for tracking which sections are expanded, default to none opened
    const [expandedSections, setExpandedSections] = useState<string[]>([])

    // ToggleExpand function
    function toggleExpand(label: string): void {
        // Call setExpandedSections Hook
        setExpandedSections((sections) => 
            sections.includes(label)
            ? sections.filter((sect) => sect != label) // If label/category is expanded, remove it
            : [...sections, label]) // Otherwise add it to expanded sections
    }

    return (
        <>
        <aside className="sidebar top-0 left-0 w-64 h-screen overflow-y-auto flex flex-col justify-center">
                <h1 className="sidebar-title">Components</h1>
                
                <div className="component-list">
                    {categoryLabels.map((label) => (
                        <CategorySection 
                            label={label} 
                            items={getGroupedComponents(label)} 
                            selectedComponent={props.selectedItem} 
                            isExpanded={expandedSections.includes(label)} 
                            toggleExpand={toggleExpand}       
                            setSelectedItem={props.setSelectedItem}    
                            key={label}
                        />
                    ))}
                </div>

        </aside>
        </>
    )
}

export default Sidebar;