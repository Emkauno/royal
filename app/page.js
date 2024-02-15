// import styles from './page.module.css'
import {
  CardHolder,
  LogoContainer,
  MainContainer,
  PageContainer,
  SectionContainer,
} from "@/components/LandingStyles";
import Image from "next/image";

export default function Home() {
  return (
    <MainContainer>
      <PageContainer>
        <LogoContainer>
          <Image src="/logo.png" width={250} height={55} />
        </LogoContainer>
        <SectionContainer>
          <CardHolder>
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
      </PageContainer>
    </MainContainer>
  );
}
