import clsx from "clsx"
import NextLink from "next/link"

const Link = (props) => {
  const { className, ...otherProps } = props

  return <NextLink {...otherProps} className={clsx(className)} />
}

export default Link
