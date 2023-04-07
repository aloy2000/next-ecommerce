import SignUp from "@/web/components/business/FormSignup"
import Header from "@/web/components/business/Header"
import Footer from "@/web/components/business/Footer"
import routes from "@/web/routes"
const Inscription = () => {
  return (
    <div>
      <div className="m-20">
        <h1 className="text-3xl font-semibold flex justify-center">Inscription</h1>
        <div className="flex justify-center">
          <SignUp />
        </div>
        <div className="flex space-x-4 justify-center">
          Déjà un  compte ? <a className="underline" href={routes.connect}> Connectez-vous.</a>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Inscription
