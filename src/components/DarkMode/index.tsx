import { useDarkMode } from '../../CustomsHook'
import './styles.scss'

const DarkMode = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <div className="DarkMode" onClick={() => toggleDarkMode()}>
      <input type="checkbox" id="time" />
      <div className={`${darkMode && 'MoonUp'}`}>Night</div>
    </div>
  )
}

export default DarkMode
