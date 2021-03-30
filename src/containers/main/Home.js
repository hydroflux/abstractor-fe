import { Grid, Paper } from '@material-ui/core'
import CreateAbstraction from '../../components/CreateAbstraction'

export default function Home({setAbstraction, abstraction}) {

    const image = {
        src: process.env.PUBLIC_URL + '/assets/yosemite-national-park.jpg',
        alt: 'yosemite-national-park'
    }

    return (
        <section className="home">
            <Grid container>
                <Grid className="grid-pane" item sm={7}>
                    <img src={image.src} alt={image.alt}/>
                </Grid>
                <Grid className="grid-pane" item sm={5}>
                    <Paper className="grid-paper">
                        <CreateAbstraction className="form" setAbstraction={setAbstraction} abstraction={abstraction}/>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}
