# 📦 021 Trade – Open Orders Page (Frontend Assignment)

This project is a mobile-responsive recreation of the **'Open Orders'** page from the 021 Trade web application. It is built using **Next.js (App Router)** and **Tailwind CSS**, focusing on high-quality **UI/UX design**, interactivity, and **mobile-first responsiveness**.



## Assignment Brief

You were required to replicate a provided screenshot of the Orders page:

- ✅ In **Next.js** – for the **full-time Frontend Developer** role
- ✅ Focus on **UI/UX quality**, **responsiveness**, and clean code





## Approach

-   **Component-based** structure with isolated, reusable logic, ensuring modularity and maintainability.
-   **Tailwind CSS** for pixel-perfect responsiveness and efficient layout control, accelerating UI development.
-   **Custom hook (`useOrdersLogic.js`)** to manage sorting, filtering, and pagination logic cleanly, promoting reusability and separation of concerns.
-   Emphasis on **mobile layout** without compromising the desktop experience, providing a seamless user experience across devices.



## 🗂️ Folder Structure

- **`app/OpenOrdersPage.jsx`**  
  Main page component that combines all subcomponents, sets up layout, and uses the custom hook for logic.

- **`components/Navbar.jsx`**  
  Contains the top navigation bar of the application.

- **`components/OpenOrders/DownloadButton.jsx`**  
  A reusable button component used to trigger a download (UI only).

- **`components/OpenOrders/OpenOrdersTable.jsx`**  
  Renders the orders table with sortable headers and dynamic data rows.

- **`components/OpenOrders/OpenOrdersTableFilters.jsx`**  
  Handles the filter section UI including client dropdown, search input, and selected ticker tags.

- **`components/OpenOrders/PaginationControls.jsx`**  
  Displays pagination controls like Previous/Next buttons and current page indicator.

- **`data/ordersData.js`**  
  Contains static dummy order data used to populate the table.

- **`hooks/useOrdersLogic.js`**  
  Custom React hook managing core logic for sorting, pagination, and selected tickers.


## ⚙️ How to Run Locally

```bash
# 1. Clone the repo
# 2. Navigate to the project directory
# 3. Install dependencies
npm install
# 4. Start the Next.js dev server
npm run dev
# 5. Open in browser
http://localhost:3000
