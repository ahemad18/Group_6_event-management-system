// Event Management System - Event Data and Management

class EventManager {
    constructor() {
        this.events = [];
        this.loadSampleData();
    }

    loadSampleData() {
        this.events = [
            {
                id: 1,
                name: 'Tech Conference 2025',
                date: '2025-12-01',
                location: 'Convention Center',
                capacity: 500,
                registered: 234,
                description: 'Annual technology conference featuring latest trends in AI and cloud computing.'
            },
            {
                id: 2,
                name: 'Annual Meetup',
                date: '2025-12-15',
                location: 'City Hall',
                capacity: 200,
                registered: 145,
                description: 'Community gathering for networking and knowledge sharing.'
            },
            {
                id: 3,
                name: 'Workshop: Web Development',
                date: '2025-12-20',
                location: 'Tech Hub',
                capacity: 50,
                registered: 42,
                description: 'Hands-on workshop covering modern web development practices.'
            }
        ];
    }

    getAllEvents() {
        return this.events;
    }

    getEventById(id) {
        return this.events.find(event => event.id === id);
    }

    searchEvents(query) {
        query = query.toLowerCase();
        return this.events.filter(event => 
            event.name.toLowerCase().includes(query) ||
            event.location.toLowerCase().includes(query) ||
            event.description.toLowerCase().includes(query)
        );
    }

    registerForEvent(eventId, attendeeData) {
        const event = this.getEventById(eventId);
        if (event && event.registered < event.capacity) {
            event.registered++;
            return {
                success: true,
                message: `Successfully registered for ${event.name}`
            };
        }
        return {
            success: false,
            message: 'Event is full or not found'
        };
    }

    getAvailableSpots(eventId) {
        const event = this.getEventById(eventId);
        if (event) {
            return event.capacity - event.registered;
        }
        return 0;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EventManager;
}
