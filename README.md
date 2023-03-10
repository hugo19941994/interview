# React Frontend & Python Backend

The objective of this interview is to:

1. Load a JSON file with Python and parse it as JSON
2. Modify the `rating` key of every dict in the list
  * If it's greater than 4.5 change the value with `Excelente`
  * In any other case change the value with `Muy bueno`
3. Return the modified data and serve it via HTTP
4. Request the file from a React frontend
5. Build a "card" React class
6. Render one card per each element of the JSON data

## Files to change

* `backend/server.py`
* `frontend/Exercise.js`
* `frontend/Exercise.css` (optionally, to add styles to the cards)

## How to execute

### Backend

Python 3.7 or newer required

```bash
cd backend

# with pipenv
pipenv install
pipenv shell

# with venv + pip
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python3 -m server
```

### Frontend

Node.js 14 or newer required

```bash
cd frontend
npm install
npm start
```

Both servers will hot reload any code changes

## Example

![example image](./image.png)
