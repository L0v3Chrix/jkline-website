// J-Kline Forms API
// Handles submission to Google Apps Script

const FORMS_API_URL = process.env.NEXT_PUBLIC_FORMS_API_URL || '';

interface ContactFormData {
  formType: 'contact';
  name: string;
  email: string;
  type: 'booking' | 'press' | 'general';
  message: string;
}

interface BookingFormData {
  formType: 'booking';
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  eventType: string;
  eventDate?: string;
  eventLocation?: string;
  expectedAttendance?: string;
  budget?: string;
  message: string;
  howHeard?: string;
}

type FormData = ContactFormData | BookingFormData;

interface FormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitForm(data: FormData): Promise<FormResponse> {
  if (!FORMS_API_URL) {
    console.error('Forms API URL not configured');
    return { success: false, error: 'Form submission not configured' };
  }

  try {
    const response = await fetch(FORMS_API_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires this
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // With no-cors, we can't read the response, so we assume success if no error thrown
    return { success: true, message: 'Form submitted successfully' };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to submit form' 
    };
  }
}

export async function submitContactForm(data: Omit<ContactFormData, 'formType'>): Promise<FormResponse> {
  return submitForm({ ...data, formType: 'contact' });
}

export async function submitBookingForm(data: Omit<BookingFormData, 'formType'>): Promise<FormResponse> {
  return submitForm({ ...data, formType: 'booking' });
}
