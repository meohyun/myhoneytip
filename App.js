import React from 'react'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import DetailPage from './pages/DetailPage'


// mainpage 통째로 가져옴 / 컴포넌트화, 페이지 분할
export default function App(){
  return (<MainPage/>)
  // return(<DetailPage/>)
}