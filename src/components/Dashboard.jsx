import React, { useState, useEffect } from 'react';
import { User, Home, Filter, LogOut, Search, MapPin, CheckCircle, XCircle } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_ROOMMATES = [
    { id: 1, name: "Alex Johnson", email: "alex@univ.edu", location: "North Campus", pets: "ok", smoking: "no", cleanliness: "neat", occupation: "Student" },
    { id: 2, name: "Sam Smith", email: "sam@univ.edu", location: "South Campus", pets: "not ok", smoking: "no", cleanliness: "average", occupation: "Student" },
    { id: 3, name: "Jordan Lee", email: "jordan@univ.edu", location: "Downtown", pets: "ok", smoking: "yes", cleanliness: "messy", occupation: "Professional" },
    { id: 4, name: "Casey West", email: "casey@univ.edu", location: "West End", pets: "not ok", smoking: "no", cleanliness: "neat", occupation: "Other" },
    { id: 5, name: "Taylor Swift", email: "taylor@univ.edu", location: "Music Row", pets: "ok", smoking: "no", cleanliness: "pristine", occupation: "Professional" },
    { id: 6, name: "Morgan Freeman", email: "morgan@univ.edu", location: "Hollywood", pets: "ok", smoking: "yes", cleanliness: "average", occupation: "Student" },
];

const MOCK_ROOMS = [
    { id: 101, name: "Sunny Single", location: "North Campus", type: "single", size: "small", furnishing: "fully furnished", availability: "immediate", wifi: "yes" },
    { id: 102, name: "Cozy Shared", location: "South Campus", type: "shared", size: "medium", furnishing: "semi-furnished", availability: "month", wifi: "yes" },
    { id: 103, name: "Luxury Apartment", location: "Downtown", type: "apartment", size: "large", furnishing: "unfurnished", availability: "later", wifi: "no" },
    { id: 104, name: "Budget Hostel", location: "East Side", type: "hostel", size: "small", furnishing: "fully furnished", availability: "immediate", wifi: "yes" },
    { id: 105, name: "Modern Studio", location: "West End", type: "apartment", size: "medium", furnishing: "fully furnished", availability: "month", wifi: "yes" },
];

const Dashboard = ({ onNavigate, onLogout }) => {
    const [user, setUser] = useState(null);
    const [activeSection, setActiveSection] = useState(null); // 'rooms' or 'roommates'

    // Filter States
    const [roommateFilters, setRoommateFilters] = useState({
        pets: '',
        smoking: '',
        cleanliness: '',
        occupation: []
    });

    const [roomFilters, setRoomFilters] = useState({
        type: '',
        furnishing: [],
        size: '',
        availability: '',
        wifi: false
    });

    // Results States
    const [roommateResults, setRoommateResults] = useState(null);
    const [roomResults, setRoomResults] = useState(null);

    // Load user from session
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('roomers_user'));
        const isLoggedIn = localStorage.getItem('roomers_session') === 'true';

        if (!isLoggedIn) {
            onNavigate('login');
        } else {
            setUser(storedUser);
        }
    }, [onNavigate]);

    // Handle Filter Changes
    const handleRoommateFilterChange = (key, value) => {
        setRoommateFilters(prev => {
            if (key === 'occupation') {
                const newOccupation = prev.occupation.includes(value)
                    ? prev.occupation.filter(item => item !== value)
                    : [...prev.occupation, value];
                return { ...prev, occupation: newOccupation };
            }
            return { ...prev, [key]: value };
        });
    };

    const handleRoomFilterChange = (key, value) => {
        setRoomFilters(prev => {
            if (key === 'furnishing') {
                const newFurnishing = prev.furnishing.includes(value)
                    ? prev.furnishing.filter(item => item !== value)
                    : [...prev.furnishing, value];
                return { ...prev, furnishing: newFurnishing };
            }
            if (key === 'wifi') {
                return { ...prev, wifi: !prev.wifi };
            }
            return { ...prev, [key]: value };
        });
    };

    // Apply Filters Logic
    const applyRoommateFilters = () => {
        let results = MOCK_ROOMMATES;

        if (roommateFilters.pets) results = results.filter(r => r.pets === roommateFilters.pets);
        if (roommateFilters.smoking) results = results.filter(r => r.smoking === roommateFilters.smoking);
        if (roommateFilters.cleanliness) results = results.filter(r => r.cleanliness === roommateFilters.cleanliness);
        if (roommateFilters.occupation.length > 0) results = results.filter(r => roommateFilters.occupation.includes(r.occupation));

        setRoommateResults(results);
    };

    const applyRoomFilters = () => {
        let results = MOCK_ROOMS;

        if (roomFilters.type) results = results.filter(r => r.type === roomFilters.type);
        if (roomFilters.size) results = results.filter(r => r.size === roomFilters.size);
        if (roomFilters.availability) results = results.filter(r => r.availability === roomFilters.availability);
        if (roomFilters.furnishing.length > 0) results = results.filter(r => roomFilters.furnishing.map(f => f.toLowerCase()).includes(r.furnishing));
        if (roomFilters.wifi) results = results.filter(r => r.wifi === 'yes');

        setRoomResults(results);
    };

    if (!user) return null;

    return (
        <div className="pt-24 px-4 max-w-7xl mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-500 mt-1">Welcome back, <span className="font-semibold text-blue-600">{user.email}</span></p>
                </div>
                <button
                    onClick={onLogout}
                    className="mt-4 md:mt-0 px-6 py-2 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors flex items-center"
                >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log Out
                </button>
            </div>

            {/* Selection Buttons */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <button
                    onClick={() => { setActiveSection('rooms'); setRoomResults(null); }}
                    className={`p-8 rounded-3xl border-2 text-left transition-all group relative overflow-hidden ${activeSection === 'rooms'
                        ? 'border-blue-600 bg-blue-50/50 shadow-lg'
                        : 'border-white bg-white hover:border-blue-200 shadow-sm hover:shadow-md'
                        }`}
                >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${activeSection === 'rooms' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                        }`}>
                        <Home className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Rooms</h2>
                    <p className="text-slate-500">Find the perfect space for your college life.</p>
                </button>

                <button
                    onClick={() => { setActiveSection('roommates'); setRoommateResults(null); }}
                    className={`p-8 rounded-3xl border-2 text-left transition-all group relative overflow-hidden ${activeSection === 'roommates'
                        ? 'border-blue-600 bg-blue-50/50 shadow-lg'
                        : 'border-white bg-white hover:border-blue-200 shadow-sm hover:shadow-md'
                        }`}
                >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${activeSection === 'roommates' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                        }`}>
                        <User className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Find Roommates</h2>
                    <p className="text-slate-500">Connect with compatible peers.</p>
                </button>
            </div>

            {/* Conditional Views */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
                {!activeSection && (
                    <div className="flex flex-col items-center justify-center h-full py-20 text-center px-4">
                        <div className="bg-slate-50 p-6 rounded-full mb-6">
                            <Filter className="w-12 h-12 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Select an option above</h3>
                        <p className="text-slate-500 max-w-md mt-2">Choose whether you're looking for a room or a roommate to see available filters.</p>
                    </div>
                )}

                {activeSection === 'roommates' && (
                    <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-slate-100">
                            <User className="w-6 h-6 text-blue-600" />
                            <h2 className="text-2xl font-bold text-slate-900">Roommate Preferences</h2>
                        </div>

                        {/* Roommate Filters */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Pets</label>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-3 text-slate-600 cursor-pointer hover:text-slate-900">
                                        <input type="radio" name="pets" className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                            onChange={() => handleRoommateFilterChange('pets', 'ok')} checked={roommateFilters.pets === 'ok'} />
                                        <span>Ok with pets</span>
                                    </label>
                                    <label className="flex items-center space-x-3 text-slate-600 cursor-pointer hover:text-slate-900">
                                        <input type="radio" name="pets" className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                            onChange={() => handleRoommateFilterChange('pets', 'not ok')} checked={roommateFilters.pets === 'not ok'} />
                                        <span>Not ok with pets</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Smoking</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    onChange={(e) => handleRoommateFilterChange('smoking', e.target.value)} value={roommateFilters.smoking}>
                                    <option value="">Any</option>
                                    <option value="no">Non-smoker</option>
                                    <option value="yes">Smoker</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Cleanliness</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    onChange={(e) => handleRoommateFilterChange('cleanliness', e.target.value)} value={roommateFilters.cleanliness}>
                                    <option value="">Any</option>
                                    <option value="neat">Very Neat</option>
                                    <option value="average">Average</option>
                                    <option value="messy">Messy</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Occupation</label>
                                <div className="space-y-2">
                                    {['Student', 'Professional', 'Other'].map(type => (
                                        <label key={type} className="flex items-center space-x-3 text-slate-600 cursor-pointer hover:text-slate-900">
                                            <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                                onChange={() => handleRoommateFilterChange('occupation', type)} checked={roommateFilters.occupation.includes(type)} />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mb-12">
                            <button onClick={applyRoommateFilters} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                                Apply Filters
                            </button>
                        </div>

                        {/* Roommate Results Table */}
                        {roommateResults && (
                            roommateResults.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-200">
                                                <th className="py-4 px-4 font-semibold text-slate-900">Name</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Location</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Pets</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Smoking</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Cleanliness</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Occupation</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roommateResults.map(person => (
                                                <tr key={person.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="py-4 px-4 text-slate-700 font-medium">{person.name} <br /><span className="text-xs text-slate-400 font-normal">{person.email}</span></td>
                                                    <td className="py-4 px-4 text-slate-600">{person.location}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{person.pets}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{person.smoking}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{person.cleanliness}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{person.occupation}</td>
                                                    <td className="py-4 px-4">
                                                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                                                            Contact
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <p className="text-slate-500 font-medium">No roommates found matching your criteria.</p>
                                    <p className="text-sm text-slate-400">Try adjusting your preferences.</p>
                                </div>
                            )
                        )}
                    </div>
                )}

                {activeSection === 'rooms' && (
                    <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-slate-100">
                            <Home className="w-6 h-6 text-blue-600" />
                            <h2 className="text-2xl font-bold text-slate-900">Room Preferences</h2>
                        </div>

                        {/* Room Filters */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Room Type</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    onChange={(e) => handleRoomFilterChange('type', e.target.value)} value={roomFilters.type}>
                                    <option value="">Any Type</option>
                                    <option value="single">Single Room</option>
                                    <option value="shared">Shared Room</option>
                                    <option value="hostel">Hostel</option>
                                    <option value="apartment">Apartment</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Furnishing</label>
                                <div className="space-y-2">
                                    {['Fully furnished', 'Semi-furnished', 'Unfurnished'].map(type => (
                                        <label key={type} className="flex items-center space-x-3 text-slate-600 cursor-pointer hover:text-slate-900">
                                            <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                                onChange={() => handleRoomFilterChange('furnishing', type)} checked={roomFilters.furnishing.includes(type)} />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Room Size</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    onChange={(e) => handleRoomFilterChange('size', e.target.value)} value={roomFilters.size}>
                                    <option value="">Any Size</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Availability</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    onChange={(e) => handleRoomFilterChange('availability', e.target.value)} value={roomFilters.availability}>
                                    <option value="">Any Time</option>
                                    <option value="immediate">Immediate</option>
                                    <option value="month">Within a month</option>
                                    <option value="later">Later</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Amenities</label>
                                <label className="flex items-center space-x-3 text-slate-600 cursor-pointer hover:text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        onChange={() => handleRoomFilterChange('wifi', !roomFilters.wifi)} checked={roomFilters.wifi} />
                                    <span className="font-medium">Wi-Fi Required</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end mb-12">
                            <button onClick={applyRoomFilters} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                                Apply Filters
                            </button>
                        </div>

                        {/* Room Results Table */}
                        {roomResults && (
                            roomResults.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-200">
                                                <th className="py-4 px-4 font-semibold text-slate-900">Room</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Location</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Type</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Size</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Furnishing</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Avail.</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Wi-Fi</th>
                                                <th className="py-4 px-4 font-semibold text-slate-900">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roomResults.map(room => (
                                                <tr key={room.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="py-4 px-4 text-slate-700 font-medium">{room.name} <br /><span className="text-xs text-slate-400 font-normal">ID: {room.id}</span></td>
                                                    <td className="py-4 px-4 text-slate-600">{room.location}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{room.type}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{room.size}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{room.furnishing}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{room.availability}</td>
                                                    <td className="py-4 px-4 text-slate-600 capitalize">{room.wifi}</td>
                                                    <td className="py-4 px-4">
                                                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                                                            Inspect
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <p className="text-slate-500 font-medium">No rooms found matching your criteria.</p>
                                    <p className="text-sm text-slate-400">Try adjusting your preferences.</p>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
