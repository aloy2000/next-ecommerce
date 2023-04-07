import Editprofil from "@/components/business/FormEditAccount"
import Footer from "@/components/business/Footer"
import Header from "@/components/business/Header"
import routes from "@/routes"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      UserId: Number.parseInt(params.UserId, 10),
    },
  },
})

const EditAccount = (props) => {
  return (
    <div>
      <Header />
      <div class="m-20">
        <h1 class="text-3xl font-semibold flex justify-center">Modifier mon compte</h1>
        <div className="flex justify-center">
        <Editprofil />
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default EditAccount
