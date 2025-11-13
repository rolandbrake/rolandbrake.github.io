# Roland Brake's Personal Website

This is a simple, one-page personal website designed for Roland Brake, hosted on GitHub Pages. It features a responsive design and automatic light/dark theme switching based on the user's local time.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Automatic Theme Switching:** Automatically switches between light and dark themes based on the time of day (daytime: 6 AM - 6 PM).
*   **Personal Information:** Displays a profile photo, a brief description, and social media links.

## Setup and Customization

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/rolandbrake/rolandbrake.github.io.git
    cd rolandbrake.github.io
    ```

2.  **Profile Photo:**
    *   Replace `assets/profile.png` with your own profile picture. Ensure it's a PNG image for best results.

3.  **Personal Information:**
    *   Open `index.html` and update the following:
        *   Your name in the `<title>` tag and `<h1>` tag.
        *   Your description in the `<p class="bio">` tag.
        *   Update the `href` attributes in the `social-links` section with your actual GitHub, LinkedIn, email, and WhatsApp links.

4.  **Theme Customization (Optional):**
    *   You can adjust the colors for the light and dark themes by modifying the CSS variables in `style.css`:
        *   `--bg-light`
        *   `--text-light`
        *   `--bg-dark`
        *   `--text-dark`
        *   `--accent`

5.  **Deployment:**
    *   This project is designed to be easily hosted on GitHub Pages. Simply push your changes to the `main` branch of your `rolandbrake.github.io` repository.

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profile.png
│   ├── github.svg
│   ├── linkedin.svg
│   ├── email.svg
│   └── whatsapp.svg
└── README.md
```
