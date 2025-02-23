# LicenseLens

LicenseLens is a tool designed to help you quickly find the license of any software and understand its terms, permissions, and restrictions. Whether you're a developer, legal professional, or just someone curious about software licenses, LicenseLens makes searching easier and faster.

## Features
- **Fast License Lookup:** Search for software licenses with ease.
- **Clear Explanations:** Get detailed explanations of license terms.
- **Multiple Access Methods:** Use the website or call the API via cURL.
- **User-Friendly Interface:** Built with React for a smooth user experience.
- **Powerful Backend:** Flask-based API for efficient data retrieval.

## Tech Stack
- **Frontend:** React
- **Backend:** Flask

## How to Use
### 1. Web Interface
Simply visit our website and enter the name of the software to find its license information.

### 2. API Access via cURL
You can also access the API using cURL:
```sh
curl -L https://license-finder-gamma.vercel.app/api/{software_name}
```
Replace `{software_name}` with the name of the software you want to search for.

## Installation & Running Locally
### Backend (Flask)
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/license-lens-backend.git
   cd license-lens-backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Run the Flask server:
   ```sh
   python app.py
   ```

### Frontend (React)
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/license-lens-frontend.git
   cd license-lens-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## Contributing
We welcome contributions! Feel free to fork the repository, submit issues, and make pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Start exploring software licenses with ease using LicenseLens!

