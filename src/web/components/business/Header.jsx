import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/20/solid"
import Link from "@/web/components/ui/Link.jsx"
import routes from "@/web/routes.js"
import BurgerMenu from "@/web/components/ui/BurgerMenu.jsx"
import React, { useContext } from "react"
import Image from "next/image"
import Logo from "../../../../ressources/img/logo.jpg"
import CartContext from "@/Context/CartContext"

const Header = () => {
  const { cartState } = useContext(CartContext)

  const itemCount = cartState.items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <nav>
      <ul className="flex justify-end items-center pr-12 bg-black">
        <li className="flex grow justify-start pl-4">
          <Image width={125} src={Logo} alt="logo" />
        </li>
        <li className="mr-4">
          <Link href={routes.home()}>
            <HomeIcon className="w-8 text-white" />
          </Link>
        </li>
        <li className="mr-4">
          <Link href={routes.home()}>
            <MagnifyingGlassIcon className="w-8 text-white" />
          </Link>
        </li>
        <li className="mr-4 relative">
          <Link href={'/users/1/cartUser'}>
            <ShoppingCartIcon className="w-8 text-white" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex text-xs font-bold text-white bg-red-600 rounded-full w-4 h-4  items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </li>
        <li className="relative">
          <BurgerMenu />
        </li>
      </ul>
    </nav>
  )
}

export default Header
