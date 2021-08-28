import React from "react";
import { Box } from '@material-ui/core'
import { useStyles } from './Cards.style'
import NY from '../../_assets/img/NovaYork.jpg'
import Tokyo from '../../_assets/img/Tokyo-Main-Image.jpg'
import Londres from '../../_assets/img/London.jpg'
import Toronto from '../../_assets/img/Toronto.jpg'
import Berlim from '../../_assets/img/Berlim.jpg'
import Paris from '../../_assets/img/Paris.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Cards: React.FC = () => {
    const styles = useStyles()
    return (<>
        <Box className={styles.Box}>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                        className={styles.media}
                        image={NY}
                        title="Nova York"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Nova York
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hotel 3 estrelas com preço médio de R$ 1.027 e 5 estrelas com preço médio de R$ 3.891
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                        className={styles.media}
                        image={Tokyo}
                        title="Tokyo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Tokyo
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hotel 3 estrelas com preço médio de R$ 271 e 5 estrelas com preço médio de R$ 1.452
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                        className={styles.media}
                        image={Londres}
                        title="Londres"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Londres
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hotel 3 estrelas com preço médio de R$ 513 e 5 estrelas com preço médio de R$ 1.879
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
        <Box className={styles.secondBox}>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                        className={styles.media}
                        image={Toronto}
                        title="Toronto"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Toronto
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hotel 3 estrelas com preço médio de R$ 674 e 5 estrelas com preço médio de R$ 3.040
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                        className={styles.media}
                        image={Berlim}
                        title="Berlim"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Berlim
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hotel 3 estrelas com preço médio de R$ 472 e 5 estrelas com preço médio de R$ 1.767
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                        className={styles.media}
                        image={Paris}
                        title="Paris"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Paris
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hotel 3 estrelas com preço médio de R$ 757 e 5 estrelas com preço médio de R$ 2.392
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
    </>)
}