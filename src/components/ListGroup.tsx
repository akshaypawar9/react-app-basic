import { useState } from "react";
// import "./styles.css"; // Import the CSS file

interface ListGroupProp {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProp) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedItem, setSelectedIitem] = useState("");

    const handleItemClick = (index: number, item: string) => {
        setSelectedIndex(index);
        onSelectItem(item);
        setSelectedIitem(item);
        setIsOpen(false); // Close the dropdown after selecting an item
    };

    const handleClearBtn = () => {
        setSelectedIitem("");
        setSelectedIndex(-1);
    };

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <div className="dropdown-center">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen ? "true" : "false"}
                        >
                            {selectedItem ? selectedItem : heading}
                        </button>
                        <ul className={`dropdown-menu dropdown-menu-dark ${isOpen ? "show" : ""}`}>
                            {items.length === 0 ? (
                                <li className="dropdown-item disabled">No items</li>
                            ) : (
                                items.map((item, index) => (
                                    <li
                                        className={`dropdown-item ${selectedIndex === index ? "active" : ""
                                            }`}
                                        key={item}
                                        onClick={() => handleItemClick(index, item)}
                                    >
                                        {item}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-primary clear-btn" onClick={handleClearBtn}>
                        Clear Value
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListGroup;
