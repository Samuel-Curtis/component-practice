import { useState } from 'react';
import './GroceryList.css'


interface AddItemModalProps {
    showAddItemModal: boolean,
    addNewItem: (item: string) => void,
    closeModal: () => void
}

function AddItemModal(props: AddItemModalProps) {

    if (!props.showAddItemModal) return null;

    const [value, setValue] = useState('');

    function onSubmit(event: React.FormEvent) {
        event.preventDefault() // Prevent page refresh
        if (value.trim()) {
            props.addNewItem(value);
        }
        props.closeModal();
    }

    return(
        <div className="modal-wrapper">

            <div className="modal">
                <form onSubmit={onSubmit}>
                    <input 
                        className='add-item-input'
                        type="text" 
                        value={value} 
                        name="item-name"
                        onChange={(event) => setValue(event.target.value)} 
                    />
                    <span className="buttons">
                        <button className='submit-button' type="submit">Submit</button>
                        <button className='submit-button cancel' onClick={() => props.closeModal()}>Cancel</button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default AddItemModal; 