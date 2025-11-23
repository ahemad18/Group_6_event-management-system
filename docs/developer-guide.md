# Developer Documentation

## Architecture Overview

The Event Management System follows a modular JavaScript architecture with clear separation of concerns:

### Core Components

#### 1. EventManager (`src/js/eventManager.js`)
Handles all event-related data and operations.

**Key Methods:**
- `getAllEvents()`: Returns array of all events
- `getEventById(id)`: Retrieves specific event by ID
- `searchEvents(query)`: Filters events based on search query
- `registerForEvent(eventId, attendeeData)`: Handles registration logic
- `getAvailableSpots(eventId)`: Calculates remaining capacity

#### 2. RegistrationForm (`src/js/formHandler.js`)
Manages form validation and submission.

**Key Methods:**
- `init(formElement, eventManager)`: Initializes form with event manager
- `validateEmail(email)`: Email format validation
- `validatePhone(phone)`: Phone number validation
- `validateForm(formData)`: Complete form validation
- `handleSubmit(e)`: Form submission handler
- `showErrors(errors)`: Display validation errors
- `showSuccess(message)`: Display success confirmation

#### 3. App Controller (`src/js/app.js`)
Main application controller coordinating all components.

**Key Functions:**
- `setupSearch()`: Initializes search functionality
- `loadEvents()`: Loads and displays all events
- `displayEvents(events)`: Renders event cards
- `createEventCard(event)`: Creates individual event card HTML
- `scrollToRegistration(eventId)`: Smooth scroll to registration form
- `populateEventDropdown()`: Populates event selection dropdown

### Data Structure

#### Event Object
```javascript
{
    id: Number,              // Unique identifier
    name: String,            // Event name
    date: String,            // Date in YYYY-MM-DD format
    location: String,        // Venue location
    capacity: Number,        // Maximum attendees
    registered: Number,      // Current registrations
    description: String      // Event description
}
```

#### Attendee Data
```javascript
{
    name: String,           // Full name
    email: String,          // Email address
    phone: String,          // Contact number
    event: Number,          // Event ID
    comments: String        // Optional comments
}
```

## Styling Architecture

### CSS Organization

#### 1. `style.css` - Base Styles
- Global resets
- Typography
- Layout structure
- Navigation
- Footer

#### 2. `components.css` - Component Styles
- Event cards
- Registration form
- Search bar
- Buttons and inputs
- Responsive design

### Design Tokens
- Primary Color: `#667eea`
- Secondary Color: `#764ba2`
- Background: `#f4f4f4`
- Text: `#333`
- Border Radius: `5px` to `25px`

## Future Enhancements

### Phase 2 Features
1. **Backend Integration**
   - RESTful API for event data
   - Database persistence
   - User authentication

2. **Advanced Features**
   - QR code generation for tickets
   - Email notifications
   - Calendar integration
   - Payment processing

3. **Analytics Dashboard**
   - Attendance tracking
   - Event performance metrics
   - User engagement statistics

### Recommended Tech Stack for Backend
- **Node.js + Express** or **Python + Flask**
- **PostgreSQL** or **MongoDB** for database
- **JWT** for authentication
- **SendGrid** or **Nodemailer** for emails

## Testing Guidelines

### Manual Testing Checklist
- [ ] All events display correctly
- [ ] Search filters events properly
- [ ] Form validation works for all fields
- [ ] Registration updates available spots
- [ ] Error messages display correctly
- [ ] Success confirmation appears
- [ ] Responsive design works on mobile
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

### Future Automated Testing
- Unit tests for EventManager class
- Integration tests for form submission
- E2E tests for complete user flows

## Contributing

### Code Style
- Use camelCase for variables and functions
- Use PascalCase for classes
- 4 spaces for indentation
- Semicolons required
- Comments for complex logic

### Git Workflow
1. Create feature branch
2. Make changes with clear commits
3. Test thoroughly
4. Submit pull request
5. Code review before merge

## API Documentation (Planned)

### Endpoints (Future Implementation)

#### GET /api/events
Returns all events

#### GET /api/events/:id
Returns specific event

#### POST /api/events
Creates new event (admin only)

#### POST /api/registrations
Registers attendee for event

#### GET /api/registrations/:eventId
Returns registrations for specific event (admin only)

---
Last Updated: November 2025
