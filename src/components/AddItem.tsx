import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {addItem, deleteItem, editItem} from "../store/items"
import {RootState} from "../store/rooteReducer"

const AddItem: React.FC = () => {
    const items = useSelector((state: RootState) => state.items.items)
    const dispatch = useDispatch()
    const [newItem, setNewItem] = useState('')
    const [editItemIndex, setEditItemIndex] = useState(-1)

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            dispatch(addItem(newItem))
            setNewItem('')
        }
    }

    const handleDeleteItem = (index: number) => {
        dispatch(deleteItem(index))
    }

    const handleEditItem = (index: number, newItem: string) => {
        dispatch(editItem({index, newItem}))
        setEditItemIndex(-1)
    }

    return (
        <>
            <input type="text" value={newItem} onChange={(e) => {
                setNewItem(e.target.value)
            }}/>
            <button onClick={handleAddItem}>Add Item</button>
            <ul style={{paddingLeft: 25}}>
                {items.map((i, index) => (
                    <li key={index}>
                        <p>
                            {editItemIndex === index ? (
                                <button onClick={() => {
                                    handleEditItem(index, i)
                                }}>Save</button>
                            ) : (
                                <>
                                    <button onClick={() => {
                                        setEditItemIndex(index)
                                    }}>Edit
                                    </button>
                                    <button style={{marginRight: 10}} onClick={() => handleDeleteItem(index)}> Delete
                                    </button>
                                </>
                            )}
                            {editItemIndex === index ? (
                                <input type="text" value={i}
                                       onChange={(e) => dispatch(editItem({index, newItem: e.target.value}))}/>
                            ) : (
                                <label>{i}</label>
                            )}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default AddItem;