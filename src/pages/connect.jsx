import SignIn from "@/web/components/business/FormSignIn"
import Header from "@/web/components/business/Header"
import Footer from "@/web/components/business/Footer"
import routes from "@/web/routes"
const Connexion = () => {
  return (
    <div>
      <div className="m-20">
        <h1 className="text-3xl font-semibold flex justify-center">Connexion</h1>
        <div className="flex justify-center">
          <SignIn />
        </div>
        <div className="flex space-x-4 justify-center">
          <a className="underline" href={routes.reset}>
            Mot de passe oublié
          </a>
          <a href={routes.inscription}>Créer un compte</a>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Connexion
