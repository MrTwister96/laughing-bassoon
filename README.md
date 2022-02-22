# laughing bassoon
## Django Rest API with JWT Authentication & React Frontend Authentication with Token Refreshing
## Setting up backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
pip install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000
```
### Backend will run at http://localhost:8000

## Setting up frontend
```bash
cd frontend
npm install
npm start
```
### Frontend will run at http://localhost:3000