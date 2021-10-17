import { useTranslation } from 'react-i18next'
import './style.scss'
import { LANG } from '../../const'
import { setKey } from '../../utils'

export default function ToogleLang() {
  const { i18n } = useTranslation()
  const onChangeLang = (val: string) => {
    i18n.changeLanguage(val)
    setKey<string>('Lang', val)
  }

  return (
    <div
      className="button-cover"
      onClick={() =>
        onChangeLang(i18n.language === LANG.EN ? LANG.VI : LANG.EN)
      }
    >
      <div className="button r" id="button-8">
        <input
          type="checkbox"
          className="checkbox"
          checked={i18n.language === LANG.VI}
        />
        <div className="knobs">
          <span />
        </div>
        <div className="layer" />
      </div>
    </div>
  )
}
