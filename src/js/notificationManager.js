// Admin Notification System

class NotificationManager {
    constructor() {
        this.adminEmail = 'admin@eventmanagement.com';
        this.notifications = [];
    }

    // Send registration notification to admin
    sendRegistrationNotification(eventData, attendeeData) {
        const notification = {
            id: Date.now(),
            type: 'registration',
            timestamp: new Date().toISOString(),
            event: eventData,
            attendee: attendeeData,
            status: 'pending'
        };

        this.notifications.push(notification);
        
        // Simulate email notification (in real app, this would call backend API)
        this.displayNotification(notification);
        
        return notification;
    }

    displayNotification(notification) {
        console.log('📧 ADMIN NOTIFICATION');
        console.log('======================');
        console.log(`New Registration Received!`);
        console.log(`Timestamp: ${new Date(notification.timestamp).toLocaleString()}`);
        console.log(`\nEvent Details:`);
        console.log(`- Event: ${notification.event.name}`);
        console.log(`- Date: ${notification.event.date}`);
        console.log(`- Location: ${notification.event.location}`);
        console.log(`\nAttendee Details:`);
        console.log(`- Name: ${notification.attendee.name}`);
        console.log(`- Email: ${notification.attendee.email}`);
        console.log(`- Phone: ${notification.attendee.phone}`);
        console.log(`- Comments: ${notification.attendee.comments || 'None'}`);
        console.log('======================');

        // Show browser notification if supported
        this.showBrowserNotification(notification);
        
        // In a real application, this would send an email via backend:
        // POST /api/notifications/email
        // {
        //     to: this.adminEmail,
        //     subject: `New Registration: ${notification.event.name}`,
        //     body: this.formatEmailBody(notification)
        // }
    }

    showBrowserNotification(notification) {
        // Request permission for browser notifications
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('New Event Registration', {
                body: `${notification.attendee.name} registered for ${notification.event.name}`,
                icon: '/assets/images/event-icon.png',
                tag: 'registration-' + notification.id
            });
        } else if ('Notification' in window && Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('New Event Registration', {
                        body: `${notification.attendee.name} registered for ${notification.event.name}`,
                        icon: '/assets/images/event-icon.png',
                        tag: 'registration-' + notification.id
                    });
                }
            });
        }
    }

    formatEmailBody(notification) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px; }
        .content { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; }
        .details { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #667eea; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎉 New Event Registration</h2>
        </div>
        
        <div class="content">
            <p>A new attendee has registered for an event on your Event Management System.</p>
            
            <div class="details">
                <h3>Event Information</h3>
                <p><strong>Event Name:</strong> ${notification.event.name}</p>
                <p><strong>Date:</strong> ${notification.event.date}</p>
                <p><strong>Location:</strong> ${notification.event.location}</p>
                <p><strong>Current Registrations:</strong> ${notification.event.registered}/${notification.event.capacity}</p>
            </div>
            
            <div class="details">
                <h3>Attendee Information</h3>
                <p><strong>Name:</strong> ${notification.attendee.name}</p>
                <p><strong>Email:</strong> ${notification.attendee.email}</p>
                <p><strong>Phone:</strong> ${notification.attendee.phone}</p>
                ${notification.attendee.comments ? `<p><strong>Comments:</strong> ${notification.attendee.comments}</p>` : ''}
            </div>
            
            <div class="details">
                <h3>Registration Details</h3>
                <p><strong>Registration Time:</strong> ${new Date(notification.timestamp).toLocaleString()}</p>
                <p><strong>Registration ID:</strong> #${notification.id}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated notification from Event Management System</p>
            <p>To manage registrations, log in to your admin dashboard</p>
        </div>
    </div>
</body>
</html>
        `;
    }

    // Get all notifications
    getAllNotifications() {
        return this.notifications;
    }

    // Get unread notifications count
    getUnreadCount() {
        return this.notifications.filter(n => n.status === 'pending').length;
    }

    // Mark notification as read
    markAsRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
            notification.status = 'read';
        }
    }

    // Clear all notifications
    clearAll() {
        this.notifications = [];
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NotificationManager;
}
