import logoDark from '../assets/logo-dark-bg.png'

interface FooterLogoProps {
  className?: string
}

function FooterLogo({ className = '' }: FooterLogoProps) {
  return (
    <img
      src={logoDark}
      alt=""
      aria-hidden="true"
      className={`h-14 w-auto flex-shrink-0 object-contain sm:h-20 2xl:h-28 2xl:max-w-[calc((100vw_-_80rem)/2_+_0.75rem)] ${className}`}
    />
  )
}

export default FooterLogo