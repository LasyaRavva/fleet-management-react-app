import {memo} from 'react';
import './FleetCrd.css';
const FleetCard = memo (({fleet, onUpdateDriver, onToggleAvailability,onDelete}) =>{
    console.log('Rendering FleetCard:',fleet.id);
    return (
        <div className='fleet-card'>
            <div className='fleet-image'>
                <img src="" alt = "vechicle"/>

            </div>
            <div className='fleet-details'>
                <h3>{fleet.vechicleRegNo}</h3>
                <p><strong>Category:</strong>{fleet.category}</p>
                <p><strong>Driver:</strong>{fleet.driverName}</p>
                <p className={`status ${fleet.availability.toLowerCase()}`}>
                    <strong>Status:</strong>{fleet.availability}
                </p>
            </div>
            <div className='fleet-actions'>
                <button onClick={() => onUpdateDriver(fleet.id)}
                className='btn-update'>Update Driver</button>
                <button onClick={() => onToggleAvailability(fleet.id)} className='btn-toggle'>
                    Change Availability
                </button>
                <button onClick={() => onDelete(fleet.id)}
                className='btn-delete'>
                    Delete
                </button>
            </div>
        </div>
    )
}) 

FleetCard.displayName ='FleetCard';

export default FleetCard;