// Form Validation and Registration Handler

class RegistrationForm {
    constructor() {
        this.form = null;
        this.eventManager = null;
        this.notificationManager = null;
    }

    init(formElement, eventManager, notificationManager) {
        this.form = formElement;
        this.eventManager = eventManager;
        this.notificationManager = notificationManager;
        this.attachEventListeners();
    }

    attachEventListeners() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validatePhone(phone) {
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    validateForm(formData) {
        const errors = [];

        if (!formData.name || formData.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }

        if (!this.validateEmail(formData.email)) {
            errors.push('Please enter a valid email address');
        }

        if (!this.validatePhone(formData.phone)) {
            errors.push('Please enter a valid phone number');
        }

        if (!formData.event) {
            errors.push('Please select an event');
        }

        return errors;
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: this.form.querySelector('#name').value,
            email: this.form.querySelector('#email').value,
            phone: this.form.querySelector('#phone').value,
            event: this.form.querySelector('#event-select').value,
            comments: this.form.querySelector('#comments').value
        };

        const errors = this.validateForm(formData);

        if (errors.length > 0) {
            this.showErrors(errors);
            return;
        }

        // Register for event
        const result = this.eventManager.registerForEvent(
            parseInt(formData.event),
            formData
        );

        if (result.success) {
            // Get event details for notification
            const eventDetails = this.eventManager.getEventById(parseInt(formData.event));
            
            // Send admin notification
            this.notificationManager.sendRegistrationNotification(eventDetails, formData);
            
            this.showSuccess(result.message + ' Admin has been notified!');
            this.form.reset();
        } else {
            this.showErrors([result.message]);
        }
    }

    showErrors(errors) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = 'background: #ffebee; color: #c62828; padding: 1rem; border-radius: 5px; margin: 1rem 0;';
        errorDiv.innerHTML = '<strong>Please fix the following errors:</strong><ul>' +
            errors.map(err => `<li>${err}</li>`).join('') +
            '</ul>';

        const existingError = this.form.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        this.form.insertBefore(errorDiv, this.form.firstChild);
    }

    showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = 'background: #e8f5e9; color: #2e7d32; padding: 1rem; border-radius: 5px; margin: 1rem 0;';
        successDiv.innerHTML = `<strong>Success!</strong> ${message}`;

        const existingMessages = this.form.querySelectorAll('.error-message, .success-message');
        existingMessages.forEach(msg => msg.remove());

        this.form.insertBefore(successDiv, this.form.firstChild);

        setTimeout(() => successDiv.remove(), 5000);
    }
}
