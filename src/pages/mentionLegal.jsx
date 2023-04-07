import Header from "@/components/business/Header"
import Footer from "@/components/business/Footer"

const MentionLegal = () => {
  return (
    <div>
      <div>
        <Header />
        <h1 className="text-3xl font-semibold flex start-center m-8">
          Mention Legale
        </h1>
      </div>
      <div className="m-8">
        <p>Siège social :</p>
        <p>20 Av. André Prothin,</p>
        <p>92400 Courbevoie,</p>
        <p>France</p>
        <p>Dénomination sociale : Meubles AIRNEIS France S.A.S.</p>
        <p>E-mail : customer.support.fr@airneis.com</p>
        <p>RCS Versailles B351 745 724 – S.A.S. au capital de 8.540.000€</p>
        <p>SIREN/SIRET 351 745 724 00258 - Code APE 4759A</p>
        <p>Directeur(s) de la publication : Vanessa Petit</p>
        <p>Hébergeur : AIRNEIS IT</p>
        <p>Téléphone : +33 XX XX XX XX XX</p>
      </div>
      <Footer />
    </div>
  )
}

export default MentionLegal
