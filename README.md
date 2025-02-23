
# License Lens

Discover software licenses in plain language. A web app that scrapes license information and explains it using AI.

https://knowyourlicense.vercel.app/

## Features

- **License Lookup**: Enter a software name to find its license via web scraping
- **AI-Powered Explanations**: Get generated explanations of licenses in simple terms using Mistral AI
- **Follow-Up Questions**: (In Development) Chat-style interface for additional questions
- **Local AI Processing**: Runs Mistral model locally via Ollama for privacy
- **Modern Stack**: React frontend + Flask backend + Beautiful Soup web scraping

## Technologies

**Backend**:  
![Python](https://img.shields.io/badge/Python-3.9%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.0%2B-lightgrey)
![BeautifulSoup](https://img.shields.io/badge/Beautiful_Soup-4.0%2B-green)

**AI**:  
![Mistral](https://img.shields.io/badge/Mistral-AI-9cf)
![Ollama](https://img.shields.io/badge/Ollama-Local_LLM-orange)

**Frontend**:  
![React](https://img.shields.io/badge/React-18%2B-61DAFB)
![Vite](https://img.shields.io/badge/Vite-4.0%2B-FFD62E)

## Installation

### Prerequisites
- Python 3.9+
- Node.js 16+
- [Ollama](https://ollama.ai/) installed locally
- Mistral model installed (`ollama pull mistral`)

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Usage

1. Start both backend and frontend servers
2. Visit `http://localhost:5173` (or your frontend port)
3. Enter a software name (e.g., "React")
4. View scraped license information
5. Read AI-generated explanation
6. (Coming Soon) Ask follow-up questions about the license



## Troubleshooting

- Ensure Ollama is running: `ollama serve`
- Confirm CORS is enabled in Flask (included in requirements)
- Check network requests in browser devtools
- Verify Mistral model installation: `ollama list`

## Contributing

Contributions welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)
## Acknowledgements

- [Ollama](https://ollama.ai/) for local AI infrastructure
- [Mistral AI](https://mistral.ai/) for the language model
- Beautiful Soup for web scraping capabilities
- Flask & React communities for documentation
```