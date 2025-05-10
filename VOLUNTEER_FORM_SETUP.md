# Volunteer Form Setup Guide

This guide explains how to set up the volunteer form to send emails using EmailJS.

## EmailJS Setup

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, or another email provider)
   - Follow the instructions to connect your email account

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Create a new template
   - Use the following variables in your template:
     - `{{from_name}}` - The volunteer's name
     - `{{from_email}}` - The volunteer's email
     - `{{from_address}}` - The volunteer's address
     - `{{from_phone}}` - The volunteer's phone number
     - `{{message}}` - The volunteer's comment/message

4. **Update the Form Component**
   - Open `src/components/forms/VolunteerForm.tsx`
   - Replace the placeholder values with your actual EmailJS credentials:
     ```typescript
     await emailjs.send(
       'service_c3resqj',    // Replace with your EmailJS service ID
       'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
       templateParams,
       'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
     );
     ```

5. **Initialize EmailJS**
   - In your `layout.tsx` file, you can initialize EmailJS with your public key:
   ```typescript
   useEffect(() => {
     // Initialize EmailJS with your public key
     emailjs.init('YOUR_PUBLIC_KEY');
   }, []);
   ```

## Testing the Form

After setting up EmailJS:
1. Fill out the volunteer form on your website
2. Submit the form
3. Check the email account connected to your EmailJS service to verify the email was received

## Troubleshooting

- If emails are not being sent, check the browser console for errors
- Verify your EmailJS credentials are correct
- Make sure your email service is properly connected in EmailJS
- Check your EmailJS dashboard for any failed email attempts

## Email Limits

The free tier of EmailJS allows 200 emails per month. If you expect more volunteers, consider upgrading to a paid plan or implementing a different solution.
