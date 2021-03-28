import { Paper } from '@material-ui/core'
import PageNavigation from '../../components/PageNavigation'

export default function RightPane({ routes }) {

    return (
        <Paper className="pane">
            <PageNavigation routes={ routes }/>
        </Paper>
    )
}
