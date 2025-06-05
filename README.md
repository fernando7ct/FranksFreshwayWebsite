Frank’s Freshway Website

🥑 Overview

This is a full-stack web app for Frank’s Freshway Market, built with Flask (Python) for the backend and React (Vite) for the frontend.

⸻

🛠️ Local Setup Instructions

📦 Clone the Repository

git clone <your-github-repo-url>
cd FranksFreshwayWebsite


⸻

1. 🚗 Backend Setup (Flask/Python)

a. Go to the backend folder:

cd backend

b. (Recommended) Create and activate a virtual environment:

python3 -m venv venv
source venv/bin/activate

c. Install dependencies:

pip install -r requirements.txt

If there is no requirements.txt, install manually:

pip install flask flask_sqlalchemy flask_cors flask_jwt_extended python-dotenv



d. Add your own .env file:
	•	Copy .env.example (if exists) to .env and fill in values
	•	Or create a new .env:

DATABASE_URI=sqlite:///freshway.db
JWT_SECRET=changeme



e. Create the database tables:

python create_db.py

f. (Optional) Seed the database with sample products:

python seed.py

g. Start the backend server:

python run.py

	•	The API should now be running at http://127.0.0.1:4000/api/products/

⸻

2. 🖥️ Frontend Setup (React/Vite)

a. Open a new terminal and go to the frontend folder:

cd ../frontend

b. Install dependencies:

npm install

c. Start the frontend dev server:

npm run dev

	•	Visit http://localhost:5173/ to view the app.

⸻

3. ⚠️ Troubleshooting
	•	Make sure both backend and frontend servers are running.
	•	If you get CORS errors, double-check Flask CORS is enabled.
	•	API URL for React is set to http://127.0.0.1:4000/api/products/ in src/api/products.js. Change the port if you use a different one for Flask.

⸻

🧽 Extra
	•	Database or .env files are not committed for security. Create your own local copies!
	•	To reset the database, delete instance/freshway.db, then run steps 1e and 1f again.


