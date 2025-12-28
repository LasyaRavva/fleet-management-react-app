import{ useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FleetCard from '../components/FleetCard';
import './Admin.css';

const Admin = () => {
    const [fleets, setFleets] = useState([]);

    const handleAddFleet = (newFleet) => {
        setFleets(prev => [...prev, newFleet]);
    };
    const handleUpdateDriver = useCallback((fleetId) => {
        const newDriverName= prompt("Enter new driver name:");

        if(newDriverName && newDriverName.trim()){
            setFleets(prev =>
                prev.map(fleet =>
                    fleet.id === fleetId
                    ?{...fleet,driverName:newDriverName.trim()}
                    :fleet
                )
            );
        } else if(newDriverName !== null) {
            alert("Driver name cannot be empty");
        };
    },[]);

    const handleToggleAvalability = useCallBack((fleetId) => {
        setFleets(prev => 
            prev.map(fleet => 
                fleet.id === fleetId
                ?{
                    ...fleet,
                    availability: fleet.availability === 'Available' ? 'Unavailable' : 'Available'
                }
                    :fleet
            )
        );
    },[]);

    const handleDelete = useCallback((fleetId) => {
        const confirmed = confirm('Are you sure you want to delete this vechicle?');

        if(confirmed){
            setFleets(prev => prev.filter(fleet => fleet.id !== fleetId));
        }
    },[]);

    return(
        <div className="admin-container">
            <Navbar />
            <div className='admin-layout'>
                <Sidebar onAddFleet = {handleAddFleet} />
                <main className='main-content'>
                    <h2>Fleet Management</h2>
                    <div className='fleet-grid'>
                        {fleets.length === 0 ? (
                            <p className='no-fields'>No fleets added yet.Add a fleet using the form.</p>
                        ):(
                            fleets.map(fleet => (
                                <FleetCard 
                                key ={fleet.id}
                                fleet = {fleet}
                                onUpdateDriver = {handleUpdateDriver}
                                onToggleAvailability = {handleToggleAvalability}
                                onDelete = {handleDelete}
                                />
                            ))
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Admin;

