# 🏛️ Smart Campus Issue Reporter

A serverless, logic-driven web platform designed to streamline infrastructure maintenance and asset management on campus. This system ensures immediate routing of reported issues directly to responsible staff, reducing response lag and preventing communication gaps.

---

## 🚀 Core Functionality

*   **Integrated Reporting Portal:** A unified, mobile-friendly interface for students to report maintenance and facility issues (electrical, plumbing, IT, general).
*   **Zero-Lag Categorized Routing:** Reports are instantly routed based on the chosen category (e.g., Electrical -> Maintenance Staff; IT -> System Cell). *No AI model determines the routing; it is hard-coded for speed and reliability.*
*   **Live Infrastructure Dashboard:** An active, real-time feed of all reported issues, categorized and prioritized.
*   **Role-Based Access Control:** Separate management panels for Master Admins, Electrical Staff, and IT Staff (System Cell) with filtered data access.
*   **Automated Verification (Spam Prevention):** Utilizes a structured password system (e.g., `View_Cse-A123`) unique to the student's department and section to verify the reporter's identity.

---

## 🛠️ Architecture

This project uses a modern, lightweight, completely serverless architecture to ensure zero hosting costs and high availability.

### Technology Stack:

*   **Frontend UI:** Clean, minimalist HTML5, CSS3, and JavaScript (ES6+).
*   **UI Component Toolkit:** Bootstrap v5.3.
*   **Serverless Backend:** Google Apps Script (GAS) Macro Engine.
*   **Cloud Database:** Google Sheets.
*   **Project Logo:** A textless, geometric vector node icon derived from `logo.png`.

### Conceptual Structure:

1.  **Frontend (Web Page):** Validates and submits the report.
2.  **Google Apps Script (GAS):** The "API" layer that handles verification logic and database operations.
3.  **Google Sheets (The Database):** Stores and resolves complaints.

---

## 🔧 Installation & Deployment Guide

This project is entirely serverless. It does not require Node.js, Python, or standard hosting.

### Prerequisites

*   A Google Account.
*   FontAwesome Kit URL (optional, if you want icons on the public page).

### Steps:

#### 1. Setup the Database (Google Sheet)
*   Create a new Google Sheet.
*   Set the **Title** to your Database Name (e.g., "Smart Campus Database").
*   Create the following columns in **Row 1** in the first sheet (named 'Complaints'):
    *   `ID`
    *   `Timestamp`
    *   `Email`
    *   `Department`
    *   `Section`
    *   `Room No.`
    *   `Category`
    *   `Urgency`
    *   `Issue Title`
    *   `Description`
    *   `Status`

#### 2. Install the Backend Code (Google Apps Script)
*   In your Google Sheet, go to **Extensions** -> **Apps Script**.
*   Delete any default code (`function myFunction() {}`).
*   Copy and paste the entire contents of the project's `Code.gs` file into the script editor.
*   Locate the `CONTACT_ROUTING` object at the top of the script and customize the contact information (name, phone/email) for each department (e.g., `Electrical`).

#### 3. Deploy the Backend as a Web App
*   Click **Deploy** -> **New deployment** (top right).
*   Select **Type:** Web App.
*   **Execute as:** Me (your Google account).
*   **Who has access:** Anyone (required for students to submit from the web page).
*   Click **Deploy**.
*   Authorize permissions if requested. *Important: Copy the generated `Web App URL`.*

#### 4. Configure the Frontend (index.html)
*   Open the project's `index.html` file.
*   Find the `API_BASE` variable (usually near the top of the `<script>` section).
*   Replace the placeholder URL with the `Web App URL` you copied in Step 3.
