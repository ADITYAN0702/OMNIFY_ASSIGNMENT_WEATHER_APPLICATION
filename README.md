# OMNIFY_ASSIGNMENT_WEATHER_APPLICATION

## Introduction
This is a web application that allows users to search for the weather conditions in a specific location. It displays the current weather conditions, temperature, humidity and pressure for the selected location. The application uses an API to retrieve weather data and is built using the front-end framework React and the back-end framework Django.

## Getting Started
To run this application on your local machine, you will need to have the following software installed:
```
Node.js
Python 3.6+
Django
React
```

## Installing Dependencies

1. Clone this repository to your local machine:
```
git clone https://github.com/ADITYAN0702/OMNIFY_ASSIGNMENT_WEATHER_APPLICATION.git
```

2. Open a terminal in ```weather-api``` directory
```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

3.To add your Openweathermap API go to ```weather-api/weather_project/weather_api/views.py```  directory and add your API under api variable

4. To create all the migrations file and apply the migrations run
```
python3 manage.py makemigrations
python3 manage.py migrate
```

5. To create an admin user to run this App. On the terminal, type the following command and provide username, password and email for the admin user
```
 python3 manage.py createsuperuser
 ```

6. Running the Backend Server
```
python manage.py runserver
```

7. Open a new terminal in weather-app directory and run the application using the following commands
```
npm install
npm install axios
np run build
npm start
```

8. Navigate to ```http://localhost:3000``` in your web browser to view the application.


## SCREENSHOTS

<img width="1280" alt="2023-04-29 (1)" src="https://user-images.githubusercontent.com/114352512/235299130-309da7ed-edde-4ec4-9149-5d8c308f0e32.png">
<img width="1280" alt="2023-04-29 (3)" src="https://user-images.githubusercontent.com/114352512/235299141-a43a60a7-5dea-4da5-a5fb-97b7b4942f87.png">
<img width="1280" alt="2023-04-29 (5)" src="https://user-images.githubusercontent.com/114352512/235299143-13b4e71b-7643-4669-b306-5964be869843.png">
<img width="1280" alt="2023-04-29" src="https://user-images.githubusercontent.com/114352512/235299144-de633e60-8a14-44c7-9615-0f266bf49599.png">

## Alternative Approach

You can open the application using the following link ``` https://weather-application-omnify.web.app ``` and then run the backend on your local system using the steps (1-6) mentioned above 

## Authors
ADITYA N
