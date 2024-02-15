'use client'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MainContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(to top, rgba(23,54,91,.6), rgba(255,255,255, 1)), url('/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

export const PageContainer = styled(motion.div)`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const SectionContainer = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;

  @media(max-width: 800px){
    gap: 8px;
    max-width: 100%;
    justify-content: flex-start;
    padding-top: 20%; 
    padding: 0 24px;
  }
  @media(max-width: 450px){
    max-width: 100%;
    justify-content: flex-start;
    padding-top: 20%; 
    padding: 0 12px;
  }
  h1 {
    width: 100%;
    font-size: 55px;
    font-weight: 800;
    color: #17365B;
    span {
      font-weight: bolder;
    }
    @media(max-width: 450px){
      font-size: 40px;
  }
    @media(max-width: 350px){
      font-size: 35px;
  }
  }
  h2 {
    width: 100%;
    font-size: 28px;
    color: white;
    font-weight: 700;
    @media(max-width: 450px){
      font-size: 20px;
  }
  }
  p {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #17365B;
    line-height: 24px;
    &.contact {
      font-weight: bold;
    }
    @media(max-width: 450px){
      font-size: 14px;
  }
  }
  a {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 2px;
    background: #17365B;
    color: white;
    padding: 12px 14px;
    border-radius: 14px;
    align-self: flex-start;
    border: none;
    transition: all .3s ease;
    &:hover {
      background: #24538c;
    }
    @media(max-width: 450px){
      width: 100%;
      text-align: center;
      &:hover {
        background: #17365B;
    }
    }
  }
`

export const CardHolder = styled(motion.div)`
  width: 100%;
  padding: 48px 32px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  border-radius: 14px;
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(8px);
  @media(max-width: 450px){
    padding: 32px 20px;
    gap: 16px;
    max-width: 100%;
  }
`


export const LogoContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 24px;
  height: 80px;
  img {
    @media(max-width: 450px){
      width: 150px;
      height: 33px;
    }
}
@media(max-width: 450px){
  justify-content: center;
}
`