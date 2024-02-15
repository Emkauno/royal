// import styles from './page.module.css'
'use client'

import {
  CardHolder,
  LogoContainer,
  MainContainer,
  PageContainer,
  SectionContainer,
} from "@/components/LandingStyles";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <MainContainer>
      <PageContainer>
        <AnimatePresence mode="wait">
        <LogoContainer key="logo" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{
  ease: "linear",
  duration: .3,
}}>
          <Image src="/logo.png" width={250} height={55} preload/>
        </LogoContainer>
        <SectionContainer>
          <CardHolder key="card" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{
  ease: "linear",
  duration: .3,
  delay: 0.1
}}>
            <h1>Atención odontológica de urgencia en <span>Clínica Royal</span></h1>
            <h2>Respuesta rápida y efectiva a tus urgencias odontológicas</h2>
            <p>
              Cuando enfrentas un dolor dental repentino, cada minuto cuenta. En
              Clínica Royal, comprendemos la importancia de una respuesta rápida
              y efectiva a tus emergencias bucales. Confía en nosotros para
              restaurar tu salud bucal y tu bienestar general.
            </p>
            <a href="https://t.dentalsoft.cl/reserva_online/src/public/index.php?clinica=YmQxMF9jbGluaWNhcm95YWw=">AGENDA AHORA</a>
          </CardHolder>
        </SectionContainer>
        </AnimatePresence>
      </PageContainer>
    </MainContainer>
  );
}
