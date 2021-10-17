import { Grid } from '@mui/material'
import './styles.scss'
import { makeStyles } from '@mui/styles'
import Avatar from '../Avatar'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  CardEffects: {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    height: '100vh',
    '& section': {
      height: '100vh',
      scrollSnapAlign: 'start',
      color: 'white',
    },
  },
})

export default function CardEffects() {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  return (
    <div className={classes.CardEffects}>
      <section className="one">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">
                <h2>02</h2>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">
                {' '}
                <h2>02</h2>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">
                <h2>02</h2>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">
                <Avatar
                  height={200}
                  width={200}
                  text="Nguyen Van Kiet Developer Front End"
                  rotate={10}
                  image="https://lh3.googleusercontent.com/wQuaySq8jIoSVvlNUbR4-VIwV-KUlDtVM2Ann6mkjp7BFRLxcx4eteVJvxsWwJCcDgUZ48F4uAfClyxL3W4C1afpzM3cZxSnOnL9nZDknocvbi67BBZkZQG2C6lO9QjsWFoIWqySREjUq-VBTSb01MRDIwDtaxA6pWBwIKHfyUfKlI1kF3wQYNRAje4xS87Xq8_ADXA5lV1oZpzG3ytCdrgnQcCU1-zCnLmp_KxkvY2MgRlahm_uP86jpDjzxGL2LkNXC76P9qlLMQ4HYrXQ14MUpYJnat80Qj0FynwGf8_e0jLldo-HGJbu00RJf3v-NRtDuFaU6ySWij8My0tb8_J-wOuyiJeannu4DrUCz9ytMHia-ik3QrQp-_FZb9XO0Fw7Qi7A94ZVwHDcK7pvzlz1kor0J2ggY55xrsjxljnl7wIOyngLulhJCCAQE1gyZ6SLrY5F5x22TKqbI6s3nhu2qn0q-cm83g2fNHikvSHyaJqz1e3OmL8Ur5L_ZFGcerMdlAouWZ2Y8ql-XYTRMgJ8cQJ3eZL5b4TEYe8VZh2R0oABrfngs85eqTMT3A2BmrPGNyQUc5VHhfqs6Dy-N94L2jEK4jW6b_WENbhg6zem9DMmUpS7VTCIlIz2ObPxU490mu9thXhW8zwBZlfNmTctNKI4ioFP1MjbhT0mM61E_OKm3BtvqMPEuvmdQ3S3_bmWBwASR9hKIo1MCbW4Y87Q-g=w256-h191-no?authuser=0"
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-2">
              <span></span>
              <div className="box-content">
                <h2>cared</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam minus velit aspernatur magnam blanditiis autem,
                  voluptatibus, libero maiores similique modi ducimus vel ullam
                  magni officia excepturi veritatis corporis amet omnis.
                </p>
                <a href="/">Read more</a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">
                <h2>02</h2>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      <section className="two">
        <Avatar
          height={200}
          width={200}
          text="Nguyen Van Kiet Developer Front End"
          rotate={10}
          image="https://media.istockphoto.com/photos/astronaut-on-space-walk-looks-at-lights-of-planet-earth-picture-id1255359039"
        />
        <button onClick={() => i18n.changeLanguage('fr')}>
          change Language
        </button>
        <button onClick={() => i18n.changeLanguage('en')}>
          change Language s
        </button>
      </section>
      <section className="one">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">02</div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">02</div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">02</div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">02</div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-2">
              <span></span>
              <div className="box-content">
                <h2>{t('Welcome to React')}</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam minus velit aspernatur magnam blanditiis autem,
                  voluptatibus, libero maiores similique modi ducimus vel ullam
                  magni officia excepturi veritatis corporis amet omnis.
                </p>
                <a href="/">Read more</a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box-card">
              <div className="box-content">02</div>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}
