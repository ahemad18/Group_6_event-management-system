// Event Management System - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Event Management System initialized');
    loadEvents();
});

function loadEvents() {
    // Placeholder for event loading functionality
    const eventList = document.getElementById('event-list');
    
    // Sample data - will be replaced with API calls later
    const sampleEvents = [
        {
            name: 'Tech Conference 2025',
            date: '2025-12-01',
            location: 'Convention Center'
        },
        {
            name: 'Annual Meetup',
            date: '2025-12-15',
            location: 'City Hall'
        }
    ];

    eventList.innerHTML = '';
    
    sampleEvents.forEach(event => {
        const eventCard = createEventCard(event);
        eventList.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <button onclick="registerForEvent('${event.name}')">Register</button>
    `;
    return card;
}

function registerForEvent(eventName) {
    alert(`Registration for ${eventName} will be available soon!`);
}
