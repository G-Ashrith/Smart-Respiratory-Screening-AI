@echo off
echo Starting the Respiratory Disease Detection App...

echo Starting Flask Backend...
start cmd /k "title Flask Backend && python app.py"

echo Starting React Frontend...
cd frontend
start cmd /k "title React Frontend && npm run dev"

echo Both services are starting up! Follow the instructions in the newly opened windows.
