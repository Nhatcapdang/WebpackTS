export default function Hero({ heroName }: { heroName: string }) {
  if (heroName === 'Iron') {
    throw new Error('Iron is not a hero')
  }
  return <div>{heroName}</div>
}
