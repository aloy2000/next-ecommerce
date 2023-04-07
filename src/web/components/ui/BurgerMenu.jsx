import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function BurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="bg-black py-8">
      <nav>
        <section className="flex">
          <div onClick={() => setIsNavOpen((prev) => !prev)}>
            <Bars3Icon className="text-white w-10" />
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-1 py-8 bg-black"
              onClick={() => setIsNavOpen(false)}
            >
              <XMarkIcon className="text-white w-10" />
            </div>
            <ul className="font-bold w-32 ">
              <li>
                <a href="/about">Mes Paramètres</a>
              </li>
              <li>
                <a href="/portfolio">Mes commandes</a>
              </li>
              <li>
                <a href="/contact">Se connecter</a>
              </li>
              <li>
                <a>S'inscrire</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}
