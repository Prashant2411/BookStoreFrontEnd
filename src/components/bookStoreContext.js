import React from 'react'
const BookStoreContext = React.createContext()

const bookConsumer = BookStoreContext.Consumer
const bookProvider = BookStoreContext.Provider

export {bookConsumer,bookProvider}