export default function Hero({ heroName }) {
  if (heroName === 'Iron') {
    throw new Error('Iron is not a hero')
  }
  return <div>{heroName}</div>
}
