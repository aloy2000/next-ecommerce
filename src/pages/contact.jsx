import Communication from "@/web/components/business/FormCommunication"
import Header from "@/web/components/business/Header"
import Footer from "@/web/components/business/Footer"

const Contact = () => {
  return (
    <div>
      <div className="m-16">
        <h1 className="text-3xl flex justify-center font-semibold">Contact</h1>
        <div className="flex justify-center">
          <Communication />
        </div>
      </div>
    </div>
  )
}

export default Contact
