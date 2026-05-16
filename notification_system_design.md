# Notification System Design

## 1. Architecture
Frontend (React) → API → Logging Middleware → Logging API

## 2. Flow
User opens app  
→ Fetch notifications  
→ Sort top notifications  
→ Display UI  
→ Log events  

## 3. Frontend
- React + Vite
- Material UI
- Responsive design

## 4. Logging Integration
- Custom logging middleware
- Sends logs to API
- Used in API calls & state updates

## 5. Key Features
- Filtering (Event, Result, Placement)
- Responsive UI
- Clean architecture