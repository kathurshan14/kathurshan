import clsx from 'clsx'
import LanguageSwitch from './LanguageSwitch'



export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        'container flex mx-auto px-4 pt-4 sm:pt-6 pb-8'
      )}
    >
      <LanguageSwitch/>
    </div>
  )
}

export default Header