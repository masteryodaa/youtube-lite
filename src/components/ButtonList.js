import Button from './Button'

const ButtonList = () => {
  const names = ['All', 'Music', 'Mixes', 'Programming', 'React', 'Hip Hop', 'Eminem', 'Comedy', ]
  return (
    <div className='flex text-white ml-10 my-2'>
      {
        names.map((name, index) => {
          return <Button key={index} name={name} />
        })
      }
    </div>
  )
}

export default ButtonList