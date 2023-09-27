import { useState, createContext, useContext } from "react"

const Notification = ({ data }) => {
    const notificationStyle = {
        position: 'absolute',
        top: 800,
        right: 400,
        backgroundColor: data.type === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px 10px 20px',
        fontSize: 20,
        borderRadius: 10
    }

    return (
        <div style={notificationStyle}>
            {data.text}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type, text, time = 2) => {
        setNotificationData({ type, text })
        setTimeout(() => {
            setNotificationData(prev => { return { ...prev, text: '' } })
        }, (time * 1000))
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification data={notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
}