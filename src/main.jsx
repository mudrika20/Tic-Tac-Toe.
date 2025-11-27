import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserInfo from './UserInfo.jsx'
import TicTacToeMain from './TicTacToeMain.jsx'

createRoot(document.getElementById('root')).render(
    <TicTacToeMain />
)

