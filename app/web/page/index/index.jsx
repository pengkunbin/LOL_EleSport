import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    HashRouter
} from 'react-router-dom'
import Vision from 'page/vision'
import Alert from 'component/alert'
import Home from 'page/home'
import stores from 'store/index'
import 'styles/main.scss'
import Ticket from '../ticket'
import Admin from 'page/admin'
import Team from 'page/team';
import Course from '../course';
import PersonData from '../persondata';
import Login from 'page/login'
import Register from 'page/register'
import NewsDetail from 'page/newsdetail'
import VisionDetail from 'page/visiondetail'
import Common from 'page/common'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: grey[300],
            main: grey[500],
            dark: grey[700],
            contrastText: '#fff'
        }
    }
})

const styles = () => ({
    container: {
        maxWidth: '1200px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '100px',
        flexGrow: 1
    }
})

const App = withStyles(styles)(({ classes }) => (
    <Provider stores={stores}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/common" render={() =>
                        <Common>
                            <Switch>
                                <Route path="/common/newsdetail/:orderId" component={NewsDetail} />
                                <Route path="/common/visiondetail/:orderId" component={VisionDetail} />
                            </Switch>
                        </Common>
                    } />
                    <Route path="/" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/home" exact component={Home} />
                                <Route path="/vision" exact component={Vision} />
                                <Route path="/team" exact component={Team} />
                                <Route path="/course" exact component={Course} />
                                <Route path="/persondata" exact component={PersonData} />
                                <Route path="/ticket" exact component={Ticket} />
                                <Redirect to="/home" />
                            </Switch>
                        </Admin>
                    } />
                </Switch>
            </HashRouter>
            <Alert />
        </MuiThemeProvider>
    </Provider>
))

const Index = () => {
    return EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />
}

export default Index
