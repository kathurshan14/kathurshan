
import avatar from './kathurshan-profile.png'
import clsx from 'clsx'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div
      className={clsx('mx-auto flex justify-center w-48 lg:w-56', className)}
    >
      <img alt="Profile avatar" src={avatar} />
    </div>
  )
}

export default Avatar
