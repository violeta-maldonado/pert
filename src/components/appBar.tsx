
import AppBar from '@mui/material/AppBar';
import { Avatar, Toolbar, Typography }from '@mui/material';

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