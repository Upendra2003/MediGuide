# [MediGuide](https://medi-guide-orcin.vercel.app/)

MediGuide is a web application that provides various healthcare functionalities such as disease prediction, medicine scanning, hospital location, and user profile management. Users can register, log in, and access these features to make informed decisions about their health.

## Features

### Disease Prediction

- Users can input their symptoms, and the system predicts the possible disease using a logistic regression model.
- The prediction includes a description of the disease and precautions to be taken.
  
### Medicine Scanning

- Users can upload the composition of a medicine, and the system returns detailed information about the drug.
- Information includes the name, composition, uses, and a brief description of the medicine.
  
### Hospital Location

- After predicting a severe disease, users can locate nearby hospitals for immediate medical assistance.

### User Profile

- Users have their profiles where they can view their details.
- BMI (Body Mass Index) is calculated based on the weight and height inputs provided by the user.

## Technologies Used

- **Backend**: Django framework for Python
- **Frontend**: React.js
- **Machine Learning**: Logistic Regression model for disease prediction
- **Database**: PostgreSQL (or any other database of choice)
- **Deployment**: Vercel (for frontend) and Heroku (for backend)

## Setup Instructions

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the backend folder: `cd backend`
3. Install dependencies: `pip install -r requirements.txt`
4. Run migrations: `python manage.py migrate`
5. Start the Django development server: `python manage.py runserver`
6. Navigate to the frontend folder: `cd ../frontend`
7. Install dependencies: `npm install`
8. Start the React development server: `npm start`

## API Endpoints

- `/api/medicine/`: CRUD operations for medicines
- `/api/predict_disease/`: Endpoint for disease prediction
- Add more endpoints as needed for user authentication, profile management, etc.

## Contributors

- [Upendra](https://github.com/Upendra2003)
- [Rohan](https://github.com/RohanReddy2003)
- [Abhiram Royals](https://github.com/Royal-Dragon)
