// Event Management System - JavaScript

let eventManager;
let registrationForm;
let notificationManager;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Event Management System initialized');
    
    // Initialize Event Manager
    eventManager = new EventManager();
    
    // Initialize Notification Manager
    notificationManager = new NotificationManager();
    
    // Initialize Registration Form
    registrationForm = new RegistrationForm();
    const formElement = document.getElementById('registration-form');
    if (formElement) {
        registrationForm.init(formElement, eventManager, notificationManager);
    }
    
    // Load events
    loadEvents();
    
    // Populate event dropdown
    populateEventDropdown();
    
    // Setup search functionality
    setupSearch();
});

function setupSearch() {
    const searchInput = document.getElementById('search-events');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value;
            if (query.length > 0) {
                const results = eventManager.searchEvents(query);
                displayEvents(results);
            } else {
                loadEvents();
            }
        });
    }
}

function loadEvents() {
    const events = eventManager.getAllEvents();
    displayEvents(events);
}

function displayEvents(events) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    
    if (events.length === 0) {
        eventList.innerHTML = '<p>No events found.</p>';
        return;
    }
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        eventList.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const availableSpots = eventManager.getAvailableSpots(event.id);
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Available Spots:</strong> ${availableSpots}/${event.capacity}</p>
        <p>${event.description}</p>
        <button onclick="scrollToRegistration(${event.id})">Register</button>
    `;
    return card;
}

function scrollToRegistration(eventId) {
    const registerSection = document.getElementById('register');
    const eventSelect = document.getElementById('event-select');
    
    if (registerSection && eventSelect) {
        registerSection.scrollIntoView({ behavior: 'smooth' });
        eventSelect.value = eventId;
    }
}

function populateEventDropdown() {
    const eventSelect = document.getElementById('event-select');
    if (!eventSelect) return;
    
    const events = eventManager.getAllEvents();
    
    events.forEach(event => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.name} - ${event.date}`;
        eventSelect.appendChild(option);
    });
}
