
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface IAppBarM {
    title?: string;
}
const AppBarM = (props: IAppBarM) => {
    const { title = 'help' } = props;
    return (
        <AppBar position="static" style={{ background: '#027B76' }}>
            <Toolbar variant="dense">
                <Avatar alt='Remy Sharp' src='/static/arbol.png' />
                <Typography variant="h5" color="#FFFFFF"  >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarM