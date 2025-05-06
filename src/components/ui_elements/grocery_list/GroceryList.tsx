import { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import AddItemModal from "./AddItemModal";
import './GroceryList.css'


function GroceryList() {

    let [activeGroceries, setActiveGroceries] = useState(['Eggs', 'Tomatoes', 'Avocado']);
    let [completedGroceries, setCompletedGroceries] = useState(['Egg noodles', 'Scampi', 'Orange juice', 'Apples']);
    let [showAddItemModal, setShowAddItemModal] = useState(false);
    
    function switchList(item: string): void {
        if (activeGroceries.includes(item)) {
            setActiveGroceries(activeGroceries.filter((grocery) => grocery != item));
            setCompletedGroceries([...completedGroceries, item]);
        } else {
            setCompletedGroceries(completedGroceries.filter((grocery) => grocery != item));
            setActiveGroceries([...activeGroceries, item]);
        }
    }

    function addNewItem(item: string): void {
        activeGroceries.push(item);
    }   

    return(
        <>
        <div className="grocery-list-wrapper">

            <div className="header">
                <span className="title-and-sub">
                    <h2 className="title">Groceries</h2>
                    <p className="subtitle">Shared with <span className="shared-number">1 person</span></p>
                </span>
                <span className="dot-icon">
                    <PiDotsThreeOutlineFill />
                </span>
            </div>

            <div className="active-list-wrapper">
                <ul className={`list active-list ${activeGroceries.length === 0 ? 'empty' : ''}`}>
                    {activeGroceries.map((item) => (
                        <li key={item} onClick={() => switchList(item)} className="item active-item">{item}</li>
                    ))}
                </ul>
            </div>

            <div className="completed-list-wrapper">
                <h3 className="completed-title">Completed ({completedGroceries.length})</h3>
                <ul className="list completed-list">
                    {completedGroceries.map((item) => (
                        <li key={item} onClick={() => switchList(item)} className="item completed-item">{item}</li>
                    ))}
                </ul>
            </div>

            <button onClick={() => setShowAddItemModal(true)} className="add-item-button"><FaPlus /></button>
        </div>
        
        {
            showAddItemModal && (
            <AddItemModal
                showAddItemModal={showAddItemModal}
                addNewItem={addNewItem}
                closeModal={() => setShowAddItemModal(false)}
            />
        )}
        </>
    )
}

export default GroceryList;