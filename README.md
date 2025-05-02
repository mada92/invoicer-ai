# Invoicer AI

## Table of Contents
1.  [Project Description](#project-description)
2.  [Tech Stack](#tech-stack)
3.  [Getting Started Locally](#getting-started-locally)
4.  [Available Scripts](#available-scripts)
5.  [Project Scope (MVP)](#project-scope-mvp)
6.  [Project Status](#project-status)
7.  [License](#license)

## Project Description

Invoicer AI is a web application designed to streamline the invoice creation process using voice commands. It targets users who need a quick and convenient way to generate invoices, especially in situations where manual data entry is impractical (e.g., working in the field, driving).

The application allows users to dictate invoice details, which are then automatically transcribed using OpenAI Whisper and interpreted by OpenAI gpt-4o-mini to extract relevant data fields. User authentication and data storage are handled via Supabase (Authentication and PostgreSQL database). The application also integrates with the Polish Central Statistical Office (GUS) API to verify contractor details, ensuring data accuracy.

The main goal is to provide a hands-free, efficient method for invoice generation, overcoming the challenges of manual input on small screens or in inconvenient settings. This initial version is an MVP (Minimum Viable Product) focused on the core voice-to-invoice functionality for desktop web browsers.

## Tech Stack

* **Frontend:**
  * [Angular](https://angular.io/) (Latest Stable Version)
  * [TypeScript](https://www.typescriptlang.org/)
  * Potential UI Libraries: [Angular Material](https://material.angular.io/) or [PrimeNG](https://primeng.org/)
* **Backend (BaaS):**
  * [Supabase](https://supabase.io/)
    * [PostgreSQL](https://www.postgresql.org/) Database
    * Supabase Auth
    * Supabase Edge Functions (for secure API calls)
    * Realtime APIs
* **AI:**
  * [OpenAI API](https://openai.com/docs)
    * Whisper (Transcription)
    * gpt-4o-mini (Data Extraction)
* **CI/CD:**
  * [GitHub Actions](https://github.com/features/actions) / [GitLab CI](https://docs.gitlab.com/ee/ci/) (Automation)
* **Hosting:**
  * Frontend: [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), AWS S3+CloudFront, or similar.
  * Backend: [Supabase Cloud](https://supabase.com/dashboard)

## Getting Started Locally

Follow these instructions to set up the project environment on your local machine.

**Prerequisites:**

* [Node.js](https://nodejs.org/) (Latest LTS version recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

**Setup:**

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd invoicer-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
  * Create a `.env` file in the project root.
  * Copy the contents from `.env.example` (assuming this file exists in the repository) into your `.env` file.
  * Fill in the required API keys and configuration details:
    * Supabase URL and Anon Key
    * OpenAI API Key
    * (Potentially) GUS API credentials if required for local testing.

4.  **Run the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application should now be running on `http://localhost:4200/`.

## Available Scripts

The following scripts are available via npm/yarn:

* `start`: Runs the application in development mode using `ng serve`.
* `build`: Builds the application for production using `ng build`.
* `watch`: Builds the application and watches for file changes using `ng build --watch --configuration development`.
* `test`: Runs unit tests using `ng test` via Karma.
* `lint`: Lints the codebase using `ng lint`.

## Project Scope (MVP)

The current scope for the Minimum Viable Product includes:

* **User Authentication:** Secure user registration and login using Supabase Auth.
* **Voice Input:** Ability for users to dictate invoice information via microphone input in the browser.
* **AI Processing:**
  * Transcription of voice input using OpenAI Whisper.
  * Extraction of structured invoice data (like client details, items, amounts) from transcribed text using OpenAI gpt-4o-mini.
* **Contractor Verification:** Integration with the GUS API to look up and verify Polish contractor data based on NIP or REGON number.
* **Invoice Creation & Storage:** Saving the processed invoice data to the user's account in the Supabase PostgreSQL database.
* **Logout:** Functionality to securely terminate the user session.

## Project Status

* **Version:** 0.0.1
* **Status:** MVP (Minimum Viable Product) - Under active development. Focus is on implementing the core features described in the scope.

## License

The `package.json` specifies `"private": true` and no explicit license file or identifier was provided. Therefore, the project is currently under a proprietary license or the license is not specified. Please contact the maintainers for clarification on usage rights.
